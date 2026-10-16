"use server";
import { cookies, headers } from "next/headers";
import bcrypt from "bcryptjs";
import connectDB from "@/db/connect";
import User from "@/models/user";
import { checkRateLimit, clientIp } from "@/lib/bizzbee/rateLimit";
import { signSession, verifySession, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

const LOGIN_WINDOW = [{ windowMs: 15 * 60_000, max: 8 }];

export async function login(username, password) {
  try {
    if (!username || !password) {
      return { success: false, message: "Username and password are required." };
    }
    username = String(username);
    password = String(password);
    if (username.length > 100 || password.length > 200) {
      return { success: false, message: "Invalid username or password." };
    }

    // Brute-force guard: attempts are limited per IP and per username.
    const ip = clientIp({ headers: await headers() });
    const byIp = checkRateLimit(`login-ip:${ip}`, LOGIN_WINDOW);
    const byUser = checkRateLimit(`login-user:${username.trim().toLowerCase()}`, LOGIN_WINDOW);
    if (!byIp.ok || !byUser.ok) {
      return { success: false, message: "Too many login attempts. Please try again in a few minutes." };
    }

    await connectDB();

    const user = await User.findOne({ username: username.trim() });
    if (!user) {
      return { success: false, message: "Invalid username or password." };
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return { success: false, message: "Invalid username or password." };
    }

    const token = signSession({
      userId: user._id.toString(),
      username: user.username,
      role: user.role,
      name: user.name,
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });

    return { success: true, role: user.role };
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false, message: "Login failed." };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  return { success: true };
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return verifySession(token);
}
