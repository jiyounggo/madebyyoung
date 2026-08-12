"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  Lightbulb,
  MessageCircleMore,
  MonitorSmartphone,
  Search,
  Sparkles,
} from "lucide-react";

type IdeaSectionProps = {
  progress?: MotionValue<number>;
};

export default function IdeaSection({ progress }: IdeaSectionProps) {
  const fallbackProgress = useMotionValue(0);
  const safeProgress = progress ?? fallbackProgress;

  const y = useTransform(safeProgress, [0.62, 1], ["100%", "0%"]);

  const scale = useTransform(safeProgress, [0.62, 1], [0.98, 1]);

  return (
    <div className="bg-[#fff]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]

          px-5
          py-12

          sm:px-7

          md:px-10
          md:py-34
        "
      >
        {/* ==================================================
            TITLE
        ================================================== */}

        <div
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          <h2
            className="
              break-keep

              text-[38px]
              font-semibold
              leading-[1.1]
              tracking-[-0.055em]

              text-[#171717]

              sm:text-[48px]
              md:text-[60px]
            "
          >
            나만의 아이디어를
            <br />
            <span className="text-[#de1334]">실제 웹으로.</span>
          </h2>
        </div>

        {/* ==================================================
            CONVERSATION SCENE
        ================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-10

            w-full
            max-w-[940px]

            overflow-hidden

            rounded-[32px]

            border
            border-black/[0.06]

            bg-[#fafafa]

            px-5
            py-8

            sm:px-7

            md:mt-12
            md:rounded-[38px]
            md:px-10
            md:py-10
          "
        >
          {/* 배경 장식 */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24

              h-[260px]
              w-[260px]

              rounded-full

              bg-[#de1334]/[0.035]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20

              h-[240px]
              w-[240px]

              rounded-full

              bg-[#de1334]/[0.025]
            "
          />

          {/* ================================
              CUSTOMER 01
          ================================= */}

          <div
            className="
              relative
              z-10

              flex
              items-end
              gap-3

              md:gap-5
            "
          >
            <div
              className="
                relative

                h-[72px]
                w-[72px]
                shrink-0

                overflow-hidden
                rounded-full

                bg-[#efefef]

                md:h-[92px]
                md:w-[92px]
              "
            >
              <Image
                src="/images/customer.png"
                alt="아이디어를 고민하는 고객"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>

            <div
              className="
                relative

                max-w-[580px]

                rounded-[24px]
                rounded-bl-[6px]

                bg-white

                px-5
                py-4

                shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                md:px-7
                md:py-5
              "
            >
              <p
                className="
                  break-keep

                  text-[18px]
                  font-semibold

                  leading-[1.55]
                  tracking-[-0.035em]

                  text-[#1d1d1d]

                  md:text-[21px]
                "
              >
                이거 만들면 진짜 대박 날 것 같은데...
              </p>

              <p
                className="
                  mt-1.5

                  break-keep

                  text-[15px]
                  leading-[1.7]

                  text-[#707070]

                  md:text-[16px]
                "
              >
                아이디어만 떠올랐지 어디서부터 만들어야 할지 잘 모르겠어요ㅠㅠ
              </p>

              <span
                className="
                  absolute
                  -left-[7px]
                  bottom-4

                  h-[15px]
                  w-[15px]

                  rotate-45

                  bg-white
                "
              />
            </div>
          </div>

          {/* ================================
              YOUNG 01
          ================================= */}

          <div
            className="
              relative
              z-10

              mt-5

              flex
              items-end
              justify-end
              gap-3

              md:mt-6
              md:gap-5
            "
          >
            <div
              className="
                relative

                max-w-[600px]

                rounded-[24px]
                rounded-br-[6px]

                bg-[#de1334]

                px-5
                py-4

                shadow-[0_12px_30px_rgba(222,19,52,0.14)]

                md:px-7
                md:py-5
              "
            >
              <p
                className="
                  break-keep

                  text-[17px]
                  font-semibold

                  leading-[1.6]
                  tracking-[-0.03em]

                  text-white

                  md:text-[20px]
                "
              >
                그 단계부터 같이 시작하면 돼요.
              </p>

              <p
                className="
                  mt-1.5

                  break-keep

                  text-[15px]
                  leading-[1.75]

                  text-white/80

                  md:text-[16px]
                "
              >
                먼저 아이디어가 어떤 문제를 해결하는지, 실제로 어떤 서비스가
                되면 좋을지부터 함께 이야기해봐요.
              </p>

              <span
                className="
                  absolute
                  -right-[7px]
                  bottom-4

                  h-[15px]
                  w-[15px]

                  rotate-45

                  bg-[#de1334]
                "
              />
            </div>

            <div
              className="
                relative

                h-[72px]
                w-[72px]
                shrink-0

                overflow-hidden
                rounded-full

                bg-[#fff1f3]

                md:h-[92px]
                md:w-[92px]
              "
            >
              <Image
                src="/images/young.png"
                alt="MADE BY YOUNG"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
          </div>

          {/* ================================
              CUSTOMER 02
          ================================= */}

          <div
            className="
              relative
              z-10

              mt-5

              flex
              items-end
              gap-3

              md:mt-6
              md:gap-5
            "
          >
            <div
              className="
                relative

                h-[72px]
                w-[72px]
                shrink-0

                overflow-hidden
                rounded-full

                bg-[#efefef]

                md:h-[92px]
                md:w-[92px]
              "
            >
              <Image
                src="/images/customer.png"
                alt="아이디어를 고민하는 고객"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>

            <div
              className="
                relative

                max-w-[600px]

                rounded-[24px]
                rounded-bl-[6px]

                bg-white

                px-5
                py-4

                shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                md:px-7
                md:py-5
              "
            >
              <p
                className="
                  break-keep

                  text-[17px]
                  font-semibold

                  leading-[1.6]
                  tracking-[-0.03em]

                  text-[#222]

                  md:text-[19px]
                "
              >
                근데 이 아이디어가 진짜 괜찮은지도 모르겠고...
              </p>

              <p
                className="
                  mt-1.5

                  break-keep

                  text-[15px]
                  leading-[1.7]

                  text-[#707070]

                  md:text-[16px]
                "
              >
                어떤 기능이 필요한지, 화면은 어떻게 구성해야 하는지도 전혀
                모르겠어요.
              </p>

              <span
                className="
                  absolute
                  -left-[7px]
                  bottom-4

                  h-[15px]
                  w-[15px]

                  rotate-45

                  bg-white
                "
              />
            </div>
          </div>

          {/* ================================
              YOUNG 02
          ================================= */}

          <div
            className="
              relative
              z-10

              mt-5

              flex
              items-end
              justify-end
              gap-3

              md:mt-6
              md:gap-5
            "
          >
            <div
              className="
                relative

                max-w-[630px]

                rounded-[24px]
                rounded-br-[6px]

                border
                border-[#de1334]/15

                bg-[#fff5f6]

                px-5
                py-4

                md:px-7
                md:py-5
              "
            >
              <div
                className="
                  mb-2.5

                  flex
                  items-center
                  gap-2

                  text-[#de1334]
                "
              >
                <Sparkles size={18} strokeWidth={1.8} />

                <span
                  className="
                    text-[14px]
                    font-semibold
                  "
                >
                  바로 그 부분을 같이 기획합니다.
                </span>
              </div>

              <p
                className="
                  break-keep

                  text-[16px]
                  font-medium

                  leading-[1.75]
                  tracking-[-0.025em]

                  text-[#333]

                  md:text-[18px]
                "
              >
                아이디어의 가능성부터 필요한 기능, 사용자 흐름과 화면 구성까지
                하나씩 정리해서 실제 만들 수 있는 서비스의 형태로
                구체화해드려요.
              </p>

              <span
                className="
                  absolute
                  -right-[7px]
                  bottom-4

                  h-[15px]
                  w-[15px]

                  rotate-45

                  border-r
                  border-t
                  border-[#de1334]/15

                  bg-[#fff5f6]
                "
              />
            </div>

            <div
              className="
                relative

                h-[72px]
                w-[72px]
                shrink-0

                overflow-hidden
                rounded-full

                bg-[#fff1f3]

                md:h-[92px]
                md:w-[92px]
              "
            >
              <Image
                src="/images/young.png"
                alt="MADE BY YOUNG"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ==================================================
            PROCESS TITLE
        ================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[1000px]

            md:mt-14
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-5
            "
          >
            <div></div>

            <div
              className="
                hidden

                h-10
                w-10
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#fff1f3]

                text-[#de1334]

                sm:flex
              "
            >
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* ==================================================
            PROCESS BOARD
        ================================================== */}

        <div
          className="
            mx-auto
            mt-7

            grid
            w-full
            max-w-[1000px]

            grid-cols-1

            overflow-hidden

            rounded-[30px]

            border
            border-black/[0.07]

            bg-white

            md:grid-cols-3
          "
        >
          {/* ==========================================
              01 IDEA CHECK
          ========================================== */}

          <div
            className="
              relative

              p-7

              md:p-8
            "
          >
            <div
              className="
                mb-6

                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-[16px]

                bg-[#fff1f3]

                text-[#de1334]
              "
            >
              <Search size={23} strokeWidth={1.7} />
            </div>

            <h3
              className="
                break-keep

                text-[22px]
                font-semibold

                leading-[1.4]
                tracking-[-0.04em]

                text-[#191919]

                md:text-[24px]
              "
            >
              이 아이디어,
              <br />
              어떻게 만들면 좋을까?
            </h3>

            <p
              className="
                mt-4

                break-keep

                text-[14px]
                leading-[1.8]

                text-[#707070]

                md:text-[15px]
              "
            >
              무엇을 위한 아이디어인지, 누구에게 필요한 서비스인지부터 살펴보며
              방향을 함께 정리합니다.
            </p>

            <div
              className="
                absolute
                bottom-0
                left-7
                right-7

                h-px

                bg-black/[0.06]

                md:bottom-7
                md:left-auto
                md:right-0
                md:top-7
                md:h-auto
                md:w-px
              "
            />
          </div>

          {/* ==========================================
              02 PLANNING
          ========================================== */}

          <div
            className="
              relative

              p-7

              md:p-8
            "
          >
            <div
              className="
                mb-6

                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-[16px]

                bg-[#fff1f3]

                text-[#de1334]
              "
            >
              <Lightbulb size={23} strokeWidth={1.7} />
            </div>

            <h3
              className="
                break-keep

                text-[22px]
                font-semibold

                leading-[1.4]
                tracking-[-0.04em]

                text-[#191919]

                md:text-[24px]
              "
            >
              필요한 것부터
              <br />
              하나씩 기획합니다.
            </h3>

            <p
              className="
                mt-4

                break-keep

                text-[14px]
                leading-[1.8]

                text-[#707070]

                md:text-[15px]
              "
            >
              필요한 기능과 페이지, 사용자 흐름과 디자인 방향을 정리해 막연한
              생각을 구체적인 기획으로 바꿉니다.
            </p>

            <div
              className="
                absolute
                bottom-0
                left-7
                right-7

                h-px

                bg-black/[0.06]

                md:bottom-7
                md:left-auto
                md:right-0
                md:top-7
                md:h-auto
                md:w-px
              "
            />
          </div>

          {/* ==========================================
              03 BUILD
          ========================================== */}

          <div
            className="
              relative

              bg-[#de1334]

              p-7

              md:p-8
            "
          >
            <div
              className="
                mb-6

                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-[16px]

                bg-white

                text-[#de1334]
              "
            >
              <MonitorSmartphone size={23} strokeWidth={1.7} />
            </div>

            <h3
              className="
                break-keep

                text-[22px]
                font-semibold

                leading-[1.4]
                tracking-[-0.04em]

                text-white

                md:text-[24px]
              "
            >
              그리고 실제로
              <br />
              작동하게 만듭니다.
            </h3>

            <p
              className="
                mt-4

                break-keep

                text-[14px]
                leading-[1.8]

                text-white/80

                md:text-[15px]
              "
            >
              정리된 기획을 기반으로 디자인하고 개발해 실제 사람들이 사용할 수
              있는 하나의 웹사이트와 서비스로 완성합니다.
            </p>
          </div>
        </div>

        {/* ==================================================
            BOTTOM MESSAGE
        ================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-[1000px]

            rounded-[24px]

            bg-[#fff5f6]

            px-6
            py-5

            text-center

            md:px-8
            md:py-6
          "
        >
          <div
            className="
              mx-auto

              flex
              max-w-[720px]
              items-start
              justify-center
              gap-3
            "
          >
            <MessageCircleMore
              className="
                mt-[3px]
                shrink-0
                text-[#de1334]
              "
              size={20}
              strokeWidth={1.8}
            />

            <p
              className="
                break-keep

                text-[15px]
                font-medium

                leading-[1.75]
                tracking-[-0.02em]

                text-[#444]

                md:text-[16px]
              "
            >
              &ldquo;아이디어는 있는데 어떻게 만들어야 할지
              모르겠어요ㅠㅠ&rdquo;
              <br className="hidden sm:block" />
              바로 그 단계에서 MADE BY YOUNG과 함께 시작하면 됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
