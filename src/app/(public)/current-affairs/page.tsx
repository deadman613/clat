import { Metadata } from "next";
import CurrentAffairsClient from "./CurrentAffairsClient";

export const metadata: Metadata = {
  title: "Daily Current Affairs for CLAT 2025 — LexAscent",
  description:
    "Daily CLAT-focused current affairs with relevance analysis. Legal news, polity, economy, environment — curated for CLAT aspirants.",
};

export default function CurrentAffairsPage() {
  return <CurrentAffairsClient />;
}
