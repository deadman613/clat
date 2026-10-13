import { Metadata } from "next";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "CLAT Results 2024 — Top NLU Selections | LexAscent",
  description:
    "LexAscent students achieved AIR 3, AIR 7, AIR 12 in CLAT 2024. 1,000+ NLU selections since 1994. View verified results and toppers.",
};

export default function ResultsPage() {
  return <ResultsClient />;
}
