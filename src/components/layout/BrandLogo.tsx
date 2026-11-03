import Image from "next/image";

type BrandLogoProps = {
  className: string;
  priority?: boolean;
};

export default function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${className}`}>
      <Image
        src="/logo.jpeg"
        alt="Delhi Law School"
        width={1600}
        height={1600}
        priority={priority}
      />
    </span>
  );
}
