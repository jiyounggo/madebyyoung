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
  // 동일한 목록을 두 번 이어 붙여 끊김 없는 무한 루프
  const loopItems = [...INQUIRIES, ...INQUIRIES];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1360px]
          grid-cols-1
          lg:h-[360px]
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
            bg-[#f7f7f7]
            px-6
            py-10
            md:px-10
            lg:h-[360px]
            lg:px-14
            lg:py-8
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
                text-[#171717]
                sm:text-[35px]
                md:text-[38px]
              "
            >
              많이 만들기보다,
              <br />
              <span className="text-[#de1334]">하나를 제대로 만듭니다.</span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                break-keep
                text-[14px]
                font-medium
                leading-[1.7]
                text-[#666]
                md:text-[15px]
              "
            >
              상담부터 기획, 디자인, 개발,
              <br />
              <strong className="font-bold text-[#222]">
                오픈까지 모든 과정을 직접 진행합니다.
              </strong>
            </p>

            {/* LIMITED PROJECT */}

            <div
              className="
                mt-5
                max-w-[400px]
                border-t
                border-black/[0.1]
                pt-4
              "
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  {/* LABEL */}

                  <div className="mb-3 flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#de1334]
                    opacity-30
                  "
                      />

                      <span
                        className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#de1334]
                  "
                      />
                    </span>
                  </div>
                  <p
                    className="
                      text-[17px]
                      font-bold
                      tracking-[-0.035em]
                      text-[#171717]
                    "
                  >
                    월 소수 프로젝트만 진행
                  </p>
                </div>
              </div>
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
            bg-white
            lg:h-[360px]
          "
        >
          {/* TOP FADE */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              z-20
              h-[22px]
              bg-gradient-to-b
              from-white
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
              h-[22px]
              bg-gradient-to-t
              from-white
              to-transparent
            "
          />

          {/* MAIL LOOP */}

          <motion.div
            className="flex flex-col"
            animate={{
              y: ["0%", "-50%"],
            }}
            transition={{
              duration: 10,
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
                  border-black/[0.055]
                  bg-white
                  px-4
                  transition-colors
                  duration-200
                  hover:bg-[#fafafa]
                  sm:grid-cols-[22px_22px_24px_120px_minmax(0,1fr)_auto]
                  sm:gap-3
                  sm:px-5
                  xl:grid-cols-[22px_22px_24px_145px_minmax(0,1fr)_auto]
                "
              >
                {/* CHECKBOX */}

                <Square
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#c4cbd4]"
                />

                {/* STAR */}

                <Star
                  size={16}
                  strokeWidth={1.4}
                  className="
                    text-[#c4cbd4]
                    transition-colors
                    duration-200
                    group-hover:text-[#de1334]
                  "
                />

                {/* MAIL */}

                <Mail size={17} strokeWidth={1.5} className="text-[#9ec8eb]" />

                {/* NAME */}

                <p
                  className="
                    truncate
                    text-[13px]
                    font-bold
                    text-[#222]
                    sm:text-[14px]
                  "
                >
                  {item.name}
                </p>

                {/* SUBJECT */}

                <div className="flex min-w-0 items-center gap-2">
                  <p
                    className="
                      min-w-0
                      flex-1
                      truncate
                      text-[12px]
                      font-semibold
                      text-[#333]
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
                      text-[#9aa1aa]
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
                    text-[#777]
                    sm:text-[11px]
                  "
                >
                  {item.date}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
