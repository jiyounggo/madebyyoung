"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

/* =========================================================
   WEBSITE TYPES
========================================================= */

const POINTS = [
  {
    number: "01",
    title: "브랜드 · 기업 홈페이지",
    keyword: "CORPORATE & BRAND",
    description:
      "회사와 브랜드의 강점을 명확하게 보여주는 홈페이지를 제작합니다. 소개부터 서비스, 포트폴리오, 문의까지 목적에 맞게 구성합니다.",
    image: "/images/why/company.jpg",
    icon: Building2,
    background: "#f1f1f1",
  },

  {
    number: "02",
    title: "카페24 쇼핑몰",
    keyword: "CAFE24 SHOP",
    description:
      "브랜드에 맞는 쇼핑몰 디자인부터 PG 신청, 배송 · 운영 설정까지 오픈에 필요한 과정을 함께 안내합니다.",
    image: "/images/why/shop.jpg",
    icon: ShoppingBag,
    background: "#fff1f3",
  },

  {
    number: "03",
    title: "병원 · 전문 서비스 홈페이지",
    keyword: "BUSINESS WEBSITE",
    description:
      "병원, 법률, 컨설팅 등 신뢰가 중요한 업종에 맞춰 정보 전달과 문의 전환을 고려한 홈페이지를 제작합니다.",
    image: "/images/why/business.jpg",
    icon: BriefcaseBusiness,
    background: "#f3f3f3",
  },

  {
    number: "04",
    title: "포트폴리오 · 개인 브랜드",
    keyword: "PERSONAL BRAND",
    description:
      "프리랜서, 크리에이터, 작가 등 나만의 작업과 이야기를 효과적으로 보여줄 수 있는 웹사이트를 제작합니다.",
    image: "/images/why/portfolio.jpg",
    icon: UserRound,
    background: "#fff5f6",
  },
];

type Point = (typeof POINTS)[number];

type FeatureItemProps = {
  point: Point;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

/* =========================================================
   FEATURE ITEM
========================================================= */

function FeatureItem({ point, index, setActiveIndex }: FeatureItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(itemRef, {
    amount: 0.5,
  });

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  /* 이미지 스크롤 효과 */
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.88, 0.95, 1.04, 1, 0.94],
  );

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.45, 1, 1, 0.55],
  );

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const Icon = point.icon;

  return (
    <article
      ref={itemRef}
      className="
        relative

        border-b
        border-black/[0.08]

        py-16

        last:border-b-0

        md:py-20

        lg:min-h-[650px]
        lg:py-24
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-9

          lg:grid-cols-[1.05fr_0.95fr]
          lg:items-center
          lg:gap-14
        "
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <motion.div
          style={{
            scale: imageScale,
            y: imageY,
            opacity: imageOpacity,
          }}
          className="
            relative

            h-[330px]
            w-full

            overflow-hidden

            rounded-[30px]

            sm:h-[390px]

            lg:h-[450px]
            lg:rounded-[36px]
          "
        >
          {/* fallback background */}

          <div
            className="absolute inset-0"
            style={{
              backgroundColor: point.background,
            }}
          />

          {/* image */}

          <div
            className="
              absolute
              inset-0

              bg-cover
              bg-center
              bg-no-repeat

              transition-transform
              duration-700
            "
            style={{
              backgroundImage: `url(${point.image})`,
            }}
          />

          {/* overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-t
              from-black/[0.20]
              via-transparent
              to-transparent
            "
          />

          {/* CATEGORY BADGE */}

          <div
            className="
              absolute
              left-5
              top-5

              flex
              items-center
              gap-2

              rounded-full

              border
              border-white/20

              bg-black/20

              px-3
              py-2

              text-white

              backdrop-blur-md

              lg:left-6
              lg:top-6
            "
          >
            <Icon size={14} strokeWidth={1.9} />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.07em]

                sm:text-[11px]
              "
            >
              {point.keyword}
            </span>
          </div>

          {/* NUMBER */}

          <div
            className="
              absolute
              bottom-5
              right-6
            "
          >
            <span
              className="
                text-[54px]
                font-black
                tracking-[-0.08em]

                text-white

                drop-shadow-[0_3px_12px_rgba(0,0,0,0.14)]

                lg:text-[66px]
              "
            >
              {point.number}
            </span>
          </div>
        </motion.div>

        {/* ==================================================
            TEXT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            lg:px-2
          "
        >
          {/* KEYWORD */}

          <div
            className="
              mb-4

              flex
              items-center
              gap-2
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-full

                bg-[#fff1f3]

                text-[#de1334]
              "
            >
              <Icon size={15} strokeWidth={1.9} />
            </div>

            <p
              className="
                text-[12px]
                font-bold

                tracking-[0.05em]

                text-[#de1334]

                sm:text-[13px]
              "
            >
              {point.keyword}
            </p>
          </div>

          {/* TITLE */}

          <h3
            className="
              max-w-[470px]

              break-keep

              text-[30px]
              font-bold
              leading-[1.2]
              tracking-[-0.05em]

              text-[#171717]

              sm:text-[35px]

              lg:text-[39px]
            "
          >
            {point.title}
          </h3>

          {/* DESCRIPTION */}

          <div
            className="
              mt-6
              max-w-[500px]

              rounded-[20px]

              border
              border-black/[0.06]

              bg-white

              px-5
              py-5

              shadow-[0_8px_30px_rgba(0,0,0,0.035)]

              lg:px-6
              lg:py-6
            "
          >
            <p
              className="
                break-keep

                text-[14px]
                font-medium
                leading-[1.85]

                text-[#555]

                sm:text-[15px]

                lg:text-[16px]
              "
            >
              {point.description}
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

/* =========================================================
   SECTION
========================================================= */

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
        relative

        bg-[#f7f7f7]

        px-5
        py-24

        md:px-8
        md:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-16

            text-center

            md:mb-20
          "
        >
          <p
            className="
              mb-4

              text-[13px]
              font-bold
              tracking-[0.07em]

              text-[#de1334]
            "
          >
            WHAT WE CREATE
          </p>

          <h2
            className="
              break-keep

              text-[38px]
              font-bold
              leading-[1.1]
              tracking-[-0.055em]

              text-[#171717]

              sm:text-[45px]
              md:text-[52px]
            "
          >
            어떤 홈페이지가 필요하세요?
            <br />
            <span className="text-[#de1334]">목적에 맞게 만들어드립니다.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5

              max-w-[610px]

              break-keep

              text-[15px]
              leading-[1.8]

              text-[#666]

              md:text-[16px]
            "
          >
            기업부터 쇼핑몰, 전문 서비스, 개인 브랜드까지
            <br className="hidden sm:block" />
            업종과 목적에 맞는 홈페이지를 제작합니다.
          </p>
        </div>

        {/* ==================================================
            MAIN
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-[120px_minmax(0,1fr)]
            lg:gap-12
          "
        >
          {/* ==================================================
              LEFT PROGRESS
          ================================================== */}

          <aside className="hidden lg:block">
            <div
              className="
                sticky
                top-[150px]
              "
            >
              <div
                className="
                  relative
                  ml-[27px]
                "
              >
                {/* BASE LINE */}

                <div
                  className="
                    absolute
                    bottom-[25px]
                    left-[1px]
                    top-[25px]

                    w-[1px]

                    bg-black/[0.1]
                  "
                />

                {/* ACTIVE PROGRESS */}

                <motion.div
                  animate={{
                    height: `${(activeIndex / (POINTS.length - 1)) * 100}%`,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-[1px]
                    top-[25px]

                    w-[2px]

                    bg-[#de1334]
                  "
                />

                {/* NUMBERS */}

                <div className="relative space-y-8">
                  {POINTS.map((point, index) => {
                    const active = activeIndex === index;
                    const passed = index <= activeIndex;

                    return (
                      <div
                        key={point.number}
                        className="
                          relative

                          flex
                          h-[52px]
                          items-center
                          gap-5
                        "
                      >
                        {/* DOT */}

                        <motion.div
                          animate={{
                            scale: active ? 1.25 : 1,
                            backgroundColor: passed ? "#de1334" : "#d7d7d7",
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="
                            relative
                            z-10

                            h-[7px]
                            w-[7px]

                            rounded-full

                            ring-[6px]
                            ring-[#f7f7f7]
                          "
                        />

                        {/* NUMBER */}

                        <motion.span
                          animate={{
                            color: active
                              ? "#de1334"
                              : passed
                                ? "#333333"
                                : "#b5b5b5",

                            scale: active ? 1.08 : 1,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="
                            origin-left

                            text-[26px]
                            font-bold
                            tracking-[-0.06em]
                          "
                        >
                          {point.number}
                        </motion.span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* ==================================================
              MOBILE PROGRESS
          ================================================== */}

          <div
            className="
              sticky
              top-0
              z-30

              -mx-5
              mb-5

              flex
              items-center
              justify-center
              gap-6

              border-y
              border-black/[0.06]

              bg-[#f7f7f7]/95

              px-5
              py-4

              backdrop-blur-md

              lg:hidden
            "
          >
            {POINTS.map((point, index) => (
              <motion.span
                key={point.number}
                animate={{
                  color: activeIndex === index ? "#de1334" : "#b0b0b0",

                  scale: activeIndex === index ? 1.15 : 1,
                }}
                className="
                  text-[15px]
                  font-bold
                "
              >
                {point.number}
              </motion.span>
            ))}
          </div>

          {/* ==================================================
              CONTENT
          ================================================== */}

          <div>
            {POINTS.map((point, index) => (
              <FeatureItem
                key={point.number}
                point={point}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
