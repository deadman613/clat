import type { Metadata } from "next";
import ExamGuide from "../ExamGuide";

export const metadata: Metadata = {
  title: "LNAT — Law National Aptitude Test | Delhi Law School",
  description:
    "Learn about the LNAT, the law admissions aptitude test, and how to prepare for its reading, reasoning, and written-response tasks.",
};

export default function LNATPage() {
  return (
    <ExamGuide
      name="LNAT"
      fullName="Law National Aptitude Test"
      summary="An admissions aptitude test used by participating universities for law applications."
      overview="The Law National Aptitude Test (LNAT) helps participating universities assess skills relevant to studying law. Applicants should check the requirements and deadlines of each university they are applying to, as these can differ."
      preparationAreas={[
        "Read challenging non-fiction texts and practise identifying arguments, assumptions, and conclusions.",
        "Build clear, evidence-led written responses and organise ideas under time limits.",
        "Review the current test format and application requirements on the official LNAT and university websites.",
      ]}
    />
  );
}
