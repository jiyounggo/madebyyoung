"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

/* =========================================================
   PORTFOLIO
========================================================= */

const PORTFOLIO = [
  {
    title: "감각적인 스킨케어 브랜드 웹사이트",
    category: "Beauty & Skincare",
    image: "/images/profile/work-01.jpg",
  },
  {
    title: "남성 컨템포러리 패션 브랜드 웹사이트",
    category: "Menswear",
    image: "/images/profile/work-02.jpg",
  },
  {
    title: "키치한 무드의 여성 패션 쇼핑몰",
    category: "CAFE24 SHOP",
    image: "/images/profile/work-03.jpg",
  },
  {
    title: "신뢰감을 담은 프리미엄 클리닉 웹사이트",
    category: "CLINIC WEBSITE",
    image: "/images/profile/work-04.jpg",
  },
  {
    title: "제주의 감성을 담은 게스트하우스 예약 웹사이트",
    category: "BOOKING WEBSITE",
    image: "/images/profile/work-05.jpg",
  },
  {
    title: "신뢰감을 강조한 이사 서비스 웹사이트",
    category: "MOVING SERVICE",
    image: "/images/profile/work-06.jpg",
  },
  {
    title: "전문성과 신뢰를 담은 법률 서비스 웹사이트",
    category: "LEGAL WEBSITE",
    image: "/images/profile/work-07.jpg",
  },
  {
    title: "안전과 기술력을 강조한 타이어 점검 웹사이트",
    category: "AUTOMOTIVE SERVICE",
    image: "/images/profile/work-08.jpg",
  },
  {
    title: "브랜드의 감성을 담은 해파람 공식 웹사이트",
    category: "BRAND WEBSITE",
    image: "/images/profile/work-09.jpg",
  },
  {
    title: "인재와 기업을 연결하는 채용 플랫폼 웹사이트",
    category: "RECRUITMENT PLATFORM",
    image: "/images/profile/work-10.jpg",
  },
  {
    title: "현장 전문성을 강조한 삼손굴절스카이 웹사이트",
    category: "INDUSTRIAL SERVICES",
    image: "/images/profile/work-11.jpg",
  },
  {
    title: "전문성과 신뢰를 강조한 회계감리 법률 웹사이트",
    category: "LEGAL WEBSITE",
    image: "/images/profile/work-12.jpg",
  },
  {
    title: "쾌적한 공간의 가치를 전하는 조은바람 웹사이트",
    category: "CORPORATE WEBSITE",
    image: "/images/profile/work-13.jpg",
  },
  {
    title: "세련된 감각으로 완성한 청담맥의원 리뉴얼",
    category: "CLINIC WEBSITE",
    image: "/images/profile/work-14.jpg",
  },
  {
    title: "신뢰와 전문성을 담은 중앙신용정보 웹사이트",
    category: "FINANCIAL SERVICES",
    image: "/images/profile/work-15.jpg",
  },
  {
    title: "맞춤형 기능으로 완성한 홍인글로벌 쇼핑몰",
    category: "CUSTOM E-COMMERCE",
    image: "/images/profile/work-16.png",
  },
];

/* =========================================================
   2개씩 한 묶음
========================================================= */

const PORTFOLIO_GROUPS = Array.from(
  { length: Math.ceil(PORTFOLIO.length / 2) },
  (_, index) => ({
    top: PORTFOLIO[index * 2],
    bottom: PORTFOLIO[index * 2 + 1],
  }),
);

/* =========================================================
   CARD HEIGHT
   기존 디자인 그대로
========================================================= */

const TOP_HEIGHTS = [
  "h-[370px] lg:h-[400px]",
  "h-[430px] lg:h-[480px]",
  "h-[370px] lg:h-[500px]",
  "h-[450px] lg:h-[490px]",
  "h-[375px] lg:h-[400px]",
  "h-[420px] lg:h-[460px]",
  "h-[385px] lg:h-[410px]",
];

const BOTTOM_HEIGHTS = [
  "h-[400px] lg:h-[430px]",
  "h-[360px] lg:h-[380px]",
  "h-[400px] lg:h-[430px]",
  "h-[350px] lg:h-[370px]",
  "h-[400px] lg:h-[430px]",
  "h-[370px] lg:h-[500px]",
  "h-[400px] lg:h-[420px]",
];

/* =========================================================
   CARD
========================================================= */

function PortfolioCard({
  work,
  heightClass,
}: {
  work?: (typeof PORTFOLIO)[number];
  heightClass: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  if (!work) return null;

  /* =========================================================
     이미지 실제 높이 계산
  ========================================================= */

  const calculateScroll = () => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    const cardHeight = card.clientHeight;
    const imageHeight = image.clientHeight;

    const maxScroll = Math.max(imageHeight - cardHeight, 0);

    /*
      px / second

      숫자가 작을수록 천천히
      숫자가 클수록 빨리 내려감

      110 ~ 140 정도 추천
    */
    const speed = 120;

    const duration = maxScroll / speed;

    setScrollOffset(maxScroll);

    setScrollDuration(Math.max(3, Math.min(duration, 18)));
  };

  /* =========================================================
     HOVER
  ========================================================= */

  const handleMouseEnter = () => {
    setIsHovered(true);

    requestAnimationFrame(() => {
      calculateScroll();
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScrollOffset(0);
    setScrollDuration(1.2);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 0.985,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-[14px]
        bg-[#151515]

        ${heightClass}
      `}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
        "
      >
        <img
          ref={imageRef}
          src={work.image}
          alt={work.title}
          draggable={false}
          onLoad={() => {
            if (isHovered) {
              calculateScroll();
            }
          }}
          style={{
            transform: `translate3d(0, -${scrollOffset}px, 0)`,
            transitionDuration: `${scrollDuration}s`,
            willChange: "transform",
          }}
          className="
            absolute
            left-0
            top-0

            block
            h-auto
            w-full

            select-none

            transition-transform
            ease-linear
          "
        />
      </div>

      {/* =====================================================
          DARK GRADIENT
      ===================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[2]

          bg-gradient-to-b
          from-black/0
          via-black/0
          to-black/75

          transition-opacity
          duration-500

          ${isHovered ? "opacity-20" : "opacity-100"}
        `}
      />

      {/* =====================================================
          HOVER OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]

          bg-black/0

          transition-colors
          duration-500

          group-hover:bg-black/[0.02]
        "
      />

      {/* =====================================================
          TEXT
      ===================================================== */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          z-10

          w-full

          p-5

          transition-all
          duration-300

          ${isHovered ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <p
          className="
            mb-1

            text-[8px]
            font-semibold

            tracking-[0.12em]

            text-white/50

            opacity-0
            transition-all
            duration-300

            group-hover:opacity-100
          "
        >
          {work.category}
        </p>

        <h4
          className="
    font-gmarket

    text-[14px]
    font-bold

    tracking-[-0.035em]

    text-white

    sm:text-[15px]
    lg:text-[16px]
  "
        >
          {work.title}
        </h4>
      </div>

      {/* =====================================================
          VIEW INDICATOR
      ===================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          right-4
          top-4
          z-20

          flex
          items-center
          gap-2

          rounded-full
          bg-black/50

          px-3
          py-2

          text-[8px]
          font-semibold

          tracking-[0.12em]
          text-white

          backdrop-blur-md

          transition-all
          duration-300

          ${
            isHovered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }
        `}
      >
        <span
          className="
            block
            h-[5px]
            w-[5px]
            rounded-full
            bg-white
          "
        />
        SCROLLING
      </div>
    </motion.div>
  );
}

/* =========================================================
   COLUMN
========================================================= */

function PortfolioColumn({
  group,
  index,
}: {
  group: (typeof PORTFOLIO_GROUPS)[number];
  index: number;
}) {
  /*
    기존처럼 각 컬럼 시작 높이를 살짝 다르게
  */

  const offsets = [
    "pt-[40px]",
    "pt-0",
    "pt-[35px]",
    "pt-0",
    "pt-[35px]",
    "pt-0",
    "pt-[40px]",
  ];

  return (
    <div
      className={`
        flex
        w-full
        flex-col
        gap-4

        ${offsets[index % offsets.length]}
      `}
    >
      <PortfolioCard
        work={group.top}
        heightClass={TOP_HEIGHTS[index % TOP_HEIGHTS.length]}
      />

      <PortfolioCard
        work={group.bottom}
        heightClass={BOTTOM_HEIGHTS[index % BOTTOM_HEIGHTS.length]}
      />
    </div>
  );
}

/* =========================================================
   SHOWCASE
========================================================= */

export default function PortfolioShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black

        py-24
        text-white

        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          TITLE
      ===================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          mb-16

          max-w-[1600px]

          px-6

          sm:px-10

          lg:mb-20
          lg:px-[clamp(32px,4vw,64px)]
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
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            max-w-[1000px]
            text-center
          "
        >
          <h3
            className="
    font-gmarket
    break-keep

    text-[38px]
    font-bold

    leading-[1.25]
    tracking-[-0.045em]

    sm:text-[50px]
    lg:text-[60px]
  "
          >
            MADE BY YOUNG과 함께한
            <br />
            <span className="text-[#de1334]">웹의 순간들.</span>
          </h3>

          <p
            className="
              mx-auto
              mt-7
              max-w-[620px]
              break-keep
              text-[13px]
              font-medium

              leading-[1.8]
          

              sm:text-[20px]
            "
          >
            브랜드의 규모와 분야에 관계없이
            <br className="hidden sm:block" />각 브랜드에 어울리는 경험을 웹으로
            구현합니다.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          AUTO SLIDER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
          relative
          w-full
        "
      >
        {/* =====================================================
            LEFT FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-30

            hidden
            w-[100px]

            bg-gradient-to-r
            from-black
            to-transparent

            lg:block
          "
        />

        {/* =====================================================
            RIGHT FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            z-30

            hidden
            w-[100px]

            bg-gradient-to-l
            from-black
            to-transparent

            lg:block
          "
        />

        {/* =====================================================
            SWIPER
        ===================================================== */}

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,

            /*
              포트폴리오에 마우스를 올리면
              가로 자동 슬라이드 멈춤
            */
            pauseOnMouseEnter: true,
          }}
          speed={7000}
          allowTouchMove
          grabCursor
          slidesPerView="auto"
          spaceBetween={16}
          onSwiper={(swiper) => {
            swiper.wrapperEl.style.transitionTimingFunction = "linear";
          }}
          onSetTransition={(swiper) => {
            swiper.wrapperEl.style.transitionTimingFunction = "linear";
          }}
          className="
            w-full
            overflow-visible
          "
        >
          {PORTFOLIO_GROUPS.map((group, index) => (
            <SwiperSlide
              key={index}
              className="
                  !w-[245px]

                  sm:!w-[275px]

                  lg:!w-[300px]

                  xl:!w-[320px]
                "
            >
              <PortfolioColumn group={group} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* =====================================================
          BOTTOM TEXT
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-14

          flex
          max-w-[1600px]

          items-center
          justify-between

          px-6

          text-[9px]
          font-medium

          tracking-[0.12em]

          text-white/25

          sm:px-10

          lg:px-[clamp(32px,4vw,64px)]
        "
      >
        <span>MADE BY YOUNG</span>

        <span>WEB DESIGN · DEVELOPMENT</span>
      </div>
    </section>
  );
}
