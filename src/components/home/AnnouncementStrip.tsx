import Link from "next/link";

export default function AnnouncementStrip() {
  return (
    <div className="strip-announcement editorial-announcement">
      For the next chapter you choose.{" "}
      <Link href="/courses" className="underline font-semibold">
        Explore our programs →
      </Link>
    </div>
  );
}
