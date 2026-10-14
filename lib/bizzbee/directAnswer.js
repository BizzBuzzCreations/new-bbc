import { teamAnswer } from "./teamLookup";
import { industryAnswer } from "./industryLookup";

// SERVER ONLY. Precise, deterministic answers for questions about one specific
// thing — a person / role on the team, or one industry — so the visitor gets
// only what they asked for (same in AI mode and stored-answer mode).
export function directAnswer(messages) {
  return teamAnswer(messages) || industryAnswer(messages) || null;
}
