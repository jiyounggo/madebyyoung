"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "CONTACT", href: "#contact" },
];

/* =========================================================
   SOCIAL LINKS

   ↓ 실제 계정 주소 생기면 href만 변경하면 됨
========================================================= */

const socialItems = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    name: "Website",
    href: "https://madebyyoung.com",
    icon: Globe2,
  },
];

export default function Header() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
  z-50
  w-full

  border-b
  border-black/[0.05]

  transition-all
  duration-500
  ease-[cubic-bezier(0.16,1,0.3,1)]

  ${
    isScrolled
      ? `
        top-0
        bg-white/90
        shadow-[0_8px_30px_rgba(0,0,0,0.035)]
        backdrop-blur-xl
      `
      : `
        top-[38px]
        bg-white/70
        backdrop-blur-md
      `
  }
`}
    >
      <div
        className="
          mx-auto
          flex
          h-[78px]
          w-full
          items-center
          justify-between

          px-[clamp(20px,4vw,72px)]
        "
      >
        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          aria-label="MADE BY YOUNG 홈"
          className="
            group
            relative
            z-10
            block
            shrink-0
          "
        >
          <div
            className="
              relative
              h-[36px]
              w-[clamp(145px,12vw,205px)]
            "
          >
            <Image
              src="/images/header-logo-black.png"
              alt="MADE BY YOUNG"
              width={700}
              height={200}
              priority
              className="
                absolute
                left-0
                top-1/2

                h-auto
                w-full

                -translate-y-1/2

                object-contain
                object-left
              "
            />
          </div>

          {/* logo hover underline */}

          <span
            className="
              absolute
              -bottom-[8px]
              left-0

              h-[2px]
              w-0

              rounded-full
              bg-[#DE1334]

              transition-all
              duration-500

              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:w-full
            "
          />
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          aria-label="메인 메뉴"
          className="
            absolute
            left-1/2

            hidden
            -translate-x-1/2
            items-center

            gap-[clamp(24px,2.4vw,48px)]

            lg:flex
          "
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="
                group
                relative
                overflow-hidden

                py-2

                text-[14px]
                font-medium

                tracking-[0.04em]

                text-[#171717]
              "
            >
              {/* DEFAULT */}

              <span
                className="
                  block

                  transition-transform
                  duration-500

                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover:-translate-y-[150%]
                "
              >
                {item.name}
              </span>

              {/* HOVER */}

              <span
                className="
                  absolute
                  left-0
                  top-[150%]

                  text-[#DE1334]

                  transition-transform
                  duration-500

                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover:-translate-y-[150%]
                "
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* ==================================================
            DESKTOP RIGHT
        ================================================== */}

        <div
          className="
            hidden
            items-center
            gap-3

            lg:flex
          "
        >
          {/* SOCIAL ICONS */}

          <div
            className="
              flex
              items-center
              gap-1

              rounded-full

              border
              border-black/[0.07]

              bg-white/60

              p-1

              shadow-[0_4px_20px_rgba(0,0,0,0.025)]
            "
          >
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="
                    group

                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    text-[#202020]

                    transition-all
                    duration-300

                    hover:bg-[#DE1334]
                    hover:text-white
                  "
                >
                  <Icon
                    size={16}
                    className="
                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                  />
                </a>
              );
            })}
          </div>

          {/* CONTACT BUTTON */}

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="
              group

              flex
              h-[42px]
              items-center
              justify-center
              gap-2

              rounded-full

              bg-[#171717]

              px-5

              text-[13px]
              font-medium

              tracking-[0.025em]

              text-white

              transition-all
              duration-300

              hover:bg-[#DE1334]
            "
          >
            <span>CONTACT</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300

                group-hover:-translate-y-[2px]
                group-hover:translate-x-[2px]
              "
            />
          </a>
        </div>

        {/* ==================================================
            MOBILE RIGHT
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-2

            lg:hidden
          "
        >
          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              border
              border-black/[0.07]

              bg-white/70

              text-[#171717]

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-[#DE1334]
              hover:text-white
            "
          >
            <FaInstagram size={16} />
          </a>

          {/* CONTACT */}

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="
              flex
              h-9
              items-center
              justify-center
              gap-1.5

              rounded-full

              bg-[#171717]

              px-4

              text-[11px]
              font-medium

              tracking-[0.04em]

              text-white

              transition-colors
              duration-300

              hover:bg-[#DE1334]
            "
          >
            CONTACT
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
