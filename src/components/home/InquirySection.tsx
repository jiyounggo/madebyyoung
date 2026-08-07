"use client";

import { ArrowUpRight, Check, MessageCircle } from "lucide-react";

const INQUIRIES = [
  {
    name: "김**",
    type: "기업 홈페이지",
    message: "기존 홈페이지 리뉴얼 문의드립니다.",
    time: "방금 전",
  },
  {
    name: "박**",
    type: "맞춤 홈페이지",
    message: "브랜드 홈페이지 제작 상담 가능할까요?",
    time: "3분 전",
  },
  {
    name: "이**",
    type: "맞춤 기능 개발",
    message: "관리자 페이지와 회원 기능 개발 문의드립니다.",
    time: "8분 전",
  },
  {
    name: "최**",
    type: "AI · 업무 자동화",
    message: "반복되는 문의 업무를 자동화하고 싶어요.",
    time: "12분 전",
  },
  {
    name: "정**",
    type: "쇼핑몰",
    message: "제품이 많은 쇼핑몰 제작도 가능한가요?",
    time: "18분 전",
  },
  {
    name: "윤**",
    type: "홈페이지 리뉴얼",
    message: "모바일 화면까지 전체적으로 바꾸고 싶습니다.",
    time: "24분 전",
  },
  {
    name: "한**",
    type: "맞춤 홈페이지",
    message: "아직 기획 단계인데 상담부터 가능할까요?",
    time: "31분 전",
  },
  {
    name: "서**",
    type: "유지보수",
    message: "기존 사이트 기능 추가 관련 문의드립니다.",
    time: "42분 전",
  },
];

export default function InquirySection() {
  // 자연스럽게 무한 반복되도록 동일 목록 2번
  const loopItems = [...INQUIRIES, ...INQUIRIES];

  return (
    <section
      className="
        overflow-hidden
        bg-[#f7f7f7]
        px-5
        py-24

        md:px-8
        md:py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          gap-16

          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* ==========================================
            LEFT
        ========================================== */}

        <div>
          {/* 작은 라벨 */}

          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2

              rounded-full
              border
              border-[#de1334]/15

              bg-white

              px-4
              py-2
            "
          >
            <span
              className="
                h-2
                w-2

                animate-pulse
                rounded-full

                bg-[#de1334]
              "
            />

            <span
              className="
                text-[13px]
                font-bold
                tracking-[-0.02em]

                text-[#de1334]
              "
            >
              새로운 프로젝트 문의
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              break-keep

              text-[39px]
              font-bold
              leading-[1.15]
              tracking-[-0.055em]

              text-[#171717]

              sm:text-[47px]
              md:text-[54px]
            "
          >
            지금 이 순간에도
            <br />
            <span className="text-[#de1334]">
              새로운 프로젝트가
              <br className="hidden sm:block" />
              시작되고 있습니다.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-[520px]

              break-keep

              text-[16px]
              font-medium
              leading-[1.9]

              text-[#555]

              md:text-[17px]
            "
          >
            MADE BY YOUNG은 많은 프로젝트를 동시에 찍어내지 않습니다. 하나의
            아이디어가 실제 웹이 되는 모든 과정을 직접 함께합니다.
          </p>

          {/* ==========================================
              OWNER MESSAGE
          ========================================== */}

          <div
            className="
              mt-9
              max-w-[520px]

              overflow-hidden

              rounded-[24px]

              border
              border-black/[0.07]

              bg-white

              shadow-[0_10px_35px_rgba(0,0,0,0.04)]
            "
          >
            <div className="p-6 sm:p-7">
              <p
                className="
                  text-[13px]
                  font-bold
                  tracking-[-0.02em]

                  text-[#de1334]
                "
              >
                1:1 DIRECT PROJECT
              </p>

              <p
                className="
                  mt-3

                  break-keep

                  text-[21px]
                  font-bold
                  leading-[1.5]
                  tracking-[-0.035em]

                  text-[#222]

                  sm:text-[23px]
                "
              >
                상담부터 제작, 오픈 이후까지
                <br />
                이지영이 직접 책임집니다.
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {["기획", "디자인", "개발", "피드백", "오픈", "유지보수"].map(
                  (item) => (
                    <div
                      key={item}
                      className="
                      flex
                      items-center
                      gap-1.5

                      rounded-full

                      bg-[#f6f6f6]

                      px-3
                      py-2
                    "
                    >
                      <Check
                        size={12}
                        strokeWidth={2.7}
                        className="text-[#de1334]"
                      />

                      <span
                        className="
                        text-[12px]
                        font-bold

                        text-[#444]
                      "
                      >
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* BOTTOM */}

            <div
              className="
                flex
                items-center
                justify-between

                border-t
                border-black/[0.06]

                bg-[#fff6f7]

                px-6
                py-4

                sm:px-7
              "
            >
              <p
                className="
                  text-[13px]
                  font-semibold

                  text-[#555]
                "
              >
                한 사람과 끝까지 함께하는 제작
              </p>

              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="text-[#de1334]"
              />
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT - INQUIRY STREAM
        ========================================== */}

        <div
          className="
            relative
            mx-auto

            h-[600px]
            w-full
            max-w-[570px]

            overflow-hidden
          "
        >
          {/* 위쪽 자연스럽게 사라지는 효과 */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              z-20

              h-[120px]

              bg-gradient-to-b
              from-[#f7f7f7]
              via-[#f7f7f7]/80
              to-transparent
            "
          />

          {/* 아래쪽 자연스럽게 사라지는 효과 */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20

              h-[120px]

              bg-gradient-to-t
              from-[#f7f7f7]
              via-[#f7f7f7]/80
              to-transparent
            "
          />

          {/* 배경 큰 글자 */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                select-none

                text-[120px]
                font-black
                tracking-[-0.08em]

                text-black/[0.025]

                md:text-[160px]
              "
            >
              YOUNG
            </span>
          </div>

          {/* ==========================================
              MOVING LIST
          ========================================== */}

          <div className="inquiry-marquee flex flex-col gap-3">
            {loopItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`
                  group

                  relative
                  z-10

                  flex
                  items-center
                  gap-4

                  rounded-[18px]

                  border

                  bg-white

                  px-5
                  py-4

                  shadow-[0_8px_30px_rgba(0,0,0,0.045)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]

                  ${
                    index % 4 === 1
                      ? "border-[#de1334]/20"
                      : "border-black/[0.06]"
                  }
                `}
              >
                {/* AVATAR */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-[#fff0f2]

                    text-[#de1334]
                  "
                >
                  <MessageCircle size={18} strokeWidth={2} />
                </div>

                {/* TEXT */}

                <div className="min-w-0 flex-1">
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        text-[14px]
                        font-bold

                        text-[#222]
                      "
                    >
                      {item.name}
                    </span>

                    <span
                      className="
                        rounded-full

                        bg-[#f4f4f4]

                        px-2
                        py-1

                        text-[10px]
                        font-bold

                        text-[#777]
                      "
                    >
                      {item.type}
                    </span>
                  </div>

                  <p
                    className="
                      mt-1.5
                      truncate

                      text-[14px]
                      font-medium

                      text-[#555]
                    "
                  >
                    {item.message}
                  </p>
                </div>

                {/* TIME */}

                <span
                  className="
                    shrink-0

                    text-[11px]
                    font-medium

                    text-[#aaa]
                  "
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          MARQUEE CSS
      ========================================== */}

      <style jsx>{`
        .inquiry-marquee {
          animation: inquiryScroll 22s linear infinite;
          will-change: transform;
        }

        .inquiry-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes inquiryScroll {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(calc(-50% - 6px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .inquiry-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
