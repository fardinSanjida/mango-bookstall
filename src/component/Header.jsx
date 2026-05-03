"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/logo.png";
import { useAuth } from "@/hooks/useAuth";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "All Books" },
  { href: "/profile", label: "My Profile" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  function handleLogout() {
    authClient.signOut();
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf3]/95 backdrop-blur">
      <nav className="grid min-h-20 w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2 sm:px-8 md:min-h-24 lg:px-12">
        {isAuthPage ? (
          <Image src={logo} alt="BookNest logo" className="h-14 w-auto object-contain sm:h-16 md:h-18" priority />
        ) : (
          <Link href="/" aria-label="BookNest home" className="flex items-center text-[#28170c]">
            <Image src={logo} alt="BookNest logo" className="h-14 w-auto object-contain sm:h-16 md:h-18" priority />
          </Link>
        )}

        {user && (
          <div className="hidden items-center justify-center gap-8 text-sm font-semibold md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b-2 py-7 transition ${
                    active
                      ? "border-[#d77716] text-[#d77716]"
                      : "border-transparent text-[#28170c] hover:text-[#8a3f08]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
          {user ? (
            <>
              <Link href="/profile" className="flex min-w-0 items-center gap-2">
                <img
                  src={user.image || "https://i.pravatar.cc/120?img=7"}
                  alt={user.name}
                  className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-[#f0dfca] sm:h-9 sm:w-9"
                />
                <span className="hidden max-w-36 truncate text-sm font-semibold text-[#28170c] sm:inline lg:max-w-48">{user.name}</span>
              </Link>
              <button onClick={handleLogout} className="btn btn-xs border-0 bg-[#5a2605] text-white hover:bg-[#783409] sm:btn-sm">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-xs border-0 bg-[#5a2605] text-white hover:bg-[#783409] sm:btn-sm">
              Login
            </Link>
          )}
        </div>
      </nav>
      {user && (
        <div className="grid grid-cols-3 border-t border-[#eadfce] bg-[#fffaf3] text-center text-xs font-semibold md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-3 ${active ? "bg-[#f4e3ce] text-[#8a3f08]" : "text-[#28170c]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
