import jwt from "jsonwebtoken";

const SESSION_COOKIE = "bbc_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

// Refuse to sign or verify with a missing/weak secret rather than issuing
// forgeable sessions.
function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET must be set and at least 32 characters long.");
  }
  return secret;
}

export function signSession({ userId, username, role, name }) {
  return jwt.sign(
    { userId, username, role, name },
    getSecret(),
    { expiresIn: SESSION_MAX_AGE },
  );
}

export function verifySession(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, getSecret());
  } catch {
    return null;
  }
}

export { SESSION_COOKIE, SESSION_MAX_AGE };
