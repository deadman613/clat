import { Metadata } from "next";
import FacultyClient from "./FacultyClient";

export const metadata: Metadata = {
  title: "Expert CLAT Faculty — NLU Alumni & Subject Specialists | Delhi Law School",
  description:
    "Meet Delhi Law School's faculty — NLU Delhi, NALSAR and NLSIU alumni with 7–14 years of CLAT coaching experience.",
};

export default function FacultyPage() {
  return <FacultyClient />;
}
