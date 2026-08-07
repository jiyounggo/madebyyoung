"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  BadgeCheck,
  CircleDollarSign,
  Headphones,
  LayoutDashboard,
} from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const POINTS = [
  {
    number: "01",
    title: "거품을 뺀 합리적인 가격",
    keyword: "합리적인 가격",
    description:
      "불필요한 기능과 비용을 더하지 않습니다. 필요한 범위를 먼저 정리하고 그에 맞는 합리적인 비용으로 제작합니다.",
    image: "/images/why/price.jpg",
    icon: CircleDollarSign,
    background: "#fff1f3",
  },
  {
    number: "02",
    title: "처음부터 끝까지 직접",
    keyword: "1:1 직접 제작",
    description:
      "상담부터 기획, 디자인, 개발, 오픈까지 담당자가 바뀌지 않습니다. 모든 과정을 직접 확인하고 책임집니다.",
    image: "/images/why/direct.jpg",
    icon: BadgeCheck,
    background: "#f1f1f1",
  },
  {
    number: "03",
    title: "꼼꼼한 피드백과 수정",
    keyword: "꼼꼼한 수정",
    description:
      "작은 부분도 함께 확인하고 조율합니다. 만족할 수 있는 결과에 가까워질 때까지 꼼꼼하게 피드백을 반영합니다.",
    image: "/images/why/feedback.jpg",
    icon: Headphones,
    background: "#fff5f6",
  },
  {
    number: "04",
    title: "누구나 쉬운 관리자",
    keyword: "쉬운 운영",
    description:
      "상품, 게시글, 이미지 등 필요한 콘텐츠를 개발자 없이도 쉽게 수정하고 관리할 수 있도록 제작합니다.",
    image: "/images/why/admin.jpg",
    icon: LayoutDashboard,
    background: "#f3f3f3",
  },
];

type Point = (typeof POINTS)[number];

type FeatureItemProps = {
  point: Point;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

function FeatureItem({ point, index, setActiveIndex }: FeatureItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(itemRef, {
    amount: 0.5,
  });

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  /*
   * 화면 아래에서 들어올 때 작게
   * 가운데에서 가장 크게
   * 위로 빠질 때 다시 살짝 작게
   */
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
        {/* ==========================================
            IMAGE
        ========================================== */}

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
          {/* fallback 배경 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: point.background,
            }}
          />

          {/* 실제 사진 */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: `url(${point.image})`,
            }}
          />

          {/* 사진이 없을 때도 디자인이 보이게 */}
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

          {/* 번호 */}

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

        {/* ==========================================
            TEXT
        ========================================== */}

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

          <p
            className="
              mb-3

              text-[13px]
              font-bold

              text-[#de1334]
            "
          >
            {point.keyword}
          </p>

          {/* TITLE */}

          <h3
            className="
              max-w-[450px]

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
              max-w-[480px]

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
        {/* ==========================================
            HEADER
        ========================================== */}

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

              text-[#de1334]
            "
          >
            WHY MADE BY YOUNG
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
            필요한 것은 더하고,
            <br />
            <span className="text-[#de1334]">불필요한 것은 덜었습니다.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[560px]

              break-keep

              text-[15px]
              leading-[1.8]

              text-[#666]

              md:text-[16px]
            "
          >
            홈페이지를 만드는 과정부터 실제 운영하는 순간까지 생각합니다.
          </p>
        </div>

        {/* ==========================================
            MAIN
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-[120px_minmax(0,1fr)]
            lg:gap-12
          "
        >
          {/* ==========================================
              LEFT NUMBERS - DESKTOP
          ========================================== */}

          <aside
            className="
              hidden

              lg:block
            "
          >
            <div
              className="
                sticky
                top-[150px]
              "
            >
              {/* LINE */}

              <div
                className="
                  relative
                  ml-[27px]
                "
              >
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
                    height: `${(activeIndex / 3) * 100}%`,
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

          {/* ==========================================
              MOBILE NUMBERS
          ========================================== */}

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

          {/* ==========================================
              RIGHT CONTENT
          ========================================== */}

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
