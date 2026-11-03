import type { Metadata } from "next";
import ExamGuide from "../ExamGuide";

export const metadata: Metadata = {
  title: "NMIMS-LAT — Law Admission Test | Delhi Law School",
  description:
    "An overview of NMIMS-LAT law admissions and general areas to consider while preparing.",
};

export default function NMIMSLATPage() {
  return (
    <ExamGuide
      name="NMIMS-LAT"
      fullName="NMIMS Law Aptitude Test"
      summary="An entrance test associated with admissions to law programmes at NMIMS."
      overview="NMIMS-LAT is part of the law admission process at NMIMS. Programme availability, eligibility, and selection requirements may vary, so applicants should use the current NMIMS admission bulletin as their source for application details."
      preparationAreas={[
        "Practise reading comprehension, vocabulary, and verbal reasoning.",
        "Develop accuracy in logical and analytical reasoning.",
        "Review current affairs and confirm the latest test format and admission process in NMIMS's official information.",
      ]}
    />
  );
}
