"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "WORK", href: "/works" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute left-0 top-0 z-50 w-full"
    >
      <div
        className="
          mx-auto
          flex
          w-[calc(100%-96px)]
          max-w-[1800px]
          items-center
          justify-between
          border-b
          border-black/10
          py-6
          max-md:w-[calc(100%-32px)]
          max-md:py-5
        "
      >
        <Link
          href="/"
          aria-label="MADE BY YOUNG 홈"
          className="
            text-[20px]
            font-bold
            tracking-[-0.04em]
            text-[#111]
            sm:text-[22px]
          "
        >
          MADE BY <span className="text-[#DE1334]">YOUNG</span>
        </Link>

        <nav
          aria-label="메인 메뉴"
          className="
            hidden
            items-center
            gap-[clamp(28px,3.2vw,60px)]
            lg:flex
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                group
                relative
                overflow-hidden
                text-[clamp(17px,1.25vw,23px)]
                font-semibold
                tracking-[-0.025em]
                text-[#111]
              "
            >
              <span
                className="
                  block
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:-translate-y-[120%]
                "
              >
                {item.name}
              </span>

              <span
                className="
                  absolute
                  left-0
                  top-[120%]
                  text-[#DE1334]
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:-translate-y-[120%]
                "
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="
            text-[12px]
            font-semibold
            text-[#111]
            lg:hidden
          "
        >
          CONTACT <span className="text-[#DE1334]">↗</span>
        </Link>
      </div>
    </motion.header>
  );
}
