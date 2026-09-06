"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
    w-full
    border-t
    border-[#dedede]
    bg-[#f8f8f8]
    text-[#171717]
  "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]

          px-5
          pb-6
          pt-10

          sm:px-7
          sm:pt-12

          md:px-10
          md:pb-7
          md:pt-14

          lg:px-0
          lg:pt-16
        "
      >
        {/* ==================================================
            TOP
        ================================================== */}
        <div
          className="
            flex
            flex-col
            gap-9

            md:flex-row
            md:items-start
            md:justify-between
            md:gap-12
          "
        >
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <Link
              href="/"
              className="
                inline-flex
                items-center

                font-gmarket
                text-[22px]
                font-semibold

                tracking-[-0.055em]

                sm:text-[24px]
              "
            >
              MADE BY YOUNG
              <span
                className="
                  ml-[3px]
                  mt-[7px]

                  h-[6px]
                  w-[6px]

                  rounded-full
                  bg-[#de1334]
                "
              />
            </Link>

            {/* CONTACT INFO */}
            <div
              className="
                mt-8

                flex
                flex-col
                gap-6

                sm:flex-row
                sm:flex-wrap
                sm:gap-x-12
                sm:gap-y-6

                md:mt-10
              "
            >
              {/* EMAIL */}
              <div>
                <p
                  className="
                    mb-1

                    font-gmarket
                    text-[12px]
                    font-semibold

                    sm:text-[13px]
                  "
                >
                  E-mail
                </p>

                <a
                  href="mailto:hello@madebyyoung.com"
                  className="
                    text-[12px]
                    text-black/55

                    transition-colors
                    duration-200

                    hover:text-[#de1334]

                    sm:text-[13px]
                  "
                >
                  hello@madebyyoung.com
                </a>
              </div>

              {/* SERVICE */}
              <div>
                <p
                  className="
                    mb-1

                    font-gmarket
                    text-[12px]
                    font-semibold

                    sm:text-[13px]
                  "
                >
                  Service
                </p>

                <p
                  className="
                    text-[12px]
                    leading-[1.7]
                    text-black/55

                    sm:text-[13px]
                  "
                >
                  Web Design · Development · SEO
                </p>
              </div>

              {/* CONTACT BUTTON */}
              <div className="flex items-end">
                <Link
                  href="/contact"
                  className="
                    flex
                    h-[38px]
                    min-w-[112px]

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-black/60

                    px-5

                    font-gmarket
                    text-[11px]
                    font-semibold

                    transition-all
                    duration-300

                    hover:border-[#de1334]
                    hover:bg-[#de1334]
                    hover:text-white
                  "
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT MENU */}
          {/* <div
            className="
              flex
              flex-col

              md:items-end
            "
          >
            <p
              className="
                mb-4

                font-gmarket
                text-[11px]
                font-semibold

                text-black/35
              "
            >
              MENU
            </p>

            <nav
              className="
                flex
                flex-wrap
                gap-x-6
                gap-y-3

                md:justify-end
              "
            >
              <Link
                href="/work"
                className="
                  font-gmarket
                  text-[12px]
                  font-semibold

                  transition-colors
                  duration-200

                  hover:text-[#de1334]
                "
              >
                WORK
              </Link>

              <Link
                href="/services"
                className="
                  font-gmarket
                  text-[12px]
                  font-semibold

                  transition-colors
                  duration-200

                  hover:text-[#de1334]
                "
              >
                SERVICES
              </Link>

              <Link
                href="/about"
                className="
                  font-gmarket
                  text-[12px]
                  font-semibold

                  transition-colors
                  duration-200

                  hover:text-[#de1334]
                "
              >
                ABOUT
              </Link>

              <Link
                href="/contact"
                className="
                  font-gmarket
                  text-[12px]
                  font-semibold

                  transition-colors
                  duration-200

                  hover:text-[#de1334]
                "
              >
                CONTACT
              </Link>
            </nav>
          </div> */}
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}
        <div
          className="
            mt-12

            border-t
            border-black/[0.09]

            pt-5

            md:mt-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            {/* COPYRIGHT */}
            <div
              className="
                flex
                flex-col
                gap-2
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-1

                  text-[10px]
                  leading-[1.6]

                  text-black/40

                  sm:text-[11px]
                "
              >
                <span>MADE BY YOUNG</span>

                <Link
                  href="/privacy"
                  className="
                    transition-colors
                    hover:text-black
                  "
                >
                  개인정보처리방침
                </Link>
              </div>

              <p
                className="
                  text-[10px]
                  text-black/35

                  sm:text-[11px]
                "
              >
                © {new Date().getFullYear()} MADE BY YOUNG. All Rights Reserved.
              </p>
            </div>

            {/* TOP BUTTON */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="맨 위로 이동"
              className="
                flex
                h-[42px]
                w-[42px]

                shrink-0

                items-center
                justify-center

                self-end

                bg-[#171717]
                text-white

                transition-all
                duration-300

                hover:bg-[#de1334]

                sm:self-auto
              "
            >
              <ArrowUp size={16} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
