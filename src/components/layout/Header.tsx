"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "HOME", href: "/#home" },
  { name: "SERVICES", href: "/#services" },
  { name: "PROCESS", href: "/#process" },
  { name: "PORTFOLIO", href: "/#portfolio" },

  { name: "CONTACT", href: "/#contact" },
];

export default function Header() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="sticky top-0 left-0 z-50 w-full border-b border-black/[0.05] bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.035)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[78px] w-full items-center justify-between px-[clamp(20px,4vw,72px)]">
        <Link
          href="/"
          aria-label="MADE BY YOUNG 홈"
          onClick={closeMobileMenu}
          className="group relative z-10 block shrink-0"
        >
          <div className="relative h-[36px] w-[clamp(145px,12vw,205px)]">
            <Image
              src="/images/header-logo-black.png"
              alt="MADE BY YOUNG"
              width={700}
              height={200}
              priority
              className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-contain object-left"
            />
          </div>

          <span className="absolute -bottom-[8px] left-0 h-[2px] w-0 rounded-full bg-[#DE1334] transition-all duration-500 group-hover:w-full" />
        </Link>

        <nav
          aria-label="메인 메뉴"
          className="hidden items-center gap-[clamp(15px,1.5vw,28px)] xl:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative py-2 text-[12px] font-medium tracking-[0.04em] text-[#171717] transition-colors duration-300 hover:text-[#DE1334]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="group ml-1 flex h-[38px] items-center justify-center gap-1.5 rounded-full bg-[#171717] px-4 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-[#DE1334]"
          >
            문의하기
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#171717] xl:hidden"
        >
          {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white transition-all duration-300 xl:hidden ${
          isMobileMenuOpen
            ? "max-h-[600px] border-t border-black/10"
            : "max-h-0"
        }`}
      >
        <nav className="px-5 py-5" aria-label="모바일 메뉴">
          <div className="grid grid-cols-2 border-t border-black/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="border-b border-black/10 py-4 text-[12px] font-semibold tracking-[0.06em] text-[#171717]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            onClick={closeMobileMenu}
            className="mt-6 flex h-12 items-center justify-center gap-2 bg-[#171717] text-[13px] font-medium text-white"
          >
            프로젝트 문의
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
