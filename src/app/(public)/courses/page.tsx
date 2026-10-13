import { Metadata } from "next";
import CoursesClientPage from "./CoursesClientPage";

export const metadata: Metadata = {
  title: "CLAT Courses — Foundation, Dropper & Crash Course | LexAscent",
  description:
    "Choose from CLAT Foundation (Class 11), Power Batch (Class 12 & Droppers), Crash Course, and AILET Preparation. Expert faculty, 500+ mock tests.",
};

export default function CoursesPage() {
  return <CoursesClientPage />;
}
