"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

import ProjectContactModal from "./ProjectContactModal";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  /* ==========================================
     PAGE SCROLL
  ========================================== */

  const { scrollYProgress } = useScroll();

  /* 뒤 초대형 타이포 아주 천천히 이동 */
  const backgroundTextX = useTransform(scrollYProgress, [0, 1], ["2%", "-6%"]);

  const backgroundTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  /* 레드 라인 이동 */
  const lineX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <>
      {/* ==========================================
          CONTACT SECTION
      ========================================== */}

      <section
        className="
          relative
          min-h-[620px]
          overflow-hidden
          bg-[#171717]

          px-5
          py-20

          md:min-h-[720px]
          md:px-8
          md:py-24

          lg:min-h-[780px]
        "
      >
        {/* ==========================================
            BACKGROUND GIANT TYPOGRAPHY
        ========================================== */}

        <motion.div
          style={{
            x: backgroundTextX,
            y: backgroundTextY,
          }}
          className="
            pointer-events-none
            absolute
            left-[-4%]
            top-1/2

            w-[115%]
            -translate-y-1/2

            select-none
          "
        >
          {/* LET'S */}

          <div
            className="
              whitespace-nowrap

              text-[clamp(120px,19vw,350px)]
              font-black
              leading-[0.72]
              tracking-[-0.085em]

              text-transparent

              [-webkit-text-stroke:1px_rgba(255,255,255,0.045)]
            "
          >
            LET&apos;S
          </div>

          {/* MAKE */}

          <div
            className="
              ml-[8vw]
              whitespace-nowrap

              text-[clamp(120px,19vw,350px)]
              font-black
              leading-[0.72]
              tracking-[-0.085em]

              text-transparent

              [-webkit-text-stroke:1px_rgba(222,19,52,0.13)]
            "
          >
            MAKE
          </div>

          {/* IT */}

          <div
            className="
              ml-[42vw]
              whitespace-nowrap

              text-[clamp(120px,19vw,350px)]
              font-black
              leading-[0.72]
              tracking-[-0.085em]

              text-transparent

              [-webkit-text-stroke:1px_rgba(255,255,255,0.045)]
            "
          >
            IT.
          </div>
        </motion.div>

        {/* ==========================================
            TOP LABEL
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-5
            top-7
            z-20

            flex
            items-center
            gap-3

            md:left-8
            md:top-9
          "
        >
          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.28em]
              text-white/45

              md:text-[11px]
            "
          >
            CONTACT
          </span>

          <span
            className="
              h-px
              w-8
              bg-[#DE1334]
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.15em]
              text-[#DE1334]

              md:text-[11px]
            "
          >
            05
          </span>
        </motion.div>

        {/* ==========================================
            RIGHT BRAND DOT
        ========================================== */}

        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[17%]

            h-[9px]
            w-[9px]

            rounded-full
            bg-[#DE1334]

            shadow-[0_0_22px_rgba(222,19,52,0.6)]
          "
        />

        {/* ==========================================
            RIGHT RED GLOW
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute
            -bottom-[220px]
            -right-[130px]

            h-[430px]
            w-[430px]

            rounded-full

            bg-[#DE1334]/[0.10]

            blur-[75px]
          "
        />

        {/* ==========================================
            LEFT GLOW
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[150px]
            -left-[160px]

            h-[330px]
            w-[330px]

            rounded-full

            bg-[#DE1334]/[0.04]

            blur-[80px]
          "
        />

        {/* ==========================================
            MOVING RED LINE
        ========================================== */}

        <motion.div
          style={{
            x: lineX,
          }}
          className="
            pointer-events-none
            absolute
            left-[-15%]
            top-[27%]

            h-px
            w-[58%]

            rotate-[-8deg]

            bg-gradient-to-r
            from-transparent
            via-[#DE1334]/50
            to-transparent
          "
        />

        {/* ==========================================
            MOVING RED POINT
        ========================================== */}

        <motion.span
          animate={{
            x: [0, 120, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[26%]
            top-[22%]

            h-[5px]
            w-[5px]

            rounded-full
            bg-[#DE1334]

            shadow-[0_0_18px_rgba(222,19,52,0.6)]
          "
        />

        {/* ==========================================
            CENTER CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10

            mx-auto
            flex
            min-h-[460px]
            w-full
            max-w-[1100px]

            flex-col
            items-center
            justify-center

            text-center

            md:min-h-[540px]
          "
        >
          {/* ==========================================
              EYEBROW
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[5px]
                w-[5px]
                rounded-full
                bg-[#DE1334]
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/45

                md:text-[11px]
              "
            >
              START A PROJECT
            </span>

            <span
              className="
                h-[5px]
                w-[5px]
                rounded-full
                bg-[#DE1334]
              "
            />
          </motion.div>

          {/* ==========================================
              TITLE
          ========================================== */}

          <h2
            className="
              break-keep

              text-[40px]
              font-bold
              leading-[1.12]
              tracking-[-0.06em]

              text-white

              sm:text-[44px]
              md:text-[58px]
              lg:text-[68px]
            "
          >
            {/* FIRST LINE */}

            <motion.span
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                inline-block
              "
            >
              아이디어가 있다면,
            </motion.span>

            <br />

            {/* SECOND LINE */}

            <motion.span
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.8,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                inline-block

                text-[#DE1334]
              "
            >
              이제 시작해볼까요?
              {/* 작은 점 */}
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-[14px]
                  top-[10px]

                  hidden

                  h-[6px]
                  w-[6px]

                  rounded-full
                  bg-[#DE1334]

                  md:block
                "
              />
            </motion.span>
          </h2>

          {/* ==========================================
              DESCRIPTION
          ========================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5
              max-w-[470px]

              break-keep

              text-[13px]
              leading-[1.8]

              text-white/45

              md:text-[14px]
            "
          >
            브랜드의 시작부터 실제 웹으로 구현되는 순간까지,
            <br className="hidden sm:block" />
            필요한 과정을 하나의 흐름으로 만듭니다.
          </motion.p>

          {/* ==========================================
              CONTACT BUTTON
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              delay: 0.43,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-9
            "
          >
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group

                flex
                items-center
                gap-4

                rounded-full

                bg-[#DE1334]

                px-8
                py-4

                text-[17px]
                font-bold
                text-white

                shadow-[0_18px_55px_rgba(222,19,52,0.25)]

                transition-all
                duration-300

                hover:bg-[#c9112f]
                hover:shadow-[0_22px_65px_rgba(222,19,52,0.35)]

                md:text-[19px]
              "
            >
              프로젝트 상담하기
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  text-[#DE1334]

                  transition-transform
                  duration-300

                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={17} strokeWidth={2} />
              </span>
            </motion.button>
          </motion.div>

          {/* ==========================================
              CENTER RED LINE
          ========================================== */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 1.2,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10

              h-px
              w-[140px]

              origin-center

              bg-gradient-to-r
              from-transparent
              via-[#DE1334]
              to-transparent
            "
          />
        </div>

        {/* ==========================================
            BOTTOM AREA
        ========================================== */}

        <div
          className="
            absolute
            bottom-6
            left-5
            right-5
            z-20

            flex
            items-end
            justify-between

            border-t
            border-white/[0.08]

            pt-5

            md:bottom-8
            md:left-8
            md:right-8
          "
        >
          {/* BRAND */}

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                tracking-[0.22em]
                text-white/55
              "
            >
              MADE BY YOUNG
              <span className="text-[#DE1334]">.</span>
            </p>

            <p
              className="
                mt-1

                text-[9px]
                tracking-[0.16em]

                text-white/25
              "
            >
              WEB DESIGN · DEVELOPMENT
            </p>
          </div>

          {/* END INDICATOR */}

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              flex-col
              items-center
              gap-2
            "
          >
            <div
              className="
                relative

                h-[25px]
                w-px

                bg-white/15
              "
            >
              <span
                className="
                  absolute
                  bottom-0
                  left-1/2

                  h-[4px]
                  w-[4px]

                  -translate-x-1/2

                  rounded-full
                  bg-[#DE1334]
                "
              />
            </div>

            <span
              className="
                text-[8px]
                tracking-[0.25em]
                text-white/25
              "
            >
              END
            </span>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          PROJECT CONTACT MODAL
      ========================================== */}

      <ProjectContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
