"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import PortfolioShowcase from "./PortfolioShowcase";

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    number: "5+",
    title: "YEARS EXPERIENCE",
    description: "웹 제작 경력 5년 이상",
  },
  {
    number: "100+",
    title: "PROJECTS",
    description: "누적 홈페이지 제작 100건 이상",
  },
  {
    number: "1:1",
    title: "DIRECT PRODUCTION",
    description: "기획부터 개발까지 직접 진행",
  },
  {
    number: "AI & WEB",
    title: "AUTOMATION",
    description: "AI 활용 · 업무 자동화 구축",
  },
];

export default function AboutProfileSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#151515]">
      {/* =====================================================
          PROFILE
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
          overflow-hidden
          bg-white
          lg:h-[620px]
        "
      >
        {/* ===================================================
            PROFILE IMAGE
        =================================================== */}

        <div
          className="
            relative
            h-[520px]
            w-full

            lg:absolute
            lg:inset-y-0
            lg:left-0
            lg:h-full
            lg:w-[64%]
          "
        >
          <Image
            src="/images/profile/profile.jpg"
            alt="이지영 웹 디자이너 및 프론트엔드 개발자"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="
              object-cover
              object-[52%_center]
              lg:object-[56%_center]
            "
          />

          {/* 오른쪽 흰 배경 연결 */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              hidden
              w-[4%]
              bg-gradient-to-r
              from-transparent
              to-white
              lg:block
            "
          />
        </div>

        {/* ===================================================
            DESKTOP
        =================================================== */}

        <div
          className="
            relative
            z-10
            hidden
            h-[620px]
            w-full
            lg:grid
            lg:grid-cols-[58%_42%]
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="relative">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-[clamp(36px,4vw,64px)]
                top-1/2
                w-[280px]
                -translate-y-1/2
              "
            >
              {/* LABEL */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-[16px] bg-[#de1334]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                  "
                >
                  ABOUT ME
                </span>
              </div>

              {/* NAME */}

              <h2
                className="
                  text-[52px]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.07em]
                  xl:text-[58px]
                  2xl:text-[62px]
                "
              >
                LEE
                <br />
                JI YOUNG
              </h2>

              {/* JOB */}

              <p
                className="
                  mt-6
                  text-[12px]
                  font-bold
                  leading-[1.55]
                  text-[#de1334]
                  xl:text-[13px]
                "
              >
                WEB DESIGNER &
                <br />
                FRONT-END DEVELOPER
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  break-keep
                  text-[13px]
                  font-medium
                  leading-[1.8]
                  text-[#333]
                  xl:text-[14px]
                "
              >
                사용자 경험을 먼저 생각하고,
                <br />
                브랜드의 이야기를 화면에 담아
                <br />
                오래 사용할 수 있는 웹을 만듭니다.
              </p>

              {/* SIGNATURE */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="
                  relative
                  mt-6
                  h-[40px]
                  w-[140px]
                "
              >
                <Image
                  src="/images/profile/signature.png"
                  alt="Lee ji young signature"
                  fill
                  sizes="140px"
                  className="object-contain object-left"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT STATS
          ================================================= */}

          <div className="flex min-w-0 items-center">
            <div className="w-full">
              {/* LABEL */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-[16px] bg-[#de1334]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                  "
                >
                  KEY NUMBERS
                </span>
              </div>

              {/* GRID */}

              <div
                className="
                  grid
                  grid-cols-2
                  border-t
                  border-black/[0.1]
                "
              >
                {STATS.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className={`
                      flex
                      min-h-[175px]
                      flex-col
                      justify-center

                      border-b
                      border-black/[0.1]

                      px-[clamp(18px,2vw,30px)]
                      py-6

                      ${index % 2 === 0 ? "border-r border-black/[0.1]" : ""}
                    `}
                  >
                    <p
                      className="
                        text-[40px]
                        font-medium
                        leading-none
                        tracking-[-0.065em]
                        text-[#de1334]

                        xl:text-[44px]
                        2xl:text-[48px]
                      "
                    >
                      {stat.number}
                    </p>

                    <p
                      className="
                        mt-4
                        text-[11px]
                        font-bold
                        tracking-[-0.02em]
                        xl:text-[12px]
                      "
                    >
                      {stat.title}
                    </p>

                    <p
                      className="
                        mt-2
                        break-keep
                        text-[11px]
                        font-medium
                        leading-[1.6]
                        text-[#777]
                        xl:text-[12px]
                      "
                    >
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE
        =================================================== */}

        <div className="relative z-10 lg:hidden">
          {/* IMAGE + TEXT */}

          <div
            className="
              relative
              -mt-[520px]
              flex
              min-h-[520px]
              items-center
              px-6
              py-10
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-r
                from-white/90
                via-white/50
                to-transparent
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                z-10
                max-w-[280px]
              "
            >
              {/* LABEL */}

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-[16px] bg-[#de1334]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                  "
                >
                  ABOUT ME
                </span>
              </div>

              {/* NAME */}

              <h2
                className="
                  text-[44px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.07em]
                  sm:text-[52px]
                "
              >
                LEE
                <br />
                JI YOUNG
              </h2>

              {/* JOB */}

              <p
                className="
                  mt-6
                  text-[11px]
                  font-bold
                  leading-[1.6]
                  text-[#de1334]
                  sm:text-[12px]
                "
              >
                WEB DESIGNER &
                <br />
                FRONT-END DEVELOPER
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  text-[13px]
                  font-medium
                  leading-[1.75]
                  text-[#333]
                "
              >
                사용자 경험을 먼저 생각하고,
                <br />
                브랜드의 이야기를 화면에 담아
                <br />
                오래 사용할 수 있는 웹을 만듭니다.
              </p>

              {/* SIGNATURE */}

              <div
                className="
                  relative
                  mt-5
                  h-[38px]
                  w-[130px]
                "
              >
                <Image
                  src="/images/profile/signature.png"
                  alt="Lee ji young signature"
                  fill
                  sizes="130px"
                  className="object-contain object-left"
                />
              </div>
            </motion.div>
          </div>

          {/* =================================================
              MOBILE STATS
          ================================================= */}

          <div
            className="
              bg-white
              px-6
              py-10
              sm:px-10
            "
          >
            {/* LABEL */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-[16px] bg-[#de1334]" />

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                "
              >
                KEY NUMBERS
              </span>
            </div>

            {/* GRID */}

            <div
              className="
                grid
                grid-cols-2
                border-t
                border-black/[0.1]
              "
            >
              {STATS.map((stat, index) => (
                <div
                  key={stat.title}
                  className={`
                    min-h-[145px]

                    border-b
                    border-black/[0.1]

                    py-6

                    ${index % 2 === 0 ? "border-r pr-4" : "pl-4"}
                  `}
                >
                  <p
                    className="
                      text-[30px]
                      font-semibold
                      leading-none
                      tracking-[-0.06em]
                      text-[#de1334]
                      sm:text-[36px]
                    "
                  >
                    {stat.number}
                  </p>

                  <p
                    className="
                      mt-3
                      text-[9px]
                      font-bold
                      sm:text-[11px]
                    "
                  >
                    {stat.title}
                  </p>

                  <p
                    className="
                      mt-2
                      break-keep
                      text-[10px]
                      leading-[1.5]
                      text-[#777]
                    "
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <PortfolioShowcase />
    </section>
  );
}
