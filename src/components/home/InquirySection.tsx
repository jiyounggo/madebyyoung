"use client";

import { motion } from "framer-motion";
import { Mail, Search, Square, Star } from "lucide-react";

const INQUIRIES = [
  {
    name: "김*진",
    subject: "기업 홈페이지 신규 제작 문의드립니다.",
    date: "1시간 전",
  },
  {
    name: "박*영",
    subject: "브랜드 홈페이지 제작 상담 가능할까요?",
    date: "3시간 전",
  },
  {
    name: "이*현",
    subject: "기존 홈페이지 전체 리뉴얼 문의드립니다.",
    date: "5시간 전",
  },
  {
    name: "최*원",
    subject: "관리자 페이지 추가 개발 문의드립니다.",
    date: "8시간 전",
  },
  {
    name: "정*윤",
    subject: "쇼핑몰 제작 비용과 기간이 궁금합니다.",
    date: "12시간 전",
  },
  {
    name: "한*희",
    subject: "아직 기획 단계인데 상담부터 가능할까요?",
    date: "어제",
  },
  {
    name: "윤*영",
    subject: "AI 업무 자동화 관련 제작 문의드립니다.",
    date: "어제",
  },
  {
    name: "서*민",
    subject: "기존 사이트 유지보수 문의드립니다.",
    date: "2일 전",
  },
  {
    name: "강*준",
    subject: "회원 기능이 있는 홈페이지 제작 문의드립니다.",
    date: "2일 전",
  },
  {
    name: "오*현",
    subject: "예약 기능이 포함된 홈페이지 제작 문의드립니다.",
    date: "3일 전",
  },
  {
    name: "장*서",
    subject: "회사 홈페이지와 관리자 기능 제작 문의입니다.",
    date: "3일 전",
  },
  {
    name: "신*우",
    subject: "제품 검색과 필터 기능 개발도 가능할까요?",
    date: "4일 전",
  },
];

export default function InquirySection() {
  // 같은 목록을 2번 연결해서 무한 스크롤
  const loopItems = [...INQUIRIES, ...INQUIRIES];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#141414]
      "
    >
      {/* 은은한 브랜드 컬러 배경 */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          -top-[180px]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#de1334]/[0.07]
          blur-[20px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-1

          lg:grid-cols-[0.72fr_1.28fr]
        "
      >
        {/* ==========================================
            LEFT
        ========================================== */}

        <div
          className="
            flex
            items-center
            bg-[#141414]

            px-6
            py-12

            md:px-10

            lg:h-[360px]
            lg:px-14
            lg:py-10

            xl:pl-16
            xl:pr-14
          "
        >
          <div className="w-full max-w-[420px]">
            {/* TITLE */}

            <h2
              className="
                break-keep

                text-[31px]
                font-bold
                leading-[1.13]
                tracking-[-0.055em]

                text-white

                sm:text-[35px]
                md:text-[38px]
              "
            >
              많이 만들기보다,
              <br />
              <span className="text-[#de1334]">하나를 제대로 만듭니다.</span>
            </h2>

            {/* LIMITED PROJECT */}

            <div
              className="
                mt-6
                max-w-[400px]

                border-t
                border-white/[0.1]

                pt-5
              "
            >
              <div className="flex items-center gap-3">
                {/* NUMBER */}

                <span
                  className="
                    text-[13px]
                    font-bold
                    text-[#de1334]
                  "
                >
                  ONLY
                </span>

                <div className="h-[12px] w-px bg-white/[0.14]" />

                <p
                  className="
                    text-[16px]
                    font-bold
                    tracking-[-0.035em]

                    text-white
                  "
                >
                  월 소수 프로젝트만 진행
                </p>
              </div>

              <p
                className="
                  mt-2
                  text-[14px]
                  font-medium
                  text-white/35
                "
              >
                하나의 프로젝트에 더 집중하기 위해 제한적으로 진행합니다.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT - MAIL
        ========================================== */}

        <div
          className="
            relative

            h-[330px]
            w-full
            overflow-hidden

            border-l
            border-white/[0.06]

            bg-[#191919]

            lg:h-[360px]
          "
        >
          {/* 아주 은은한 상단 빛 */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10

              h-[120px]
              w-full

              bg-gradient-to-b
              from-white/[0.015]
              to-transparent
            "
          />

          {/* TOP FADE */}

          <div
            className="
              pointer-events-none

              absolute
              left-0
              right-0
              top-0
              z-20

              h-[35px]

              bg-gradient-to-b
              from-[#191919]
              to-transparent
            "
          />

          {/* BOTTOM FADE */}

          <div
            className="
              pointer-events-none

              absolute
              bottom-0
              left-0
              right-0
              z-20

              h-[35px]

              bg-gradient-to-t
              from-[#191919]
              to-transparent
            "
          />

          {/* ==========================================
              MAIL LOOP
          ========================================== */}

          <motion.div
            className="flex flex-col"
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {loopItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="
                  group

                  grid
                  h-[52px]
                  shrink-0

                  grid-cols-[22px_22px_22px_105px_minmax(0,1fr)_auto]

                  items-center
                  gap-2

                  border-b
                  border-white/[0.055]

                  bg-[#191919]

                  px-4

                  transition-all
                  duration-200

                  hover:bg-[#222222]

                  sm:grid-cols-[22px_22px_24px_120px_minmax(0,1fr)_auto]
                  sm:gap-3
                  sm:px-5

                  xl:grid-cols-[22px_22px_24px_145px_minmax(0,1fr)_auto]
                "
              >
                {/* CHECKBOX */}

                <Square
                  size={15}
                  strokeWidth={1.3}
                  className="
                    text-white/20
                    transition-colors
                    duration-200

                    group-hover:text-white/40
                  "
                />

                {/* STAR */}

                <Star
                  size={16}
                  strokeWidth={1.4}
                  className="
                    text-white/20

                    transition-all
                    duration-200

                    group-hover:scale-110
                    group-hover:text-[#de1334]
                  "
                />

                {/* MAIL */}

                <div
                  className="
                    flex
                    h-[24px]
                    w-[24px]
                    items-center
                    justify-center

                    rounded-[7px]

                    bg-white/[0.055]

                    transition-colors
                    duration-200

                    group-hover:bg-[#de1334]/15
                  "
                >
                  <Mail
                    size={13}
                    strokeWidth={1.6}
                    className="
                      text-white/45

                      transition-colors
                      duration-200

                      group-hover:text-[#de1334]
                    "
                  />
                </div>

                {/* NAME */}

                <p
                  className="
                    truncate

                    text-[13px]
                    font-bold

                    text-white/85

                    sm:text-[14px]
                  "
                >
                  {item.name}
                </p>

                {/* SUBJECT */}

                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                  "
                >
                  <p
                    className="
                      min-w-0
                      flex-1
                      truncate

                      text-[12px]
                      font-medium

                      text-white/55

                      transition-colors
                      duration-200

                      group-hover:text-white/80

                      sm:text-[13px]
                    "
                  >
                    {item.subject}
                  </p>

                  <Search
                    size={13}
                    strokeWidth={1.5}
                    className="
                      hidden
                      shrink-0

                      text-white/20

                      transition-colors
                      duration-200

                      group-hover:text-white/45

                      sm:block
                    "
                  />
                </div>

                {/* DATE */}

                <p
                  className="
                    whitespace-nowrap

                    text-[10px]
                    font-medium

                    text-white/30

                    sm:text-[11px]
                  "
                >
                  {item.date}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 오른쪽 아주 약한 브랜드 빛 */}

          <div
            className="
              pointer-events-none

              absolute
              -bottom-[170px]
              -right-[170px]

              z-10

              h-[350px]
              w-[350px]

              rounded-full

              bg-[#de1334]/[0.035]

              blur-[10px]
            "
          />
        </div>
      </div>
    </section>
  );
}
