import mongoose from "mongoose";
import dns from "node:dns/promises";

// One shared connection attempt: concurrent requests await the same promise
// instead of each calling mongoose.connect(). It is cleared on failure so the
// next request retries.
let connecting = null;
// After a failed attempt, fail fast for a short while instead of making every
// caller (e.g. each page during `next build`) wait out the connect timeout.
let lastFailureAt = 0;
const RETRY_COOLDOWN_MS = 15_000;

const connectDB = async () => {
  // Already connected — reuse it instead of re-running the
  // handshake on every request, which was adding to server response time.
  if (mongoose.connection.readyState === 1) return;
  if (connecting) return connecting;
  if (Date.now() - lastFailureAt < RETRY_COOLDOWN_MS) {
    throw new Error("MongoDB is unreachable (recent connection attempt failed).");
  }

  connecting = (async () => {
    // For only development use
    if (process.env.NODE_ENV === "development") {
      dns.setServers(["1.1.1.1", "8.8.8.8"]); // Cloudflare + Google
      dns.setDefaultResultOrder("ipv4first");
    }
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  })();

  try {
    await connecting;
  } catch (error) {
    lastFailureAt = Date.now();
    console.error(error.message);
    // Throw instead of process.exit(): a short Atlas blip must not take the
    // whole site down. Callers catch and fall back; the next request retries.
    throw error;
  } finally {
    connecting = null;
  }
};

export default connectDB;
