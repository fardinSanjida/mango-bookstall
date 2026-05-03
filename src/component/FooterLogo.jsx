"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLogo({ logo }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  const image = <Image src={logo} alt="BookNest logo" className="h-16 w-auto object-contain sm:h-20" />;

  if (isAuthPage) return image;

  return (
    <Link href="/" aria-label="BookNest home" className="inline-flex">
      {image}
    </Link>
  );
}
