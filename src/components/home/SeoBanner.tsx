import { Check, Search } from "lucide-react";

export default function SeoBanner() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#171717]
      "
    >
      {/* 배경 장식 */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-32
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#de1334]/10
        "
      />

      {/* ==========================================
          CONTENT WIDTH
          다른 섹션과 좌우 라인 맞추기
      ========================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1100px]

          px-5
          py-7

          md:px-8
          md:py-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* LEFT */}

          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#de1334]

                text-white
              "
            >
              <Search size={19} strokeWidth={2} />
            </div>

            <div>
              <p
                className="
                  text-[12px]
                  font-bold

                  text-[#de1334]
                "
              >
                검색 노출까지 생각합니다.
              </p>

              <h3
                className="
                  mt-1

                  break-keep

                  text-[20px]
                  font-bold
                  leading-[1.4]
                  tracking-[-0.04em]

                  text-white

                  md:text-[23px]
                "
              >
                홈페이지는 만드는 것보다,
                <span className="text-[#de1334]">
                  {" "}
                  발견되는 것이 중요합니다.
                </span>
              </h3>

              <p
                className="
                  mt-1.5

                  break-keep

                  text-[13px]
                  leading-[1.7]

                  text-white/60

                  md:text-[14px]
                "
              >
                검색 상위 노출을 목표로 SEO 기본 구조까지 함께 설계합니다.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              shrink-0
              flex-wrap
              gap-2

              md:max-w-[390px]
              md:justify-end
            "
          >
            {[
              "SEO 최적화",
              "네이버 검색 노출",
              "구글 검색 노출",
              "검색엔진 등록",
              "검색 구조 설계",
              "메타데이터",
              "사이트맵",
              "모바일 SEO",
            ].map((item) => (
              <div
                key={item}
                className="
      flex
      items-center
      gap-1.5
      rounded-full
      border
      border-white/10
      bg-white/[0.06]
      px-3
      py-2
    "
              >
                <Check size={12} strokeWidth={2.5} className="text-[#de1334]" />

                <span
                  className="
        whitespace-nowrap
        text-[12px]
        font-semibold
        text-white/80
      "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
