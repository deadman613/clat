import { Metadata } from "next";
import EnquiryClient from "./EnquiryClient";

export const metadata: Metadata = {
  title: "Book a Free Demo Class | LexAscent",
  description:
    "Book a free counselling session or demo class with LexAscent. Our mentors will help you choose the right CLAT batch and preparation strategy.",
};

export default function EnquiryPage() {
  return <EnquiryClient />;
}
