import Link from "next/link";
import { ArrowRight } from "lucide-react";

const examDetails = [
  ["Exam date", "6 December 2026"],
  ["Exam time", "2 pm to 4 pm"],
  ["Exam mode", "Offline (pen-and-paper)"],
  ["Application window", "Closed 7 November 2026; corrections until 10 November 2026"],
  ["Exam duration", "2 hours"],
  ["Total questions", "120 multiple-choice questions"],
  ["Sections", "English, Current Affairs and GK, Legal Reasoning, Logical Reasoning, Quantitative Techniques"],
  ["Marking scheme", "+1 for correct, -0.25 for incorrect"],
];

const modeDetails = [
  ["Live online", "Students across North India", "Live classes, recordings, doubt sessions, online mocks"],
  ["Classroom in Delhi", "Students who prefer in-person learning", "Daily batches, on-campus tests, faculty access"],
];

const feeDetails = [
  ["CLAT Foundation", "Online / classroom options vary by batch", "Contact advisor", "Contact advisor", "Confirm with advisor"],
  ["CLAT + AILET Comprehensive", "Online / classroom options vary by batch", "Contact advisor", "Contact advisor", "Confirm with advisor"],
  ["AILET Focus", "Online / classroom options vary by batch", "Contact advisor", "Contact advisor", "Confirm with advisor"],
];

export default function ExamOverview() {
  return (
    <section className="editorial-exam-overview" aria-labelledby="preparation-options-heading">
      <div className="editorial-container">
        <h2 id="preparation-options-heading">Choose Your Mode and Plan Your Preparation</h2>
        <section className="editorial-exam-overview__content" aria-labelledby="mode-heading">
          <div className="editorial-exam-overview__intro">
            <h3 id="mode-heading">Choose your mode</h3>
            <p>Compare the available ways to study, then confirm current batch availability with an advisor.</p>
          </div>
          <div className="editorial-exam-overview__table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Mode</th>
                  <th scope="col">Best for</th>
                  <th scope="col">What you get</th>
                </tr>
              </thead>
              <tbody>
                {modeDetails.map(([mode, audience, details]) => (
                  <tr key={mode}>
                    <th scope="row">{mode}</th>
                    <td>{audience}</td>
                    <td>{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="editorial-exam-overview__content" aria-labelledby="fees-heading">
          <div className="editorial-exam-overview__intro">
            <h3 id="fees-heading">Fees and upcoming batches</h3>
            <p>Fees, batch dates, and course duration can change. Contact an advisor for current details before enrolling.</p>
          </div>
          <div className="editorial-exam-overview__table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Current fee</th>
                  <th scope="col">Next batch</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {feeDetails.map(([course, mode, fee, nextBatch, duration]) => (
                  <tr key={course}>
                    <th scope="row">{course}</th>
                    <td>{mode}</td>
                    <td>{fee}</td>
                    <td>{nextBatch}</td>
                    <td>{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <h2 id="exam-overview-heading">CLAT 2027: Exam Date, Pattern and Key Dates</h2>
        <div className="editorial-exam-overview__content">
          <div className="editorial-exam-overview__intro">
            <h3>CLAT 2027 Exam Overview</h3>
            <p>
              Key information for the Common Law Admission Test undergraduate exam.
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
              Source: the official Consortium of NLUs notification. Updated 11 November 2026.
              Check the official site for any changes to dates or instructions.
            </p>
            <div>
              <a
                className="editorial-text-link"
                href="https://consortiumofnlus.ac.in/clat-2027/"
                target="_blank"
                rel="noreferrer"
              >
                Official notification <ArrowRight size={14} aria-hidden="true" />
              </a>
              <Link href="/exam/clat" className="editorial-text-link">
                Read the full CLAT guide <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
