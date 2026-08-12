"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ==========================================
   INTRO WORDS
========================================== */

const introWords = [
  "HOMEPAGE",
  "DESIGN",
  "DEVELOPMENT",
  "SEO",
  "AI",
  "AUTOMATION",
];

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

    background: "#F7ECEE",
  },
];

const searchResults = [
  {
    site: "MADE BY YOUNG",
    url: "madebyyoung.com",
    initial: "Y",
    title: "브랜드 홈페이지 제작 · MADE BY YOUNG",
    description:
      "브랜드를 이해하고 비즈니스에 필요한 홈페이지를 제작합니다. 웹 개발, SEO, AI 자동화까지 하나의 흐름으로 만듭니다.",
    top: true,
  },
  {
    site: "WEB DESIGN MAGAZINE",
    url: "webdesign-magazine.com",
    initial: "W",
    title: "브랜드를 위한 홈페이지 제작, 무엇이 중요할까?",
    description:
      "좋은 홈페이지는 디자인뿐만 아니라 사용자 경험과 콘텐츠 구조, 모바일 환경까지 함께 고려해야 합니다.",
    top: false,
  },
  {
    site: "DIGITAL BUSINESS",
    url: "digital-business.kr",
    initial: "D",
    title: "비즈니스 성장을 위한 웹사이트 구축 가이드",
    description:
      "검색 노출부터 고객 문의, 데이터 관리까지 비즈니스에 필요한 웹사이트의 핵심 요소를 살펴봅니다.",
    top: false,
  },
];

export default function HeroSection() {
  /* ==========================================
     INTRO
  ========================================== */

  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [introFinished, setIntroFinished] = useState(false);

  /* ==========================================
     SLIDER
  ========================================== */

  const [activeSlide, setActiveSlide] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);

  const slide = slides[activeSlide];

  /* ==========================================
     INTRO TYPING
  ========================================== */

  useEffect(() => {
    if (introFinished) return;

    const currentWord = introWords[wordIndex];

    let charIndex = 0;

    setTypedText("");

    let nextTimer: ReturnType<typeof setTimeout> | null = null;

    let finishTimer: ReturnType<typeof setTimeout> | null = null;

    const typingTimer = setInterval(() => {
      charIndex += 1;

      setTypedText(currentWord.slice(0, charIndex));

      if (charIndex >= currentWord.length) {
        clearInterval(typingTimer);

        nextTimer = setTimeout(() => {
          if (wordIndex === introWords.length - 1) {
            finishTimer = setTimeout(() => {
              setIntroFinished(true);
            }, 350);

            return;
          }

          setWordIndex((prev) => prev + 1);
        }, 140);
      }
    }, 55);

    return () => {
      clearInterval(typingTimer);

      if (nextTimer) {
        clearTimeout(nextTimer);
      }

      if (finishTimer) {
        clearTimeout(finishTimer);
      }
    };
  }, [wordIndex, introFinished]);

  /* ==========================================
     AUTOPLAY
  ========================================== */

  useEffect(() => {
    if (!introFinished || !isPlaying) {
      return;
    }

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      clearInterval(timer);
    };
  }, [introFinished, isPlaying]);

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* ==================================================
          INTRO
      ================================================== */}

      <AnimatePresence>
        {!introFinished && (
          <motion.div
            key="intro"
            initial={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: 1.05,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[999]
              flex
              h-screen
              w-full
              items-center
              justify-center
              overflow-hidden
              bg-black
              text-white
            "
          >
            {/* TOP LEFT */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.45,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                absolute
                left-6
                top-6

                text-[9px]
                font-medium

                tracking-[0.22em]

                md:left-10
                md:top-8
                md:text-[10px]
              "
            >
              MADE BY YOUNG
            </motion.p>

            {/* TOP RIGHT */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.3,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                absolute
                right-6
                top-6

                text-[9px]

                tracking-[0.2em]

                md:right-10
                md:top-8
                md:text-[10px]
              "
            >
              DIGITAL STUDIO
            </motion.p>

            {/* TYPING */}

            <div
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                px-4
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <span
                  className="
                    whitespace-nowrap

                    text-[clamp(46px,10vw,175px)]

                    font-semibold

                    leading-none

                    tracking-[-0.075em]
                  "
                >
                  {typedText}
                </span>

                {/* RED CURSOR */}

                <motion.span
                  animate={{
                    opacity: [1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                  }}
                  className="
                    ml-2
                    block

                    h-[clamp(45px,9vw,145px)]

                    w-[4px]

                    bg-[#DE1334]

                    md:w-[6px]
                  "
                />
              </div>
            </div>

            {/* INTRO PROGRESS */}

            <div
              className="
                absolute
                bottom-8
                left-6

                flex
                items-center
                gap-3

                md:left-10
              "
            >
              <span
                className="
                  text-[9px]
                  text-white/40
                "
              >
                0{wordIndex + 1}
              </span>

              <div
                className="
                  h-px
                  w-[75px]

                  overflow-hidden

                  bg-white/15
                "
              >
                <motion.div
                  animate={{
                    width: `${((wordIndex + 1) / introWords.length) * 100}%`,
                  }}
                  className="
                    h-full
                    bg-[#DE1334]
                  "
                />
              </div>

              <span
                className="
                  text-[9px]
                  text-white/25
                "
              >
                0{introWords.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================================================
          HERO SLIDER
      ================================================== */}

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

            lg:grid-cols-[1fr_1fr]
            lg:px-14
            lg:pb-24
            lg:pt-24

            xl:px-16
          "
        >
          {/* ==================================================
              LEFT TEXT
          ================================================== */}

          <div
            className="
              relative
              z-20

              lg:pr-12
            "
          >
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
                {/* EYEBROW */}

                <p
                  className="
                    mb-6

          
                    font-semibold

                    uppercase
                    tracking-[0.22em]

                    text-black/40

                  text-[18px]
md:text-[24px]
                  "
                >
                  {slide.eyebrow}
                </p>

                {/* TITLE */}

                <h1
                  className="
                 text-[56px]

                    font-semibold

                    leading-[1.08]

                    tracking-[-0.055em]

                    text-[#171717]
                  "
                >
                  {slide.title1}

                  <br />

                  <span>{slide.title2}</span>
                </h1>

                {/* RED LINE */}

                <motion.div
                  key={`line-${slide.id}`}
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 55,
                  }}
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

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-6

              text-[15px]
md:text-[18px]
lg:text-[25px]

                    leading-[1.75]

                    tracking-[-0.025em]

                    text-black/55

                  
                  "
                >
                  {slide.description1}

                  <br />

                  {slide.description2}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==================================================
              RIGHT VISUAL
          ================================================== */}

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
                className="
                  relative
                  h-full
                  w-full
                "
              >
                {/* ======================================
                    01 WEBSITE VISUAL
                ====================================== */}

                {slide.type === "website" && <WebsiteVisual />}

                {/* ======================================
                    02 DEVELOPMENT VISUAL
                ====================================== */}

                {slide.type === "development" && <DevelopmentVisual />}

                {/* ======================================
                    03 SEO VISUAL
                ====================================== */}

                {slide.type === "seo" && <SeoVisual />}

                {/* ======================================
                    04 AUTOMATION VISUAL
                ====================================== */}

                {slide.type === "automation" && <AutomationVisual />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ==================================================
            PAGINATION
        ================================================== */}

        <div
          className="
            absolute
            bottom-32
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
              className="
                  flex
                  h-5
                  items-center
                "
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

          {/* PAUSE */}

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

        {/* ==================================================
            SCROLL
        ================================================== */}

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
    </section>
  );
}

/* ============================================================
   01 WEBSITE
============================================================ */

function WebsiteVisual() {
  return (
    <div className="relative h-[420px] w-full md:h-[540px] lg:h-[620px]">
      {/* ==========================================
          MAIN - NOIRE
      ========================================== */}
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
          left-[8%]
          top-[13%]
          z-10
          w-[76%]
          overflow-hidden
          rounded-[22px]
          border
          border-black/10
          bg-white
          shadow-[0_35px_90px_rgba(0,0,0,0.18)]
        "
      >
        <BrowserHeader />

        <div className="relative h-[300px] overflow-hidden md:h-[390px]">
          <img
            src="/images/works/noire.png"
            alt="NOIRE 홈페이지"
            className="
              h-full
              w-full
              object-cover
              object-top
            "
          />
        </div>
      </motion.div>

      {/* ==========================================
          LEFT BOTTOM - MOOD ME
      ========================================== */}
      <motion.div
        animate={{
          y: [0, 7, 0],
          rotate: [-4, -2, -4],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[3%]
          left-[0%]
          z-20
          w-[38%]
          overflow-hidden
          rounded-[18px]
          border
          border-black/10
          bg-white
          shadow-[0_25px_60px_rgba(0,0,0,0.16)]
        "
      >
        <BrowserHeader />

        <div className="h-[155px] overflow-hidden md:h-[200px]">
          <img
            src="/images/works/mood-me.png"
            alt="Mood ME 홈페이지"
            className="
              h-full
              w-full
              object-cover
              object-top
            "
          />
        </div>
      </motion.div>

      {/* ==========================================
          RIGHT BOTTOM - LIVMOVE
      ========================================== */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [4, 2, 4],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[0%]
          right-[0%]
          z-30
          w-[40%]
          overflow-hidden
          rounded-[18px]
          border
          border-black/10
          bg-white
          shadow-[0_25px_60px_rgba(0,0,0,0.16)]
        "
      >
        <BrowserHeader />

        <div className="h-[160px] overflow-hidden md:h-[210px]">
          <img
            src="/images/works/livmove.png"
            alt="리브무브 홈페이지"
            className="
              h-full
              w-full
              object-cover
              object-top
            "
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   02 DEVELOPMENT
============================================================ */

function DevelopmentVisual() {
  const chartData = [10, 14, 20, 28, 38, 50, 64, 79, 91, 100];

  return (
    <div
      className="
        relative
        flex
        h-[430px]
        w-full
        items-center
        justify-center

        md:h-[580px]

        lg:h-[700px]
      "
    >
      {/* BACKGROUND CIRCLE */}
      <div
        className="
          absolute

          h-[350px]
          w-[350px]

          rounded-full

          bg-white/55

          md:h-[520px]
          md:w-[520px]

          lg:h-[610px]
          lg:w-[610px]
        "
      />

      {/* ADMIN DASHBOARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10

          w-[94%]
          max-w-[760px]

          overflow-hidden

          rounded-[28px]

          border
          border-black/[0.08]

          bg-[#101010]

          text-white

          shadow-[0_40px_110px_rgba(0,0,0,0.20)]
        "
      >
        {/* ==========================================
            HEADER
        ========================================== */}

        <div
          className="
            flex
            h-[58px]
            items-center
            justify-between

            border-b
            border-white/10

            px-6

            md:h-[64px]
            md:px-7
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-medium
                tracking-[0.22em]
                text-white/40

                md:text-[11px]
              "
            >
              ADMIN DASHBOARD
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                text-[8px]
                tracking-[0.12em]
                text-white/30
              "
            >
              LIVE
            </span>

            <motion.div
              animate={{
                opacity: [1, 0.35, 1],
                scale: [1, 0.85, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-[8px]
                w-[8px]

                rounded-full

                bg-[#DE1334]
              "
            />
          </div>
        </div>

        {/* ==========================================
            CONTENT
        ========================================== */}

        <div
          className="
            grid
            grid-cols-[105px_1fr]

            md:grid-cols-[175px_1fr]
          "
        >
          {/* ==========================================
              SIDE MENU
          ========================================== */}

          <div
            className="
              border-r
              border-white/10

              p-3

              md:p-5
            "
          >
            {["Dashboard", "Products", "Members", "Orders", "Settings"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.1 + index * 0.06,
                    duration: 0.45,
                  }}
                  className={`
                  mb-2

                  rounded-[9px]

                  px-3
                  py-3

                  text-[8px]
                  font-medium

                  transition-all

                  md:px-4
                  md:py-3.5
                  md:text-[10px]

                  ${index === 0 ? "bg-white text-black" : "text-white/35"}
                `}
                >
                  {item}
                </motion.div>
              ),
            )}
          </div>

          {/* ==========================================
              BODY
          ========================================== */}

          <div
            className="
              p-4

              md:p-8
            "
          >
            {/* TOP NUMBER */}

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
                    text-[8px]
                    font-medium
                    tracking-[0.1em]
                    text-white/35

                    md:text-[10px]
                  "
                >
                  PRODUCTS
                </span>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15,
                  }}
                  className="
                    mt-1

                    text-[36px]
                    font-semibold

                    leading-none

                    tracking-[-0.055em]

                    md:mt-2
                    md:text-[56px]
                  "
                >
                  3,241
                </motion.p>
              </div>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  rounded-full

                  bg-[#DE1334]

                  px-4
                  py-2.5

                  text-[8px]
                  font-semibold

                  md:px-5
                  md:py-3
                  md:text-[9px]
                "
              >
                + ADD PRODUCT
              </motion.button>
            </div>

            {/* ==========================================
                STATS
            ========================================== */}

            <div
              className="
                mt-7

                grid
                grid-cols-3

                gap-2

                md:mt-9
                md:gap-3
              "
            >
              {[
                {
                  label: "MEMBERS",
                  value: "482",
                  change: "+18%",
                },
                {
                  label: "ORDERS",
                  value: "127",
                  change: "+32%",
                },
                {
                  label: "INQUIRY",
                  value: "38",
                  change: "+24%",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.55,
                  }}
                  className="
                    rounded-[13px]

                    bg-white/[0.06]

                    p-3

                    md:rounded-[15px]
                    md:p-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[6px]
                        font-medium
                        tracking-[0.08em]
                        text-white/30

                        md:text-[8px]
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        text-[6px]
                        font-semibold

                        text-[#DE1334]

                        md:text-[8px]
                      "
                    >
                      {item.change}
                    </span>
                  </div>

                  <p
                    className="
                      mt-2

                      text-[18px]
                      font-semibold

                      tracking-[-0.04em]

                      md:mt-3
                      md:text-[27px]
                    "
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ==========================================
                GROWTH CHART
            ========================================== */}

            <div
              className="
                mt-4

                rounded-[14px]

                bg-white/[0.05]

                p-4

                md:mt-5
                md:rounded-[16px]
                md:p-5
              "
            >
              {/* CHART HEADER */}

              <div
                className="
                  mb-4

                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[7px]
                      font-medium

                      tracking-[0.12em]

                      text-white/30

                      md:text-[9px]
                    "
                  >
                    GROWTH
                  </p>

                  <p
                    className="
                      mt-1

                      text-[10px]
                      font-semibold

                      md:text-[13px]
                    "
                  >
                    Monthly activity
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold

                      text-[#DE1334]

                      md:text-[12px]
                    "
                  >
                    +84%
                  </span>

                  <span
                    className="
                      text-[8px]

                      text-[#DE1334]
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* CHART */}

              <div
                className="
                  relative

                  h-[90px]

                  md:h-[125px]
                "
              >
                {/* GRID LINES */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    flex
                    flex-col
                    justify-between
                  "
                >
                  {[1, 2, 3, 4].map((line) => (
                    <div
                      key={line}
                      className="
                        h-px
                        w-full

                        bg-white/[0.06]
                      "
                    />
                  ))}
                </div>

                {/* BARS */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-full

                    items-end

                    gap-[5px]

                    md:gap-[8px]
                  "
                >
                  {chartData.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: `${height}%`,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.07,
                        duration: 0.75,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`
                        flex-1

                        rounded-t-[3px]

                        ${
                          index >= 8
                            ? "bg-[#DE1334]"
                            : index >= 6
                              ? "bg-white/65"
                              : "bg-white/25"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>

              {/* MONTH LABELS */}

              <div
                className="
                  mt-2

                  flex
                  justify-between

                  text-[6px]
                  text-white/20

                  md:text-[7px]
                "
              >
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
                <span>OCT</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==========================================
          FLOATING BADGE
      ========================================== */}
    </div>
  );
}

/* ============================================================
   03 SEO
============================================================ */

function SeoVisual() {
  return (
    <div
      className="
        relative
        flex
        h-[430px]
        w-full
        items-center
        justify-center

        md:h-[580px]

        lg:h-[700px]
      "
    >
      {/* BACKGROUND CIRCLE */}
      <div
        className="
          absolute

          h-[350px]
          w-[350px]

          rounded-full

          bg-white/55

          md:h-[520px]
          md:w-[520px]

          lg:h-[610px]
          lg:w-[610px]
        "
      />

      {/* NAVER SEARCH CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10

          w-[95%]
          max-w-[760px]

          rounded-[28px]

          bg-white

          p-5

          shadow-[0_40px_110px_rgba(0,0,0,0.13)]

          md:p-8
          lg:p-9
        "
      >
        {/* ==========================================
            TOP NAVER AREA
        ========================================== */}

        <div
          className="
            flex
            items-center
            gap-5

            border-b
            border-black/[0.06]

            pb-5

            md:gap-7
            md:pb-7
          "
        >
          {/* NAVER LOGO */}

          <div
            className="
              shrink-0

              text-[22px]
              font-black
              tracking-[-0.08em]

              text-[#03C75A]

              md:text-[29px]
            "
          >
            NAVER
          </div>

          {/* SEARCH BOX */}

          <div
            className="
              flex
              min-w-0
              flex-1
              items-center

              rounded-[8px]

              border-[2px]
              border-[#03C75A]

              bg-white

              px-4
              py-3

              shadow-[0_2px_10px_rgba(0,0,0,0.04)]

              md:px-6
              md:py-4
            "
          >
            <div
              className="
                min-w-0
                flex-1
              "
            >
              <SeoTypingText />
            </div>

            {/* NAVER SEARCH ICON */}

            <div
              className="
                ml-3
                flex
                h-[32px]
                w-[32px]
                shrink-0
                items-center
                justify-center

                md:h-[38px]
                md:w-[38px]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-[21px]
                  w-[21px]

                  md:h-[25px]
                  md:w-[25px]
                "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="#03C75A"
                  strokeWidth="2.4"
                />

                <path
                  d="M15.5 15.5L21 21"
                  stroke="#03C75A"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ==========================================
            SEARCH CATEGORY
        ========================================== */}

        <div
          className="
            mt-4
            flex
            items-center
            gap-5

            border-b
            border-black/[0.06]

            pb-4

            text-[9px]
            font-medium

            text-black/40

            md:mt-5
            md:gap-7
            md:text-[11px]
          "
        >
          <span
            className="
              relative
              font-semibold

              text-[#03C75A]

              after:absolute
              after:-bottom-[17px]
              after:left-0

              after:h-[2px]
              after:w-full

              after:bg-[#03C75A]
            "
          >
            통합검색
          </span>

          <span>VIEW</span>
          <span>이미지</span>
          <span>지식iN</span>
          <span>뉴스</span>
          <span>쇼핑</span>
        </div>

        {/* ==========================================
            RESULT INFO
        ========================================== */}

        <div
          className="
            mt-6

            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-[8px]
              font-medium
              tracking-[0.04em]

              text-black/35

              md:text-[10px]
            "
          >
            검색결과
          </p>

          <p
            className="
              text-[7px]
              text-black/25

              md:text-[9px]
            "
          >
            관련도순
          </p>
        </div>

        {/* ==========================================
            SEARCH RESULTS
        ========================================== */}

        <div
          className="
    mt-3

    overflow-hidden

    rounded-[16px]

    border
    border-black/[0.07]

    md:rounded-[18px]
  "
        >
          {searchResults.map((result, index) => (
            <motion.div
              key={result.url}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: index === 0 ? 1 : 0.62,
                y: 0,
              }}
              transition={{
                delay: 0.25 + index * 0.12,
                duration: 0.55,
              }}
              className={`
        relative

        px-4
        py-4

        md:px-6
        md:py-5

        ${
          index !== searchResults.length - 1
            ? "border-b border-black/[0.07]"
            : ""
        }

        ${index === 0 ? "bg-[#F8FFFA]" : "bg-white"}
      `}
            >
              {/* 사이트 정보 */}

              <div
                className="
          flex
          items-center
          gap-2
        "
              >
                <div
                  className={`
            flex
            h-[22px]
            w-[22px]
            items-center
            justify-center

            rounded-full

            text-[7px]
            font-black
            text-white

            md:h-[25px]
            md:w-[25px]
            md:text-[8px]

            ${index === 0 ? "bg-[#03C75A]" : "bg-[#222]"}
          `}
                >
                  {result.initial}
                </div>

                <div>
                  <p
                    className="
              text-[8px]
              font-medium

              text-black/55

              md:text-[10px]
            "
                  >
                    {result.site}
                  </p>

                  <span
                    className="
              text-[7px]

              text-black/30

              md:text-[8px]
            "
                  >
                    {result.url}
                  </span>
                </div>
              </div>

              {/* 검색 결과 제목 */}

              <p
                className="
          mt-3

          text-[15px]
          font-semibold

          leading-[1.4]
          tracking-[-0.035em]

          text-[#1E40AF]

          md:text-[19px]
        "
              >
                {result.title}
              </p>

              {/* 설명 */}

              <p
                className="
          mt-2

          max-w-[90%]

          text-[9px]

          leading-[1.7]

          text-black/45

          md:text-[11px]
        "
              >
                {result.description}
              </p>

              {/* 첫 번째 결과만 TOP */}

              {result.top && (
                <div
                  className="
            absolute
            right-4
            top-4

            rounded-full

            bg-[#03C75A]/10

            px-2.5
            py-1

            text-[7px]
            font-semibold

            text-[#03C75A]

            md:right-6
            md:top-5
            md:text-[8px]
          "
                >
                  TOP
                </div>
              )}
            </motion.div>
          ))}
        </div>
        {/* ==========================================
            BOTTOM KEYWORDS
        ========================================== */}

        <div
          className="
            mt-4

            flex
            flex-wrap
            gap-2
          "
        >
          {["홈페이지 제작", "웹 개발", "SEO", "브랜드 홈페이지"].map(
            (keyword) => (
              <span
                key={keyword}
                className="
                rounded-full

                bg-black/[0.04]

                px-3
                py-1.5

                text-[7px]
                font-medium

                text-black/40

                md:text-[8px]
              "
              >
                #{keyword}
              </span>
            ),
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   04 AUTOMATION
============================================================ */

function AutomationVisual() {
  return (
    <div
      className="
        relative
        flex
        h-[420px]
        w-full
        items-center
        justify-center

        md:h-[560px]

        lg:h-[690px]
      "
    >
      {/* 기존 뒤쪽 원 - 디자인 그대로, 크기만 확대 */}
      <div
        className="
          absolute

          h-[350px]
          w-[350px]

          rounded-full

          bg-white/45

          md:h-[540px]
          md:w-[540px]

          lg:h-[600px]
          lg:w-[600px]
        "
      />

      {/* 기존 자동화 영역 - 위치/디자인 그대로 */}
      <div
        className="
          relative
          z-10

          h-[400px]
          w-[96%]
          max-w-[760px]

          md:h-[530px]

          lg:h-[580px]
        "
      >
        <AutomationNode
          className="
            left-[2%]
            top-[38%]
          "
          label="문의"
          delay={0}
        />

        <AutomationNode
          className="
            left-[28%]
            top-[14%]
          "
          label="WEB FORM"
          delay={0.2}
        />

        <AutomationNode
          className="
            left-[45%]
            top-[42%]
          "
          label="AI"
          active
          delay={0.4}
        />

        <AutomationNode
          className="
            right-[3%]
            top-[13%]
          "
          label="자동 분류"
          delay={0.6}
        />

        <AutomationNode
          className="
            right-[6%]
            bottom-[12%]
          "
          label="DATABASE"
          delay={0.8}
        />

        <AutomationNode
          className="
            left-[22%]
            bottom-[8%]
          "
          label="ADMIN"
          delay={1}
        />

        {/* CONNECTIONS - 기존 디자인 그대로 */}

        <svg
          viewBox="0 0 650 480"
          preserveAspectRatio="none"
          className="
            absolute
            inset-0

            h-full
            w-full

            overflow-visible
          "
        >
          {[
            "M90 230 C150 230 170 120 230 120",
            "M275 135 C330 155 320 230 350 240",
            "M400 230 C470 215 470 120 535 120",
            "M390 270 C460 290 475 360 525 365",
            "M475 385 C395 420 285 430 230 390",
          ].map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="1.5"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENTS
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
      <span
        className="
          h-[5px]
          w-[5px]
          rounded-full
          bg-black/15
        "
      />

      <span
        className="
          h-[5px]
          w-[5px]
          rounded-full
          bg-black/15
        "
      />

      <span
        className="
          h-[5px]
          w-[5px]
          rounded-full
          bg-[#DE1334]
        "
      />
    </div>
  );
}

function SeoTypingText() {
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
  );
}

function AutomationNode({
  label,
  active = false,
  className,
  delay,
}: {
  label: string;
  active?: boolean;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      className={`
        absolute
        z-10

        flex
        h-[76px]
        min-w-[110px]

        items-center
        justify-center

        rounded-[18px]

        border

        px-5

        text-[17px]
        font-semibold

        shadow-[0_15px_45px_rgba(0,0,0,0.08)]

        ${
          active
            ? "border-[#DE1334] bg-[#DE1334] text-white"
            : "border-black/[0.08] bg-white text-black"
        }

        ${className}
      `}
    >
      {label}

      {active && (
        <motion.span
          animate={{
            scale: [1, 1.8, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            absolute
            -right-1
            -top-1

            h-[8px]
            w-[8px]

            rounded-full

            bg-[#DE1334]
          "
        />
      )}
    </motion.div>
  );
}
