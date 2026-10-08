import { Metadata } from "next";
import CLATInfoClient from "./CLATInfoClient";

export const metadata: Metadata = {
  title: "CLAT Exam — Complete Information, Syllabus & Pattern | LexAscent",
  description:
    "Everything about CLAT 2025 — eligibility, exam pattern, syllabus, important dates, and preparation strategy. Your complete guide to Common Law Admission Test.",
};

export default function CLATPage() {
  return <CLATInfoClient />;
}
