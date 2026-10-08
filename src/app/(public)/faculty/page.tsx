import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FacultyClient from "./FacultyClient";

export const metadata: Metadata = {
  title: "Expert CLAT Faculty — LexAscent",
  description: "Meet our team of NLU alumni and subject matter experts with decades of combined CLAT coaching experience.",
};

export default function FacultyPage() {
  return (
    <>
      <Navbar />
      <main><FacultyClient /></main>
      <Footer />
    </>
  );
}
