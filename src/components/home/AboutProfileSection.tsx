"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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

/* =========================================================
   PORTFOLIO
========================================================= */

const PORTFOLIO = [
  {
    title: "홍인글로벌",
    category: "CORPORATE WEBSITE",
    image: "/images/profile/work-01.jpg",
  },
  {
    title: "브랜드 홈페이지",
    category: "BRAND WEBSITE",
    image: "/images/profile/work-02.jpg",
  },
  {
    title: "카페24 쇼핑몰",
    category: "CAFE24 SHOP",
    image: "/images/profile/work-03.jpg",
  },
  {
    title: "병원 홈페이지",
    category: "CLINIC WEBSITE",
    image: "/images/profile/work-04.jpg",
  },
  {
    title: "쇼핑몰 프로젝트",
    category: "E-COMMERCE",
    image: "/images/profile/work-05.jpg",
  },
  {
    title: "기업 홈페이지",
    category: "CORPORATE WEBSITE",
    image: "/images/profile/work-06.jpg",
  },
  {
    title: "개인 브랜드",
    category: "PERSONAL BRAND",
    image: "/images/profile/work-07.jpg",
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

          {/* MOBILE STATS */}

          <div
            className="
              bg-white
              px-6
              py-10
              sm:px-10
            "
          >
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
          WORKS
      ===================================================== */}

      <div
        className="
          bg-white
          px-6
          py-16

          sm:px-10
          sm:py-20

          lg:px-[clamp(32px,4vw,64px)]
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]

            grid-cols-1
            gap-10

            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-10
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-[18px] bg-[#de1334]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.22em]
                "
              >
                WORKS
              </span>
            </div>

            <h3
              className="
                max-w-[300px]
                break-keep

                text-[36px]
                font-semibold

                leading-[1.16]
                tracking-[-0.06em]

                sm:text-[40px]
                lg:text-[42px]
              "
            >
              MADE BY YOUNG과
              <br />
              함께한 <span className="text-[#de1334]">웹의 순간들.</span>
            </h3>

            <span
              className="
                mt-7
                block
                h-[2px]
                w-[20px]
                bg-[#de1334]
              "
            />

            <p
              className="
                mt-6
                max-w-[260px]
                break-keep

                text-[14px]
                font-medium
                leading-[1.8]

                text-[#666]
              "
            >
              서로 다른 브랜드의 이야기를 각자에게 어울리는 화면으로
              만들었습니다.
            </p>

            {/* NAVIGATION */}

            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                aria-label="이전 포트폴리오"
                className="
                  portfolio-prev

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-black/[0.1]

                  bg-white

                  text-[18px]

                  transition-all
                  duration-300

                  hover:border-[#de1334]
                  hover:bg-[#de1334]
                  hover:text-white
                "
              >
                ←
              </button>

              <button
                type="button"
                aria-label="다음 포트폴리오"
                className="
                  portfolio-next

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-black/[0.1]

                  bg-white

                  text-[18px]

                  transition-all
                  duration-300

                  hover:border-[#de1334]
                  hover:bg-[#de1334]
                  hover:text-white
                "
              >
                →
              </button>
            </div>
          </div>

          {/* =================================================
              SWIPER
          ================================================= */}

          <div className="min-w-0 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".portfolio-prev",
                nextEl: ".portfolio-next",
              }}
              grabCursor
              spaceBetween={18}
              slidesPerView={1.08}
              breakpoints={{
                480: {
                  slidesPerView: 1.25,
                  spaceBetween: 20,
                },

                640: {
                  slidesPerView: 1.65,
                  spaceBetween: 22,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 22,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1280: {
                  slidesPerView: 4,
                  spaceBetween: 18,
                },
              }}
              className="w-full"
            >
              {PORTFOLIO.map((work, index) => (
                <SwiperSlide key={`${work.title}-${index}`}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: Math.min(index * 0.04, 0.2),
                    }}
                    className="group select-none"
                  >
                    {/* IMAGE */}

                    <div
                      className="
                        relative
                        aspect-[4/3]

                        overflow-hidden
                        rounded-[15px]

                        bg-[#f1f1f1]
                      "
                    >
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        sizes="
                          (max-width: 640px) 90vw,
                          (max-width: 1024px) 48vw,
                          25vw
                        "
                        className="
                          object-cover

                          transition-transform
                          duration-700

                          ease-[cubic-bezier(0.16,1,0.3,1)]

                          group-hover:scale-[1.035]
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0

                          bg-black/0

                          transition-colors
                          duration-500

                          group-hover:bg-black/[0.04]
                        "
                      />

                      {/* NUMBER */}

                      <div
                        className="
                          absolute
                          right-4
                          top-4

                          flex
                          h-9
                          min-w-9

                          items-center
                          justify-center

                          rounded-full

                          border
                          border-white/40

                          bg-white/85

                          px-3

                          text-[11px]
                          font-bold

                          backdrop-blur-md
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* TEXT */}

                    <div className="pb-2 pt-4">
                      <h4
                        className="
                          break-keep

                          text-[17px]
                          font-bold

                          tracking-[-0.035em]

                          sm:text-[18px]
                        "
                      >
                        {work.title}
                      </h4>

                      <p
                        className="
                          mt-2

                          text-[10px]
                          font-bold

                          tracking-[0.09em]

                          text-[#999]
                        "
                      >
                        {work.category}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
