import Link from "next/link";

export default function AnnouncementStrip() {
  return (
    <div className="strip-announcement">
      CLAT 2025 notification expected in <strong>October 2024</strong>.{" "}
      <Link href="/exam/clat" className="underline font-semibold">
        Check all dates →
      </Link>
    </div>
  );
}
