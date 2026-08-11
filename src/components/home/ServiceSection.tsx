"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, ChevronRight, MessageCircleMore } from "lucide-react";

const SERVICES = [
  {
    id: "custom",
    tab: "1:1맞춤 홈페이지",
    title: "우리 브랜드에 꼭 맞는 홈페이지를 만듭니다.",
    description:
      "정해진 템플릿에 내용을 끼워 넣는 방식이 아니라 브랜드의 목적과 분위기, 필요한 기능부터 함께 정리해 처음부터 새롭게 제작합니다.",
    highlight:
      "기획부터 디자인, 개발까지 브랜드에 맞는 하나의 방향으로 이어갑니다.",
    points: [
      "1:1 맞춤형 홈페이지 제작",
      "PC · 모바일 반응형 디자인",
      "필요한 기능까지 맞춤 개발",
    ],
    image: "/images/services/custom.jpg",
  },

  {
    id: "starter",
    tab: "템플릿 홈페이지",
    title: "부담은 줄이고, 필요한 것은 제대로 만듭니다.",
    description:
      "처음부터 모든 것을 새롭게 설계할 필요가 없다면 검증된 레이아웃을 활용해 더 빠르고 합리적으로 홈페이지를 제작할 수 있습니다.",
    highlight:
      "기간과 비용은 줄이면서도 홈페이지에 필요한 기본적인 완성도는 놓치지 않습니다.",
    points: [
      "검증된 레이아웃 기반 제작",
      "브랜드 컬러와 콘텐츠 맞춤 적용",
      "빠른 제작과 합리적인 비용",
    ],
    image: "/images/services/starter.jpg",
  },

  {
    id: "renewal",
    tab: "홈페이지 리뉴얼",
    title: "오래된 홈페이지를 지금에 맞게 바꿉니다.",
    description:
      "디자인만 새롭게 바꾸는 것이 아니라 기존 홈페이지의 불편한 구조와 모바일 화면, 속도, 검색 노출까지 함께 살펴보고 개선합니다.",
    highlight:
      "기존 홈페이지의 좋은 부분은 남기고, 불편했던 부분은 더 나은 방식으로 바꿉니다.",
    points: [
      "디자인과 화면 구조 개선",
      "모바일 환경 최적화",
      "속도 · SEO · 사용성 점검",
    ],
    image: "/images/services/renewal.jpg",
  },
  {
    id: "maintenance",
    tab: "유지보수",
    title: "오픈 이후의 변화까지 함께합니다.",
    description:
      "운영하면서 필요한 수정부터 기능 추가, 오류 해결까지 빠르게 도와드립니다.",
    highlight: "필요할 때 바로 수정하고, 더 나은 방향으로 계속 개선합니다.",
    points: ["콘텐츠 수정", "기능 · 페이지 추가", "오류 · 버그 해결"],
    image: "/images/services/maintenance.jpg",
  },
  {
    id: "automation",
    tab: "AI · 업무 자동화",
    title: "반복되는 일은 줄이고, 운영은 더 편하게.",
    description:
      "반복 업무와 데이터 처리를 자동화하고 필요한 AI 기능을 웹과 연결합니다.",
    highlight: "웹이 반복 업무를 대신하도록 만듭니다.",
    points: ["반복 업무 자동화", "문의 · 데이터 연동", "AI 기능 적용"],
    image: "/images/services/automation.jpg",
  },

  {
    id: "development",
    tab: "맞춤 기능 개발",
    title: "필요한 기능이 있다면, 직접 만들어드립니다.",
    description:
      "일반적인 회사 소개 홈페이지를 넘어 실제 서비스 운영에 필요한 관리자, 회원, 데이터베이스, 검색, 필터, 예약과 문의 기능까지 직접 구현합니다.",
    highlight: "필요한 모든 서비스를 만들어드립니다.",
    points: [
      "관리자 페이지 · 회원 기능",
      "데이터베이스 · 검색 · 필터",
      "예약 · 문의 등 맞춤 기능 개발",
    ],
    image: "/images/services/development.jpg",
  },
];

export default function ServiceSection() {
  const [activeId, setActiveId] = useState("custom");

  const activeService =
    SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];

  return (
    <section
      className="
        bg-white
        px-5
        py-24

        md:px-8
        md:py-28
      "
    >
      <div className="mx-auto w-full max-w-[1100px]">
        {/* ==========================================
            SECTION TITLE
        ========================================== */}

        <div className="mb-12 text-center md:mb-14">
          <h2
            className="
              break-keep

              text-[40px]
              font-bold
              leading-[1.1]
              tracking-[-0.055em]

              text-[#151515]

              sm:text-[48px]
              md:text-[56px]
            "
          >
            필요한 모든 홈페이지를
            <br />
            <span className="text-[#de1334]">만들어드립니다.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[650px]

              break-keep

              text-[16px]
              font-medium
              leading-[1.8]

              text-[#555]

              md:text-[17px]
            "
          >
            홈페이지 제작부터 리뉴얼, 운영,
            <br className="sm:hidden" />
            맞춤 기능과 업무 자동화까지
            <br className="hidden sm:block" />
            필요한 범위에 맞게 선택할 수 있습니다.
          </p>
        </div>

        {/* ==========================================
            SERVICE WRAPPER
        ========================================== */}

        <div
          className="
            overflow-hidden

            rounded-[32px]

            border
            border-black/[0.09]

            bg-[#f7f7f7]

            shadow-[0_18px_55px_rgba(0,0,0,0.06)]

            md:rounded-[38px]
          "
        >
          <div
            className="
              grid
              grid-cols-1

              lg:grid-cols-[270px_1fr]
            "
          >
            {/* ==========================================
                LEFT MENU
            ========================================== */}

            <div
              className="
                border-b
                border-black/[0.08]

                bg-[#f4f4f4]

                p-3

                lg:border-b-0
                lg:border-r
                lg:p-4
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  gap-2

                  sm:grid-cols-3

                  lg:grid-cols-1
                "
              >
                {SERVICES.map((service) => {
                  const isActive = activeId === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveId(service.id)}
                      className={`
                        group
                        relative

                        flex
                        min-h-[66px]
                        items-center
                        justify-between
                        gap-3

                        rounded-[18px]

                        px-4
                        py-3

                        text-left

                        transition-all
                        duration-300

                        sm:px-5

                        ${
                          isActive
                            ? "bg-[#de1334] shadow-[0_10px_28px_rgba(222,19,52,0.18)]"
                            : "bg-transparent hover:bg-white"
                        }
                      `}
                    >
                      <span
                        className={`
                          break-keep

                          text-[15px]
                          font-bold
                          tracking-[-0.035em]

                          sm:text-[17px]

                          ${isActive ? "text-white" : "text-[#444]"}
                        `}
                      >
                        {service.tab}
                      </span>

                      <div
                        className={`
                          hidden

                          h-8
                          w-8
                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          transition-all
                          duration-300

                          lg:flex

                          ${
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-white text-[#999]"
                          }
                        `}
                      >
                        <ChevronRight size={17} strokeWidth={2} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ==========================================
    RIGHT CONTENT
========================================== */}

            <div
              key={activeService.id}
              className="
    flex
    flex-col

    bg-white

    p-6

    sm:p-8

    md:p-10

    lg:min-h-[620px]
    lg:p-11
  "
            >
              {/* ==========================================
      TEXT + IMAGE
  ========================================== */}

              <div
                className="
      grid
      grid-cols-1
      gap-9

      xl:grid-cols-[1fr_340px]
      xl:items-start
      xl:gap-11
    "
              >
                {/* ==========================================
        TEXT
    ========================================== */}

                <div
                  className="
        flex
        flex-col

        lg:min-h-[360px]
      "
                >
                  {/* CATEGORY */}

                  <p
                    className="
          mb-3

          text-[15px]
          font-bold
          tracking-[-0.03em]

          text-[#de1334]

          md:text-[16px]
        "
                  >
                    {activeService.tab}
                  </p>

                  {/* TITLE */}

                  <h3
                    className="
          max-w-[590px]

          break-keep

          text-[30px]
          font-bold
          leading-[1.25]
          tracking-[-0.05em]

          text-[#171717]

          sm:text-[35px]

          md:text-[40px]

          lg:min-h-[100px]
        "
                  >
                    {activeService.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
          mt-5
          max-w-[600px]

          break-keep

          text-[15px]
          font-medium
          leading-[1.85]

          text-[#555]

          md:text-[16px]

          lg:min-h-[120px]
        "
                  >
                    {activeService.description}
                  </p>

                  {/* ==========================================
          HIGHLIGHT
      ========================================== */}

                  <div
                    className="
          relative

          mt-auto
          max-w-[600px]

          overflow-hidden

          rounded-[18px]

          border
          border-[#de1334]/20

          bg-[#fff3f5]

          px-6
          py-5

          lg:min-h-[90px]
        "
                  >
                    <div
                      className="
            absolute
            bottom-0
            left-0
            top-0

            w-[4px]

            bg-[#de1334]
          "
                    />

                    <div className="flex min-h-[48px] items-center">
                      <p
                        className="
              break-keep

              text-[15px]
              font-bold
              leading-[1.75]

              text-[#333]

              md:text-[16px]
            "
                      >
                        {activeService.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==========================================
        IMAGE
    ========================================== */}

                <div
                  className="
        relative

        h-[270px]
        w-full

        overflow-hidden

        rounded-[24px]

        bg-[#ededed]

        sm:h-[320px]

        xl:h-[360px]
      "
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.tab}
                    fill
                    sizes="
          (max-width: 1280px) 100vw,
          340px
        "
                    className="
          object-cover

          transition-transform
          duration-700

          hover:scale-[1.03]
        "
                  />

                  <div
                    className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-t
          from-black/[0.12]
          via-transparent
          to-transparent
        "
                  />
                </div>
              </div>

              {/* ==========================================
      POINTS
  ========================================== */}

              <div
                className="
      mt-auto

      border-t
      border-black/[0.09]

      pt-7

      lg:min-h-[125px]
    "
              >
                <div
                  className="
        grid
        grid-cols-1
        gap-3

        md:grid-cols-3
      "
                >
                  {activeService.points.map((point) => (
                    <div
                      key={point}
                      className="
            group

            flex
            min-h-[72px]
            items-center
            gap-3

            rounded-[17px]

            border
            border-black/[0.07]

            bg-white

            px-4
            py-4

            transition-all
            duration-300

            hover:border-[#de1334]/25
            hover:bg-[#fff7f8]
          "
                    >
                      <div
                        className="
              flex
              h-7
              w-7
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
              break-keep

              text-[14px]
              font-bold
              leading-[1.6]

              text-[#333]

              md:text-[15px]
            "
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            BOTTOM MESSAGE
        ========================================== */}
      </div>
    </section>
  );
}
