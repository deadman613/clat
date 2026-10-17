import Link from "next/link";

const columns = [
  {
    title: "Programs",
    links: [
      { label: "CLAT Foundation", href: "/courses/clat-foundation" },
      { label: "CLAT + AILET Comprehensive", href: "/courses/clat-power-batch" },
      { label: "AILET Focus", href: "/courses/ailet-preparation" },
      { label: "All programs", href: "/courses" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Our approach", href: "/#approach" },
      { label: "Mentorship", href: "/#mentorship" },
      { label: "The reading room", href: "/#reading-room" },
      { label: "Student stories", href: "/results" },
    ],
  },
  {
    title: "Let’s connect",
    links: [
      { label: "Speak to an advisor", href: "/#consultation" },
      { label: "Find your program", href: "/courses" },
      { label: "About LexAscent", href: "/about" },
      { label: "Contact us", href: "/enquiry" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        <div className="editorial-footer__main">
          <div className="editorial-footer__brand">
            <Link href="/" className="editorial-footer__logo">
              <span aria-hidden="true">L</span>
              LexAscent
            </Link>
            <p className="editorial-footer__motto">Think deeply. Aim higher.</p>
            <p>
              Thoughtful preparation for CLAT and AILET, and the legal mind
              you&apos;re building along the way.
            </p>
          </div>
          <div className="editorial-footer__columns">
            {columns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="editorial-footer__bottom">
          <span>© {new Date().getFullYear()} LexAscent. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of use</Link>
            <Link href="/#top">Back to top ↑</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
