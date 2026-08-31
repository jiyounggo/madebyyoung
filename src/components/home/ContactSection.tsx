"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import ProjectContactModal from "./ProjectContactModal";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="
          bg-white
          px-6
          pb-14

          sm:px-10
          sm:pb-16

          lg:px-[clamp(36px,5vw,76px)]
          lg:pb-20
        "
      >
        <motion.div
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]

            flex-col
            gap-8

            border-y
            border-black/[0.1]

            py-10

            md:flex-row
            md:items-center
            md:justify-between
            md:gap-12
            md:py-12
          "
        >
          {/* LEFT */}

          <div className="flex items-start gap-5">
            <span
              className="
                mt-[10px]
                h-[3px]
                w-[20px]
                shrink-0
                bg-[#de1334]
              "
            />

            <div>
              <h2
                className="
                  break-keep

                  text-[28px]
                  font-semibold

                  leading-[1.25]

                  tracking-[-0.045em]

                  sm:text-[34px]
                  lg:text-[40px]
                "
              >
                프로젝트를 <span className="text-[#de1334]">시작해볼까요?</span>
              </h2>

              <p
                className="
                  mt-3

                  break-keep

                  text-[13px]
                  font-medium

                  leading-[1.7]

                  text-[#777]

                  sm:text-[14px]
                "
              >
                아직 정해진 게 없어도 괜찮아요. 필요한 부분부터 같이
                정리해드립니다.
              </p>
            </div>
          </div>

          {/* BUTTON */}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="
              group

              flex
              shrink-0
              items-center
              justify-between
              gap-8

              rounded-full

              bg-[#151515]

              py-2
              pl-6
              pr-2

              text-[14px]
              font-bold
              text-white

              transition-all
              duration-300

              hover:bg-[#de1334]

              md:min-w-[190px]
            "
          >
            상담하기
            <span
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                bg-white

                text-[#151515]

                transition-transform
                duration-300

                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </span>
          </button>
        </motion.div>
      </section>

      <ProjectContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
