import Link from "next/link";
import { ArrowRight } from "lucide-react";

const examDetails = [
  ["Exam Name", "CLAT (Common Law Admission Test)"],
  ["Conducting Body", "The Consortium of National Law Universities"],
  ["Exam Level", "UG"],
  ["Exam Mode", "Offline (pen-and-paper)"],
  ["Exam Duration", "120 Minutes"],
  ["Total Questions", "120"],
  ["Marking Scheme", "+1 for correct, -0.25 for incorrect"],
];

export default function ExamOverview() {
  return (
    <section className="editorial-exam-overview" aria-labelledby="exam-overview-heading">
      <div className="editorial-container">
        <h2 id="exam-overview-heading">Exam Overview</h2>
        <div className="editorial-exam-overview__content">
          <div className="editorial-exam-overview__intro">
            <h3>CLAT 2027 Exam Overview</h3>
            <p>
              CLAT follows a defined pattern, marking scheme, and format. Here
              is a quick overview of the undergraduate exam.
            </p>
          </div>
          <div className="editorial-exam-overview__table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Particular</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {examDetails.map(([particular, detail]) => (
                  <tr key={particular}>
                    <th scope="row">{particular}</th>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="editorial-exam-overview__footer">
            <p>
              Two hours for 120 questions means about one minute per question.
              Practise reading passages carefully and efficiently.
            </p>
            <Link href="/exam/clat" className="editorial-text-link">
              Explore the CLAT guide <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
