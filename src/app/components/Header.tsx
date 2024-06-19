"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create Post",
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <Image
          src={"https://bytegrad.com/course-assets/youtube/example-logo.png"}
          alt="logo"
          width={50}
          height={50}
          className="w-[45px] h-[45px]"
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`text-zinc-400 ${
                  pathname === link.href
                    ? "font-bold text-[16px] duration-300 ease-in-out"
                    : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
