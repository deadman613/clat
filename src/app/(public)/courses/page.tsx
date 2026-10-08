import { Metadata } from "next";
import CoursesClientPage from "./CoursesClientPage";

export const metadata: Metadata = {
  title: "CLAT & AILET Courses — LexAscent",
  description:
    "Choose from our comprehensive range of CLAT and AILET preparation courses. From foundation to crash courses — find the right program for your law entrance journey.",
};

export default function CoursesPage() {
  return <CoursesClientPage />;
}
