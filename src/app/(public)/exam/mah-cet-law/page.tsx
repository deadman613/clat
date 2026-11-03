import type { Metadata } from "next";
import ExamGuide from "../ExamGuide";

export const metadata: Metadata = {
  title: "MAH-CET Law (5-Year LLB) | Delhi Law School",
  description:
    "An overview of MAH-CET Law for five-year LLB admissions in Maharashtra, including general preparation areas.",
};

export default function MAHCETLawPage() {
  return (
    <ExamGuide
      name="MAH-CET Law (5-Year LL.B.)"
      fullName="Maharashtra Common Entrance Test for the five-year LLB"
      summary="The Maharashtra entrance test for admission to five-year integrated law programmes."
      overview="MAH-CET Law (5-Year LLB) is the state entrance examination used for admission to five-year integrated law degree programmes in Maharashtra. Candidates should refer to the current State CET Cell notification for eligibility, participating colleges, counselling, and admission details."
      preparationAreas={[
        "Practise comprehension, vocabulary, and verbal ability.",
        "Build speed and accuracy in logical and analytical reasoning.",
        "Review general knowledge and current affairs, and confirm the latest syllabus in the official notification.",
      ]}
    />
  );
}
