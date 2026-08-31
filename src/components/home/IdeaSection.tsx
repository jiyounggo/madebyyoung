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
                요즘 홈페이지는 하나쯤 있어야 한다던데...
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
                막상 만들려고 하니까 뭘 준비해야 하는지, 어떤 식으로 만들어야
                하는지 모르겠어요ㅠㅠ
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
                아무것도 정해지지 않아도 괜찮아요.
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
                어떤 일을 하고 계신지, 홈페이지를 통해 무엇을 보여주고 싶은지만
                알려주세요. 필요한 구성부터 하나씩 같이 정리해드려요.
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
                홈페이지 제작 비용이 생각보다 많이 들던데요...
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
                필요한 기능이 많아질수록 계속 추가 비용이 붙을까 봐 걱정돼요ㅠㅠ
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
                  필요하지 않은 비용까지 받지 않아요.
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
                꼭 필요한 기능과 작업 범위를 먼저 정리하고, 불필요한 기능은
                덜어내 예산 안에서 가장 효율적인 방법으로 제작해드려요.
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
              어떤 홈페이지가 필요한지부터.
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
              어떤 일을 하고 계신지, 홈페이지를 통해 무엇을 보여주고 싶은지
              간단한 상담을 통해 필요한 페이지와 기능부터 함께 정리합니다.
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
              필요한 만큼, 합리적으로.
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
              무조건 많은 기능을 넣기보다 꼭 필요한 것부터 골라 제작합니다.
              불필요한 비용은 줄이고 예산에 맞는 가장 효율적인 방법을
              제안해드려요.
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
              처음부터 오픈까지 직접.
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
              상담부터 기획, 디자인, 개발, 수정 그리고 오픈까지 담당자가 바뀌지
              않고 MADE BY YOUNG이 직접 함께합니다.
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
                text-left
                text-[15px]
                font-medium

                leading-[1.75]
                tracking-[-0.02em]

                text-[#444]

                md:text-[16px]
              "
            >
              &ldquo;홈페이지는 오픈이 끝이 아니라 시작이니까요. <br />
              만드는 순간부터 운영하고 성장하는 과정까지, 오래 함께할 수 있는
              파트너가 되겠습니다.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
