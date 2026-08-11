"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import IdeaSection from "./IdeaSection";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /* ==========================================
     SMOOTH SCROLL
  ========================================== */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  /* ==========================================
     MAIN LOGO
  ========================================== */

  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.55, 0.8, 0.92, 1],
    [1, 1.15, 2, 3.2, 4.4, 4.4],
  );

  const logoY = useTransform(smoothProgress, [0, 0.8, 1], ["0%", "0%", "-8%"]);

  const logoOpacity = useTransform(
    smoothProgress,
    [0, 0.78, 0.9, 1],
    [1, 1, 0.65, 0],
  );

  /* ==========================================
     BACKGROUND
  ========================================== */

  const backgroundOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.45, 0.72],
    [1, 1, 0.6, 0],
  );

  /* ==========================================
     BIG YOUNG OUTLINE
  ========================================== */

  const outlineScale = useTransform(
    smoothProgress,
    [0, 0.5, 0.75],
    [1, 1.08, 1.2],
  );

  const outlineY = useTransform(smoothProgress, [0, 0.75], ["0%", "-5%"]);

  /* ==========================================
     LEFT GLOW
  ========================================== */

  const leftGlowX = useTransform(smoothProgress, [0, 0.75], ["0%", "-35%"]);

  const leftGlowY = useTransform(smoothProgress, [0, 0.75], ["0%", "20%"]);

  /* ==========================================
     RIGHT GLOW
  ========================================== */

  const rightGlowX = useTransform(smoothProgress, [0, 0.75], ["0%", "30%"]);

  const rightGlowY = useTransform(smoothProgress, [0, 0.75], ["0%", "-25%"]);

  /* ==========================================
     SMALL DOT
  ========================================== */

  const smallDotY = useTransform(smoothProgress, [0, 0.7], ["0%", "-120px"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHasScrolled(latest > 0.01);
  });

  return (
    <section
      ref={heroRef}
      className="
        relative
        h-[300vh]
        bg-white
      "
    >
      {/* ==========================================
          STICKY SCREEN
      ========================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          bg-white
        "
      >
        {/* ==========================================
            BACKGROUND DESIGN
        ========================================== */}

        <motion.div
          style={{
            opacity: backgroundOpacity,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
          "
        >
          {/* WHITE BACKGROUND */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.96)_52%,rgba(248,248,248,1)_100%)]
            "
          />

          {/* ==========================================
              HUGE YOUNG OUTLINE
          ========================================== */}

          {/* <motion.div
            style={{
              scale: outlineScale,
              y: outlineY,
            }}
            className="
    absolute
    left-1/2
    top-1/2
    w-[130vw]

    -translate-x-1/2
    -translate-y-1/2

    select-none
    whitespace-nowrap
    text-center

    text-[clamp(180px,24vw,500px)]
    font-black
    leading-none
    tracking-[-0.08em]

    text-transparent

    [-webkit-text-stroke:1.2px_rgba(20,20,20,0.045)]
  "
          >
            YOUNG
          </motion.div> */}

          {/* ==========================================
              LEFT RED GLOW
          ========================================== */}

          {/* 바깥쪽 레드 */}

          <motion.div
            style={{
              x: leftGlowX,
              y: leftGlowY,
            }}
            className="
              absolute
              -bottom-[24vw]
              -left-[18vw]

              h-[52vw]
              w-[52vw]

              min-h-[560px]
              min-w-[560px]

              rounded-full
              bg-[#DE1334]

              opacity-[0.24]
              blur-[60px]
            "
          />

          {/* 중간 레드 */}

          <motion.div
            style={{
              x: leftGlowX,
              y: leftGlowY,
            }}
            className="
              absolute
              -bottom-[19vw]
              -left-[15vw]

              h-[40vw]
              w-[40vw]

              min-h-[450px]
              min-w-[450px]

              rounded-full
              bg-[#DE1334]

              opacity-[0.19]
              blur-[38px]
            "
          />

          {/* 안쪽 진한 레드 */}

          <motion.div
            style={{
              x: leftGlowX,
              y: leftGlowY,
            }}
            className="
              absolute
              -bottom-[17vw]
              -left-[13vw]

              h-[31vw]
              w-[31vw]

              min-h-[360px]
              min-w-[360px]

              rounded-full
              bg-[#DE1334]

              opacity-[0.22]
              blur-[26px]
            "
          />

          {/* 왼쪽 원 테두리 */}

          <motion.div
            style={{
              x: leftGlowX,
              y: leftGlowY,
            }}
            className="
              absolute
              -bottom-[19vw]
              -left-[16vw]

              h-[42vw]
              w-[42vw]

              min-h-[480px]
              min-w-[480px]

              rounded-full

              border
              border-[#DE1334]/60
            "
          />

          {/* ==========================================
              RIGHT RED GLOW
              ↓ 기존보다 확실히 작게 수정
          ========================================== */}

          {/* 오른쪽 바깥 글로우 */}

          <motion.div
            style={{
              x: rightGlowX,
              y: rightGlowY,
            }}
            className="
              absolute
              -right-[7vw]
              -top-[9vw]

              h-[27vw]
              w-[27vw]

              min-h-[280px]
              min-w-[280px]

              rounded-full
              bg-[#DE1334]

              opacity-[0.13]
              blur-[65px]
            "
          />

          {/* 오른쪽 안쪽 글로우 */}

          <motion.div
            style={{
              x: rightGlowX,
              y: rightGlowY,
            }}
            className="
              absolute
              -right-[4vw]
              -top-[5vw]

              h-[17vw]
              w-[17vw]

              min-h-[180px]
              min-w-[180px]

              rounded-full
              bg-[#DE1334]

              opacity-[0.09]
              blur-[38px]
            "
          />

          {/* ==========================================
              SMALL RED DOT
          ========================================== */}

          <motion.div
            style={{
              y: smallDotY,
            }}
            animate={
              hasScrolled
                ? {
                    scale: 1,
                    opacity: 1,
                  }
                : {
                    scale: [1, 1.35, 1],
                    opacity: [0.7, 1, 0.7],
                  }
            }
            transition={
              hasScrolled
                ? {
                    duration: 0.2,
                  }
                : {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="
              absolute
              right-[14%]
              top-[28%]

              h-[10px]
              w-[10px]

              rounded-full
              bg-[#DE1334]

              shadow-[0_0_8px_rgba(222,19,52,0.9),0_0_28px_rgba(222,19,52,0.55)]
            "
          />

          {/* 오른쪽 아래 작은 포인트 */}

          <div
            className="
              absolute
              right-[23%]
              top-[63%]

              h-[7px]
              w-[7px]

              rounded-full
              bg-[#DE1334]

              opacity-60
              blur-[1.5px]

              shadow-[0_0_15px_rgba(222,19,52,0.45)]
            "
          />

          {/* 왼쪽 위 작은 포인트 */}

          <div
            className="
              absolute
              left-[27%]
              top-[26%]

              h-[4px]
              w-[4px]

              rounded-full
              bg-[#DE1334]

              opacity-50

              shadow-[0_0_12px_rgba(222,19,52,0.5)]
            "
          />

          {/* ==========================================
              SUBTLE GRID
          ========================================== */}

          <div
            className="
              absolute
              inset-0

              opacity-[0.2]

              [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]

              [background-size:80px_80px]
            "
          />
        </motion.div>

        {/* ==========================================
            MAIN HERO LOGO
        ========================================== */}

        <motion.div
          style={{
            scale,
            y: logoY,
            opacity: logoOpacity,
          }}
          className="
            absolute
            inset-0
            z-10

            flex
            items-center
            justify-center
          "
        >
          <motion.div
            animate={
              hasScrolled
                ? {
                    opacity: 1,
                    filter: "brightness(1)",
                  }
                : {
                    opacity: [1, 0.55, 1, 0.75, 1],

                    filter: [
                      "brightness(1)",
                      "brightness(1.18)",
                      "brightness(1)",
                      "brightness(1.1)",
                      "brightness(1)",
                    ],
                  }
            }
            transition={
              hasScrolled
                ? {
                    duration: 0.15,
                  }
                : {
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.12, 0.25, 0.45, 1],
                  }
            }
            className="
              relative

              w-[32vw]
              min-w-[250px]
              max-w-[480px]
            "
          >
            <Image
              src="/images/hero-title.png"
              alt="MADE BY YOUNG"
              width={1000}
              height={500}
              priority
              className="
                h-auto
                w-full
                object-contain
              "
            />

            {/* ==========================================
                LOGO SHINE
            ========================================== */}

            {!hasScrolled && (
              <motion.div
                animate={{
                  x: ["-150%", "180%"],
                  opacity: [0, 0.85, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -top-[15%]
                  left-0

                  h-[130%]
                  w-[30%]

                  rotate-[16deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/70
                  to-transparent

                  blur-[8px]
                  mix-blend-screen
                "
              />
            )}
          </motion.div>
        </motion.div>

        {/* ==========================================
            SCROLL INDICATOR
        ========================================== */}

        <motion.div
          style={{
            opacity: backgroundOpacity,
          }}
          className="
            absolute
            bottom-[42px]
            left-1/2
            z-10

            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-2
          "
        >
          <div className="relative h-[34px] w-px bg-black/25">
            <motion.span
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-0

                h-[6px]
                w-[6px]

                -translate-x-1/2

                rounded-full
                bg-[#DE1334]

                shadow-[0_0_12px_rgba(222,19,52,0.65)]
              "
            />
          </div>

          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.3em]
              text-black/60
            "
          >
            SCROLL
          </span>
        </motion.div>

        {/* ==========================================
            IDEA SECTION
        ========================================== */}

        <IdeaSection progress={smoothProgress} />
      </div>
    </section>
  );
}
