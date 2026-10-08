import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "CLAT Results & Success Stories — LexAscent",
  description: "Our students consistently achieve top ranks in CLAT. 1000+ top NLU selections since inception. View our success stories.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main><ResultsClient /></main>
      <Footer />
    </>
  );
}
