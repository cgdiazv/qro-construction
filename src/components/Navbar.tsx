"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#b4b4b4]/40 bg-white text-[#223594] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="QRO Construction logo"
              width={160}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0172be] ${
                    isActive ? "font-semibold text-[#0172be]" : "text-[#666666]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="rounded-md bg-[#0172be] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#015f9a]"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="rounded p-2 text-[#666666] hover:text-[#0172be] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7a1 1 0 00-1.41 1.42L10.59 12l-4.88 4.88a1 1 0 101.41 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40"
            aria-label="Close menu"
          />
          <div className="fixed left-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col border-r border-[#b4b4b4]/30 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#b4b4b4]/30 px-4 py-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <Image
                  src="/logo.webp"
                  alt="QRO Construction logo"
                  width={140}
                  height={42}
                  priority
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded p-2 text-[#666666] hover:text-[#0172be]"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7a1 1 0 00-1.41 1.42L10.59 12l-4.88 4.88a1 1 0 101.41 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 space-y-2 px-4 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full rounded-lg px-3 py-3 text-left text-base font-medium transition-colors ${
                      isActive ? "bg-[#eaf6ff] text-[#0172be]" : "text-[#666666] hover:bg-[#f5f7fa] hover:text-[#0172be]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-[#b4b4b4]/30 px-4 py-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-md bg-[#0172be] px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[#015f9a]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
