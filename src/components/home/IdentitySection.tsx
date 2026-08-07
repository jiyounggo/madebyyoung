"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    number: "01",
    title: "DESIGN",
    text: "브랜드에 맞는 디자인",
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    text: "필요한 기능까지 직접 개발",
  },
  {
    number: "03",
    title: "SEO",
    text: "검색을 고려한 웹 구조",
  },
  {
    number: "04",
    title: "AUTOMATION",
    text: "반복되는 업무의 자동화",
  },
];

export default function IdentitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  const eyebrowY = useTransform(scrollYProgress, [0, 0.25], [30, 0]);

  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const firstOpacity = useTransform(scrollYProgress, [0.08, 0.3], [0.18, 1]);

  const secondOpacity = useTransform(scrollYProgress, [0.25, 0.48], [0.18, 1]);

  const thirdOpacity = useTransform(scrollYProgress, [0.42, 0.65], [0.18, 1]);

  const redLineWidth = useTransform(
    scrollYProgress,
    [0.15, 0.8],
    ["0%", "100%"],
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f4f4f4]
        px-6
        py-[140px]
        text-[#111]

        md:px-12
        md:py-[180px]

        xl:px-[90px]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
        "
      >
        {/* =================================================
            TOP
        ================================================= */}

        <motion.div
          style={{
            y: eyebrowY,
            opacity: eyebrowOpacity,
          }}
          className="
            flex
            items-center
            justify-between
            border-b
            border-black/10
            pb-5
          "
        >
          <p
            className="
              text-[10px]
              font-semibold
              tracking-[0.24em]
              text-black/45
            "
          >
            02 / ABOUT MADE BY YOUNG
          </p>

          <p
            className="
              hidden
              text-[10px]
              font-semibold
              tracking-[0.18em]
              text-black/35

              md:block
            "
          >
            DESIGN · DEVELOPMENT · BEYOND
          </p>
        </motion.div>

        {/* =================================================
            MAIN MESSAGE
        ================================================= */}

        <div
          className="
            grid
            gap-16
            pt-[80px]

            lg:grid-cols-[1.35fr_0.65fr]
            lg:gap-20
            lg:pt-[110px]
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                mb-9
                text-[11px]
                font-semibold
                tracking-[0.2em]
                text-[#DE1334]
              "
            >
              OUR APPROACH
            </p>

            <div
              className="
                text-[clamp(38px,5vw,82px)]
                font-semibold
                leading-[1.12]
                tracking-[-0.055em]
              "
            >
              <motion.p
                style={{
                  opacity: firstOpacity,
                }}
              >
                정해진 템플릿에
              </motion.p>

              <motion.p
                style={{
                  opacity: secondOpacity,
                }}
                className="mt-1"
              >
                브랜드를 맞추지
                <span className="text-[#DE1334]"> 않습니다.</span>
              </motion.p>

              <motion.p
                style={{
                  opacity: thirdOpacity,
                }}
                className="
                  mt-8
                  max-w-[950px]
                "
              >
                브랜드에 맞는 웹을
                <br />
                처음부터 설계합니다.
              </motion.p>
            </div>

            {/* 설명 */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-12
                max-w-[590px]

                text-[15px]
                leading-[1.9]
                tracking-[-0.02em]
                text-black/50

                md:text-[17px]
              "
            >
              원하는 분위기와 레퍼런스부터 필요한 기능까지 충분히 듣고, 브랜드와
              비즈니스에 가장 잘 맞는 구조를 함께 만들어갑니다.
            </motion.p>
          </div>

          {/* =================================================
              RIGHT CAPABILITIES
          ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-end
            "
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.6,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  border-t
                  border-black/10
                  py-6

                  last:border-b
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-8
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <span
                      className="
                        mt-1
                        text-[9px]
                        font-semibold
                        text-black/30
                      "
                    >
                      {item.number}
                    </span>

                    <div>
                      <h3
                        className="
                          text-[19px]
                          font-semibold
                          tracking-[-0.035em]

                          transition-colors
                          duration-300

                          group-hover:text-[#DE1334]

                          md:text-[22px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[13px]
                          tracking-[-0.02em]
                          text-black/40
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      text-[16px]
                      text-black/25

                      transition-all
                      duration-300

                      group-hover:
                      translate-x-1
                      -translate-y-1

                      group-hover:text-[#DE1334]
                    "
                  >
                    ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM RED LINE
        ================================================= */}

        <div
          className="
            relative
            mt-[130px]
            h-px
            overflow-hidden
            bg-black/10
          "
        >
          <motion.div
            style={{
              width: redLineWidth,
            }}
            className="
              absolute
              left-0
              top-0
              h-full
              bg-[#DE1334]
            "
          />
        </div>

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.16em]
              text-black/30
            "
          >
            MADE BY YOUNG
          </span>

          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.16em]
              text-black/30
            "
          >
            NEXT · SERVICES ↓
          </span>
        </div>
      </div>

      {/* =================================================
          BACKGROUND WORD
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[30px]
          -left-[10px]
          select-none

          text-[clamp(100px,18vw,330px)]
          font-bold
          leading-none
          tracking-[-0.08em]

          text-black/[0.018]
        "
      >
        YOUNG
      </div>
    </section>
  );
}
