import type { Metadata } from "next";
import ExamGuide from "../ExamGuide";

export const metadata: Metadata = {
  title: "SLAT — Symbiosis Law Admission Test | Delhi Law School",
  description:
    "A guide to SLAT, the Symbiosis law admission test, with general preparation areas and application guidance.",
};

export default function SLATPage() {
  return (
    <ExamGuide
      name="SLAT"
      fullName="Symbiosis Law Admission Test"
      summary="The entrance test for undergraduate law programmes at Symbiosis Law Schools."
      overview="The Symbiosis Law Admission Test (SLAT) is used in the admission process for undergraduate law programmes at Symbiosis Law Schools. Applicants should consult the latest Symbiosis admission information for programme-specific criteria, test details, and selection steps."
      preparationAreas={[
        "Strengthen reading comprehension and vocabulary through regular practice.",
        "Practise logical and analytical reasoning questions.",
        "Stay informed on current affairs and review the latest official test pattern and selection process.",
      ]}
    />
  );
}
