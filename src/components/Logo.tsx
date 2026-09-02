import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/img/logo-header.png"
      alt=""
      width={31}
      height={32}
      className={`h-8 w-auto object-contain ${className}`}
      priority
    />
  );
}
