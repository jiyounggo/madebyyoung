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

  // 전체 스크롤을 조금 더 부드럽게
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  /* ==========================================
     LOGO SCALE
  ========================================== */

  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.55, 0.8, 0.92, 1],
    [1, 1.15, 2, 3.2, 4.4, 4.4],
  );

  /* 마지막에 살짝 위로 */
  const logoY = useTransform(smoothProgress, [0, 0.8, 1], ["0%", "0%", "-8%"]);

  /* 마지막에 fade out */
  const logoOpacity = useTransform(
    smoothProgress,
    [0, 0.78, 0.9, 1],
    [1, 1, 0.65, 0],
  );

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
            HERO LOGO
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
                  }
                : {
                    opacity: [1, 0.3, 1, 0.5, 1],
                  }
            }
            transition={
              hasScrolled
                ? {
                    duration: 0.15,
                  }
                : {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.4, 1],
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
          </motion.div>
        </motion.div>

        {/* ==========================================
            IDEA SECTION

            반드시 progress 전달
        ========================================== */}

        <IdeaSection progress={smoothProgress} />
      </div>
    </section>
  );
}
