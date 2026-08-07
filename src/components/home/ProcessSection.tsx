"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Check,
  CircleDollarSign,
  Headphones,
  LayoutDashboard,
} from "lucide-react";

const POINTS = [
  {
    number: "01",
    title: "거품을 뺀 합리적인 가격",
    short: "필요한 만큼만, 정직하게.",
    description:
      "불필요한 기능과 비용을 더하지 않습니다. 필요한 범위를 먼저 정리하고 그에 맞는 합리적인 비용으로 제작합니다.",
    icon: CircleDollarSign,
  },
  {
    number: "02",
    title: "처음부터 끝까지 직접",
    short: "상담한 사람이 끝까지 함께합니다.",
    description:
      "상담부터 기획, 디자인, 개발, 오픈까지 담당자가 바뀌지 않습니다. 모든 과정을 직접 확인하고 책임집니다.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "꼼꼼한 피드백과 수정",
    short: "대충 만들고 끝내지 않습니다.",
    description:
      "작은 부분도 함께 확인하고 조율합니다. 만족할 수 있는 결과에 가까워질 때까지 꼼꼼하게 피드백을 반영합니다.",
    icon: Headphones,
  },
  {
    number: "04",
    title: "누구나 쉬운 관리자",
    short: "완성 후에도 직접 운영할 수 있게.",
    description:
      "상품, 게시글, 이미지 등 필요한 콘텐츠를 개발자 없이도 쉽게 수정하고 관리할 수 있도록 제작합니다.",
    icon: LayoutDashboard,
  },
];

export default function ProcessSection() {
  return (
    <section
      className="
        overflow-hidden
        bg-[#fff]
        px-5
        py-24

        md:px-8
        md:py-28
      "
    >
      <div className="mx-auto w-full max-w-[1100px]">
        {/* ==========================================
            HEADER
        ========================================== */}

        <div
          className="
            mb-10
          
       
            gap-6

            md:mb-12
            md:grid-cols-[1fr_370px]
            md:items-end
          "
        >
          <div>
            <h2
              className="
                break-keep
                text-[38px]
                font-bold
                leading-[1.1]
                tracking-[-0.055em]
                text-[#171717]
                text-center

                sm:text-[45px]
                md:text-[52px]
              "
            >
              필요한 것은 더하고,
              <br />
              <span className="text-[#de1334]">불필요한 것은 덜었습니다.</span>
            </h2>
          </div>
        </div>

        {/* ==========================================
            BIG WHITE PANEL
        ========================================== */}

        <div
          className="
            overflow-hidden
            rounded-[30px]

            border
            border-black/[0.07]

            bg-white

            shadow-[0_18px_55px_rgba(0,0,0,0.045)]

            md:rounded-[36px]
          "
        >
          {/* ==========================================
              DESKTOP
          ========================================== */}

          <div className="hidden md:block">
            {/* ==========================================
                TOP PROGRESS AREA
            ========================================== */}

            <div
              className="
                relative

                border-b
                border-black/[0.07]

                bg-[#fafafa]

                px-8
                pb-7
                pt-8
              "
            >
              {/* BASE LINE */}

              <div
                className="
                  absolute
                  left-[12.5%]
                  right-[12.5%]
                  top-[55px]

                  h-[2px]

                  bg-[#e7e7e7]
                "
              />

              {/* ACTIVE LINE - 천천히 */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                transition={{
                  duration: 6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-[12.5%]
                  right-[12.5%]
                  top-[55px]

                  h-[2px]

                  origin-left

                  bg-[#de1334]
                "
              />

              {/* NUMBERS */}

              <div className="relative z-10 grid grid-cols-4">
                {POINTS.map((point, index) => (
                  <div
                    key={point.number}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      initial={{
                        backgroundColor: "#ffffff",
                        borderColor: "#dddddd",
                        scale: 0.92,
                      }}
                      whileInView={{
                        backgroundColor: "#de1334",
                        borderColor: "#de1334",
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.45,
                      }}
                      transition={{
                        delay: 0.45 + index * 1.65,
                        duration: 0.35,
                      }}
                      className="
                        flex
                        h-[54px]
                        w-[54px]
                        items-center
                        justify-center

                        rounded-full

                        border

                        bg-white

                        shadow-[0_5px_15px_rgba(0,0,0,0.06)]
                      "
                    >
                      <motion.span
                        initial={{
                          color: "#888888",
                        }}
                        whileInView={{
                          color: "#ffffff",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.45 + index * 1.65,
                          duration: 0.2,
                        }}
                        className="
                          text-[15px]
                          font-bold
                        "
                      >
                        {point.number}
                      </motion.span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==========================================
                CARDS
            ========================================== */}

            <div
              className="
                grid
                grid-cols-2
                gap-4

                p-5

                lg:grid-cols-4
              "
            >
              {POINTS.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.article
                    key={point.title}
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
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.12,
                    }}
                    className="
                      group
                      relative

                      min-h-[275px]

                      overflow-hidden

                      rounded-[22px]

                      border
                      border-black/[0.065]

                      bg-[#f8f8f8]

                      p-5

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#de1334]/20
                      hover:bg-[#fff7f8]
                    "
                  >
                    {/* NUMBER WATERMARK */}

                    {/* ICON */}

                    <div
                      className="
                        mb-6

                        flex
                        h-[48px]
                        w-[48px]
                        items-center
                        justify-center

                        rounded-[15px]

                        border
                        border-black/[0.05]

                        bg-white

                        text-[#de1334]

                        shadow-[0_5px_16px_rgba(0,0,0,0.04)]
                      "
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    {/* SHORT */}

                    {/* TITLE */}

                    <h3
                      className="
                        max-w-[210px]

                        break-keep

                        text-[20px]
                        font-bold
                        leading-[1.35]
                        tracking-[-0.04em]

                        text-[#171717]

                        lg:text-[21px]
                      "
                    >
                      {point.title}
                    </h3>

                    {/* DESCRIPTION BOX */}

                    <div
                      className="
    mt-5
    rounded-[16px]
    border
    border-black/[0.05]
    bg-white
    px-4
    py-4
    shadow-[0_3px_12px_rgba(0,0,0,0.025)]
  "
                    >
                      <p
                        className="
      break-keep
      text-[13px]
    
      leading-[1.75]
      text-[#333]
      lg:text-[16px]
    
    "
                      >
                        {point.description}
                      </p>
                    </div>

                    {/* HOVER LINE */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0

                        h-[3px]
                        w-0

                        bg-[#de1334]

                        transition-all
                        duration-500

                        group-hover:w-full
                      "
                    />
                  </motion.article>
                );
              })}
            </div>

            {/* ==========================================
                BOTTOM BAR
            ========================================== */}

            <div
              className="
                mx-5
                mb-5

                flex
                items-center
                justify-between
                gap-5

                rounded-[20px]

                bg-[#171717]

                px-6
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-[#de1334]

                    text-white
                  "
                >
                  <Check size={14} strokeWidth={2.5} />
                </div>

                <p
                  className="
    text-[14px]
    font-bold
    text-white
  "
                >
                  맡겨주신 기능은 끝까지 책임지고 완성합니다.
                  <span className="text-[#de1334]">
                    {" "}
                    구현이 불가능한 경우에는 해당 작업 비용을 환불해드립니다.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ==========================================
              MOBILE
          ========================================== */}

          <div className="p-4 md:hidden">
            <div className="space-y-3">
              {POINTS.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.article
                    key={point.title}
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
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="
                      relative

                      overflow-hidden

                      rounded-[20px]

                      border
                      border-black/[0.07]

                      bg-[#f8f8f8]

                      p-5
                    "
                  >
                    <div className="flex gap-4">
                      {/* ICON */}

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center

                          rounded-[14px]

                          bg-white

                          text-[#de1334]

                          shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                        "
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="
                              text-[11px]
                              font-bold
                              text-[#de1334]
                            "
                          >
                            {point.number}
                          </span>

                          <span
                            className="
                              text-[11px]
                              font-bold
                              text-[#999]
                            "
                          >
                            {point.short}
                          </span>
                        </div>

                        <h3
                          className="
                            mt-1.5

                            break-keep

                            text-[19px]
                            font-bold
                            tracking-[-0.04em]

                            text-[#171717]
                          "
                        >
                          {point.title}
                        </h3>

                        <p
                          className="
                            mt-2

                            break-keep

                            text-[13px]
                            leading-[1.7]

                            text-[#333]
                          "
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* MOBILE BOTTOM */}

            <div
              className="
                mt-4

                rounded-[18px]

                bg-[#171717]

                px-5
                py-4
              "
            >
              <p
                className="
                  break-keep

                  text-[13px]
                  font-bold
                  leading-[1.6]

                  text-white
                "
              >
                실제로 운영하기 편한 홈페이지까지 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
