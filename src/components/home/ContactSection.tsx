"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import ProjectContactModal from "./ProjectContactModal";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 전체 배경 */}
      <section className="w-full bg-white">
        {/* 실제 콘텐츠 영역 */}
        <div
          className="
            mx-auto
            w-full
            max-w-[1100px]

            px-5
            pb-12

            sm:px-7
            sm:pb-16

            md:px-10

            lg:px-0
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mx-auto
              flex
              w-full

              flex-col
              gap-7

              border-y
              border-black/[0.1]

              py-8

              sm:gap-8
              sm:py-10

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-10
              md:py-12
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                items-start
                gap-3

                sm:gap-4
                md:gap-5
              "
            >
              <div className="min-w-0 flex-1">
                <h2
                  className="
                    break-keep

                    font-gmarket
                    text-[24px]
                    font-semibold

                    leading-[1.35]
                    tracking-[-0.045em]

                    text-[#171717]

                    sm:text-[30px]
                    md:text-[34px]
                    lg:text-[60px]
                  "
                >
                  프로젝트를{" "}
                  <span className="text-[#de1334]">시작해볼까요?</span>
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[520px]

                    break-keep

                    text-[13px]
                    font-medium
                    leading-[1.7]

                    text-[#777]

                    sm:text-[18px]
                  "
                >
                  아직 정해진 게 없어도 괜찮아요.
                  <br className="hidden sm:block" />
                  필요한 부분부터 같이 정리해드립니다.
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
                w-full
                shrink-0
                items-center
                justify-between

                rounded-full
                bg-[#151515]

                py-2
                pl-5
                pr-2

                font-gmarket
                text-[13px]
                font-bold
                text-white

                transition-all
                duration-300

                hover:bg-[#de1334]

                sm:pl-6
                sm:text-[14px]

                md:w-auto
                md:min-w-[190px]
              "
            >
              <span>상담하기</span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0

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
        </div>
      </section>

      <ProjectContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
