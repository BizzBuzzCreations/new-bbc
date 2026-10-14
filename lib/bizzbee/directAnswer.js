import { teamAnswer } from "./teamLookup";
import { industryAnswer } from "./industryLookup";
import { serviceAnswer, digitalMarketingAnswer } from "./serviceLookup";
import { brandMeaningAnswer } from "./brandMeaning";
import { contactAnswer } from "./contactLookup";
import { companyOverviewAnswer } from "./companyOverview";

// SERVER ONLY. Precise, deterministic answers for questions about one specific
// thing — a person / role on the team, or one industry — so the visitor gets
// only what they asked for (same in AI mode and stored-answer mode).
export function directAnswer(messages) {
  return contactAnswer(messages) || brandMeaningAnswer(messages) || companyOverviewAnswer(messages) || teamAnswer(messages) || industryAnswer(messages) || digitalMarketingAnswer(messages) || serviceAnswer(messages) || null;
}
