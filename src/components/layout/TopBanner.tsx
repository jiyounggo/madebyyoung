"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        z-[60]
        flex
        h-[38px]
        w-full
        items-center
        justify-center

        border-b
        border-black/[0.06]

        bg-[#171717]
        px-4
        text-white
      "
    >
      {/* 은은한 중앙 빛 */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[70px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-[#DE1334]/10
          blur-[45px]
        "
      />

      <Link
        href="#contact"
        className="
          group
          relative
          z-10

          flex
          h-full
          items-center
          justify-center
          gap-2.5

          text-[11px]
          tracking-[-0.01em]

          sm:text-[12px]
        "
      >
        {/* 시그니처 네모 */}
        <motion.span
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-[7px]
            w-[7px]
            shrink-0

            rounded-[2px]
            bg-[#DE1334]
          "
        />

        {/* EVENT */}
        <span
          className="
            flex
            items-center
            gap-1.5

            font-semibold
            tracking-[0.08em]
          "
        >
          <Sparkles size={12} strokeWidth={1.7} className="text-[#DE1334]" />
          OPEN PROMOTION
        </span>

        {/* 구분선 */}
        <span
          className="
            hidden
            h-[10px]
            w-px
            bg-white/20
            sm:block
          "
        />

        {/* 내용 */}
        <span
          className="
            hidden
            font-normal
            text-white/90
            sm:inline
          "
        >
          홈페이지 제작 특별가 진행 중
        </span>
      </Link>
    </motion.div>
  );
}
