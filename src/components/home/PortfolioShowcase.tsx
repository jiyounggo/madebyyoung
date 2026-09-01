"use client";

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
    title: "홍인글로벌",
    category: "CORPORATE WEBSITE",
    image: "/images/profile/work-01.jpg",
  },
  {
    title: "브랜드 홈페이지",
    category: "BRAND WEBSITE",
    image: "/images/profile/work-02.jpg",
  },
  {
    title: "카페24 쇼핑몰",
    category: "CAFE24 SHOP",
    image: "/images/profile/work-03.jpg",
  },
  {
    title: "병원 홈페이지",
    category: "CLINIC WEBSITE",
    image: "/images/profile/work-04.jpg",
  },
  {
    title: "쇼핑몰 프로젝트",
    category: "E-COMMERCE",
    image: "/images/profile/work-05.jpg",
  },
  {
    title: "기업 홈페이지",
    category: "CORPORATE WEBSITE",
    image: "/images/profile/work-06.jpg",
  },
  {
    title: "개인 브랜드",
    category: "PERSONAL BRAND",
    image: "/images/profile/work-07.jpg",
  },
  {
    title: "브랜드 프로젝트",
    category: "BRAND WEBSITE",
    image: "/images/profile/work-08.jpg",
  },
  {
    title: "웹 프로젝트",
    category: "WEB DEVELOPMENT",
    image: "/images/profile/work-09.jpg",
  },
  {
    title: "기업 프로젝트",
    category: "CORPORATE WEBSITE",
    image: "/images/profile/work-10.jpg",
  },
  {
    title: "쇼핑몰 프로젝트",
    category: "E-COMMERCE",
    image: "/images/profile/work-11.jpg",
  },
  {
    title: "웹사이트 프로젝트",
    category: "WEB DESIGN",
    image: "/images/profile/work-12.jpg",
  },
  {
    title: "브랜드 사이트",
    category: "BRAND WEBSITE",
    image: "/images/profile/work-13.jpg",
  },
  {
    title: "웹 프로젝트",
    category: "WEB DEVELOPMENT",
    image: "/images/profile/work-14.jpg",
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
   레퍼런스처럼 각 컬럼마다 높이를 조금씩 다르게
========================================================= */

const TOP_HEIGHTS = [
  "h-[270px] lg:h-[300px]",
  "h-[330px] lg:h-[380px]",
  "h-[270px] lg:h-[300px]",
  "h-[350px] lg:h-[390px]",
  "h-[275px] lg:h-[300px]",
  "h-[320px] lg:h-[360px]",
  "h-[285px] lg:h-[310px]",
];

const BOTTOM_HEIGHTS = [
  "h-[300px] lg:h-[330px]",
  "h-[260px] lg:h-[280px]",
  "h-[300px] lg:h-[330px]",
  "h-[250px] lg:h-[270px]",
  "h-[300px] lg:h-[330px]",
  "h-[270px] lg:h-[300px]",
  "h-[300px] lg:h-[320px]",
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
  if (!work) return null;

  return (
    <motion.div
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
      {/* IMAGE */}

      <img
        src={work.image}
        alt={work.title}
        draggable={false}
        className="
          absolute
          inset-0

          h-full
          w-full

          select-none
          object-cover
          object-top

          transition-transform
          duration-700

          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-[1.035]
        "
      />

      {/* DARK GRADIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-b
          from-black/0
          via-black/0
          to-black/75
        "
      />

      {/* HOVER OVERLAY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-black/0

          transition-colors
          duration-500

          group-hover:bg-black/[0.08]
        "
      />

      {/* TEXT */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-10

          w-full

          p-5
        "
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
    레퍼런스처럼 각 컬럼 시작 높이를 살짝 다르게
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
          <p
            className="
              mb-5

              text-[10px]
              font-bold

              tracking-[0.24em]

              text-[#de1334]
            "
          >
            SELECTED WORKS
          </p>

          <h3
            className="
              break-keep

              text-[38px]
              font-semibold

              leading-[1.08]
              tracking-[-0.06em]

              sm:text-[50px]
              lg:text-[62px]
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

              text-white/40

              sm:text-[15px]
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
        {/* LEFT FADE */}

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

        {/* RIGHT FADE */}

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
            pauseOnMouseEnter: false,
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
