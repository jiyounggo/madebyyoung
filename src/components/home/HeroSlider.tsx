"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ==========================================
   SLIDES
========================================== */

const slides = [
  {
    id: 1,
    type: "website",
    eyebrow: "WEBSITE STUDIO",
    title1: "브랜드를 담은",
    title2: "홈페이지를 만듭니다.",
    description1: "기획부터 디자인, 개발까지.",
    description2: "브랜드에 필요한 웹을 하나의 흐름으로 만듭니다.",
    button: "프로젝트 보기",
    background: "#F4F1EC",
  },

  {
    id: 2,
    type: "development",
    eyebrow: "WEB DEVELOPMENT",
    title1: "보이는 것 너머의",
    title2: "기능까지.",
    description1: "관리자 페이지, 회원, DB, 검색과 필터 등",
    description2: "비즈니스에 필요한 기능을 구현합니다.",
    button: "개발 서비스 보기",
    background: "#ECEFF1",
  },

  {
    id: 3,
    type: "seo",
    eyebrow: "SEO",
    title1: "잘 만든 웹이,",
    title2: "잘 발견되도록.",
    description1: "검색엔진이 사이트를 제대로 이해할 수 있도록",
    description2: "구조부터 구글 · 네이버 기본 SEO까지 함께 설계합니다.",
    button: "SEO 알아보기",
    background: "#F0F2EA",
  },

  {
    id: 4,
    type: "automation",
    eyebrow: "AI & AUTOMATION",
    title1: "반복되는 일은,",
    title2: "더 간단하게.",
    description1: "문의 수집부터 데이터 정리, 콘텐츠와 관리 업무까지.",
    description2: "반복되는 작업을 웹과 AI로 연결합니다.",
    button: "자동화 서비스 보기",
    background: "#F7ECEE",
  },
];

type HeroSliderProps = {
  introFinished: boolean;
};

export default function HeroSlider({ introFinished }: HeroSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slide = slides[activeSlide];

  useEffect(() => {
    if (!introFinished || !isPlaying) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [introFinished, isPlaying]);

  return (
    <motion.div
      animate={{
        backgroundColor: slide.background,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          px-6
          pb-28
          pt-28
          md:px-10
          lg:grid-cols-[0.88fr_1.12fr]
          lg:px-14
          lg:pb-24
          lg:pt-24
          xl:px-16
        "
      >
        {/* =========================================
            LEFT TEXT
        ========================================= */}

        <div className="relative z-20 lg:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p
                className="
                  mb-6
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-black/40
                  md:text-[11px]
                "
              >
                {slide.eyebrow}
              </p>

              <h1
                className="
                  text-[clamp(40px,4.4vw,70px)]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.055em]
                  text-[#171717]
                "
              >
                {slide.title1}

                <br />

                {slide.title2}
              </h1>

              <motion.div
                key={`line-${slide.id}`}
                initial={{ width: 0 }}
                animate={{ width: 55 }}
                transition={{
                  duration: 0.75,
                  delay: 0.25,
                }}
                className="
                  mt-7
                  h-[3px]
                  bg-[#DE1334]
                  md:mt-8
                "
              />

              <p
                className="
                  mt-6
                  text-[14px]
                  leading-[1.75]
                  tracking-[-0.025em]
                  text-black/55
                  md:text-[16px]
                "
              >
                {slide.description1}

                <br />

                {slide.description2}
              </p>

              <button
                type="button"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-6
                  rounded-full
                  border
                  border-black/35
                  px-6
                  py-3.5
                  text-[12px]
                  font-medium
                  transition-all
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  md:mt-10
                  md:px-7
                  md:py-4
                  md:text-[13px]
                "
              >
                {slide.button}

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================
            RIGHT VISUAL
        ========================================= */}

        <div
          className="
            relative
            mt-14
            flex
            min-h-[360px]
            items-center
            justify-center
            lg:mt-0
            lg:min-h-[650px]
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${slide.id}`}
              initial={{
                opacity: 0,
                x: 80,
                scale: 0.94,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: -50,
                scale: 0.97,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-full w-full"
            >
              {slide.type === "website" && <WebsiteVisual />}

              {slide.type === "development" && <DevelopmentVisual />}

              {slide.type === "seo" && <SeoVisual />}

              {slide.type === "automation" && <AutomationVisual />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================
          PAGINATION
      ========================================= */}

      <div
        className="
          absolute
          bottom-8
          left-6
          z-30
          flex
          items-center
          gap-3
          md:left-10
          lg:left-[max(3.5rem,calc((100vw-1500px)/2+3.5rem))]
        "
      >
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`${index + 1}번 슬라이드`}
            onClick={() => setActiveSlide(index)}
            className="flex h-5 items-center"
          >
            <span
              className={`
                block
                h-[3px]
                transition-all
                duration-500
                ${
                  activeSlide === index
                    ? "w-10 bg-black/70"
                    : "w-7 bg-black/15 hover:bg-black/30"
                }
              `}
            />
          </button>
        ))}

        <button
          type="button"
          aria-label={isPlaying ? "자동 재생 정지" : "자동 재생 시작"}
          onClick={() => setIsPlaying((prev) => !prev)}
          className="
            ml-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-black/15
            text-[10px]
            text-black/45
            transition
            hover:border-black/35
            hover:text-black
          "
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>
      </div>

      {/* =========================================
          SCROLL
      ========================================= */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span
          className="
            text-[8px]
            font-semibold
            tracking-[0.12em]
          "
        >
          SCROLL
        </span>

        <div
          className="
            relative
            h-[42px]
            w-[25px]
            rounded-full
            border
            border-black/70
          "
        >
          <motion.span
            animate={{
              y: [7, 20, 7],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-0
              h-[6px]
              w-[3px]
              -translate-x-1/2
              rounded-full
              bg-black
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   WEBSITE VISUAL
============================================================ */

/* ============================================================
   WEBSITE VISUAL
============================================================ */

function WebsiteVisual() {
  return (
    <div
      className="
        relative
        h-[420px]
        w-full
        md:h-[540px]
        lg:h-[620px]
      "
    >
      {/* 메인 NOIRE */}
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          w-[76%]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-[24px]
          border
          border-black/[0.08]
          bg-white
          shadow-[0_35px_100px_rgba(0,0,0,0.16)]
        "
      >
        <BrowserHeader />

        <div className="h-[310px] overflow-hidden md:h-[400px]">
          <img
            src="/images/works/noire.png"
            alt="NOIRE 홈페이지"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* 왼쪽 아래 MOOD ME */}
      <motion.div
        animate={{
          y: [0, 7, 0],
          rotate: [-4, -2, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[2%]
          left-[0%]
          z-20
          w-[37%]
          overflow-hidden
          rounded-[18px]
          border
          border-black/[0.08]
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.14)]
        "
      >
        <BrowserHeader />

        <div className="h-[150px] overflow-hidden md:h-[200px]">
          <img
            src="/images/works/mood-me.png"
            alt="Mood ME 홈페이지"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* 오른쪽 위 제주누리 */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [4, 2, 4],
        }}
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[0%]
          top-[3%]
          z-[5]
          hidden
          w-[36%]
          overflow-hidden
          rounded-[18px]
          border
          border-black/[0.08]
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.13)]
          md:block
        "
      >
        <BrowserHeader />

        <div className="h-[175px] overflow-hidden">
          <img
            src="/images/works/jejunuri.png"
            alt="제주누리 홈페이지"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* 오른쪽 아래 LIVMOVE */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [3, 1, 3],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[0%]
          right-[1%]
          z-30
          w-[36%]
          overflow-hidden
          rounded-[18px]
          border
          border-black/[0.08]
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.14)]
        "
      >
        <BrowserHeader />

        <div className="h-[155px] overflow-hidden md:h-[205px]">
          <img
            src="/images/works/livmove.png"
            alt="리브무브 홈페이지"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </div>
  );
}
/* ============================================================
   DEVELOPMENT VISUAL
============================================================ */

function DevelopmentVisual() {
  return (
    <div
      className="
        relative
        flex
        h-[380px]
        w-full
        items-center
        justify-center
        md:h-[520px]
        lg:h-[620px]
      "
    >
      <div
        className="
          absolute
          h-[310px]
          w-[310px]
          rounded-full
          bg-white/50
          md:h-[470px]
          md:w-[470px]
        "
      />

      <div
        className="
          relative
          z-10
          w-[87%]
          max-w-[620px]
          overflow-hidden
          rounded-[24px]
          border
          border-black/[0.08]
          bg-[#101010]
          text-white
          shadow-[0_35px_100px_rgba(0,0,0,0.16)]
        "
      >
        <div
          className="
            flex
            h-[50px]
            items-center
            justify-between
            border-b
            border-white/10
            px-5
          "
        >
          <p
            className="
              text-[9px]
              tracking-[0.2em]
              text-white/40
            "
          >
            ADMIN
          </p>

          <div
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#DE1334]
            "
          />
        </div>

        <div
          className="
            grid
            grid-cols-[120px_1fr]
            md:grid-cols-[160px_1fr]
          "
        >
          <div
            className="
              border-r
              border-white/10
              p-4
            "
          >
            {["Dashboard", "Products", "Members", "Orders", "Settings"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`
                  mb-2
                  rounded-[8px]
                  px-3
                  py-2.5
                  text-[9px]
                  ${index === 0 ? "bg-white text-black" : "text-white/35"}
                `}
                >
                  {item}
                </div>
              ),
            )}
          </div>

          <div
            className="
              p-5
              md:p-7
            "
          >
            <div
              className="
                flex
                items-end
                justify-between
              "
            >
              <div>
                <span
                  className="
                    text-[9px]
                    text-white/35
                  "
                >
                  PRODUCTS
                </span>

                <p
                  className="
                    mt-1
                    text-[32px]
                    font-semibold
                    tracking-[-0.05em]
                    md:text-[45px]
                  "
                >
                  3,241
                </p>
              </div>

              <button
                className="
                  rounded-full
                  bg-[#DE1334]
                  px-4
                  py-2
                  text-[8px]
                  font-semibold
                "
              >
                + ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SEO VISUAL
============================================================ */

function SeoVisual() {
  const fullText = "브랜드 홈페이지 제작";

  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index += 1;

      setText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        relative
        flex
        h-[380px]
        w-full
        items-center
        justify-center
        md:h-[520px]
        lg:h-[620px]
      "
    >
      <div
        className="
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          bg-white/50
          md:h-[470px]
          md:w-[470px]
        "
      />

      <div
        className="
          relative
          z-10
          w-[90%]
          max-w-[630px]
          rounded-[24px]
          bg-white
          p-5
          shadow-[0_35px_100px_rgba(0,0,0,0.10)]
          md:p-8
        "
      >
        <div
          className="
            flex
            items-center
            rounded-full
            border
            border-black/15
            px-5
            py-4
          "
        >
          <span className="mr-3 text-[14px]">⌕</span>

          <div
            className="
              flex
              items-center
              text-[12px]
              font-medium
              md:text-[15px]
            "
          >
            {text}

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="
                ml-1
                h-[16px]
                w-[2px]
                bg-[#DE1334]
              "
            />
          </div>
        </div>

        <div className="mt-7">
          <p
            className="
              mb-4
              text-[8px]
              tracking-[0.2em]
              text-black/30
            "
          >
            SEARCH RESULTS
          </p>

          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: index === 0 ? 1 : 0.5,
                y: 0,
              }}
              transition={{
                delay: 0.3 + index * 0.12,
              }}
              className="
                border-t
                border-black/[0.08]
                py-4
              "
            >
              <span
                className="
                  text-[8px]
                  text-black/30
                "
              >
                madebyyoung.com
              </span>

              <p
                className="
                  mt-1
                  text-[14px]
                  font-semibold
                  tracking-[-0.03em]
                  md:text-[17px]
                "
              >
                브랜드 홈페이지 제작 · MADE BY YOUNG
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   AUTOMATION VISUAL
============================================================ */

function AutomationVisual() {
  return (
    <div
      className="
        relative
        flex
        h-[380px]
        w-full
        items-center
        justify-center
        md:h-[520px]
        lg:h-[620px]
      "
    >
      <div
        className="
          absolute
          h-[310px]
          w-[310px]
          rounded-full
          bg-white/45
          md:h-[470px]
          md:w-[470px]
        "
      />

      <div
        className="
          relative
          z-10
          grid
          w-[90%]
          max-w-[620px]
          grid-cols-3
          gap-4
        "
      >
        {["문의", "WEB FORM", "AI", "자동 분류", "DATABASE", "ADMIN"].map(
          (item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className={`
              flex
              h-[100px]
              items-center
              justify-center
              rounded-[18px]
              border
              border-black/[0.08]
              text-[11px]
              font-semibold
              shadow-[0_15px_45px_rgba(0,0,0,0.06)]
              ${
                item === "AI"
                  ? "bg-[#DE1334] text-white"
                  : "bg-white text-black"
              }
            `}
            >
              {item}
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}

/* ============================================================
   BROWSER HEADER
============================================================ */

function BrowserHeader() {
  return (
    <div
      className="
        flex
        h-[34px]
        items-center
        gap-[5px]
        border-b
        border-black/[0.05]
        px-4
      "
    >
      <span className="h-[5px] w-[5px] rounded-full bg-black/15" />
      <span className="h-[5px] w-[5px] rounded-full bg-black/15" />
      <span className="h-[5px] w-[5px] rounded-full bg-[#DE1334]" />
    </div>
  );
}
