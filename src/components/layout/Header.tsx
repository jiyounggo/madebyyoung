"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "WORK", href: "/works" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full

        transition-colors
        duration-500

        ${isScrolled ? "bg-[#111111]" : "bg-transparent"}
      `}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          items-center
          justify-between

          px-[clamp(20px,4vw,72px)]
          py-[clamp(18px,1.8vw,28px)]
        "
      >
        {/* ==========================================
            LOGO
        ========================================== */}

        <Link
          href="/"
          aria-label="MADE BY YOUNG 홈"
          className="
            group
            relative
            block
            shrink-0
          "
        >
          <div
            className="
              relative
              h-[clamp(30px,2.7vw,43px)]
              w-[clamp(150px,13vw,220px)]
            "
          >
            {/* ======================================
                투명 헤더용 BLACK LOGO
            ====================================== */}

            <Image
              src="/images/header-logo-black.png"
              alt="MADE BY YOUNG"
              width={700}
              height={200}
              priority
              className={`
                absolute
                left-0
                top-1/2

                h-auto
                w-full
                -translate-y-1/2

                object-contain
                object-left

                transition-all
                duration-500

                ${isScrolled ? "pointer-events-none opacity-0" : "opacity-100"}
              `}
            />

            {/* ======================================
                검정 헤더용 WHITE LOGO
            ====================================== */}

            <Image
              src="/images/header-logo-white.png"
              alt=""
              aria-hidden="true"
              width={700}
              height={200}
              className={`
                absolute
                left-0
                top-1/2

                h-auto
                w-full
                -translate-y-1/2

                object-contain
                object-left

                transition-all
                duration-500

                ${isScrolled ? "opacity-100" : "pointer-events-none opacity-0"}
              `}
            />
          </div>

          {/* HOVER RED LINE */}

          <span
            className="
              absolute
              -bottom-[7px]
              left-0

              h-[2px]
              w-0

              bg-[#DE1334]

              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:w-full
            "
          />
        </Link>

        {/* ==========================================
            DESKTOP MENU
        ========================================== */}

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
              "
            >
              {/* 기본 메뉴 */}

              <span
                className={`
                  block

                  transition-all
                  duration-500

                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover:-translate-y-[120%]

                  ${isScrolled ? "text-white" : "text-[#111111]"}
                `}
              >
                {item.name}
              </span>

              {/* HOVER 메뉴 */}

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

        {/* ==========================================
            MOBILE
        ========================================== */}

        <Link
          href="/contact"
          className={`
            text-[12px]
            font-semibold

            transition-colors
            duration-500

            lg:hidden

            ${isScrolled ? "text-white" : "text-[#111111]"}
          `}
        >
          CONTACT
          <span className="ml-1 text-[#DE1334]">↗</span>
        </Link>
      </div>
    </motion.header>
  );
}
