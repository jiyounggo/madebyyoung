import { ArrowUpRight, Check, Search } from "lucide-react";

export default function SeoBanner() {
  return (
    <section className="bg-white px-5 py-8 md:px-8 md:py-10">
      <div className="mx-auto w-full max-w-[1100px]">
        <div
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-black/[0.07]
            bg-[#f7f7f7]
            px-6
            py-6

            md:px-8
            md:py-7
          "
        >
          {/* 연한 브랜드 포인트 */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-20
              h-[190px]
              w-[190px]
              rounded-full
              bg-[#de1334]/[0.04]
            "
          />

          <div
            className="
              relative
              z-10
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
                  bg-white
                  text-[#de1334]
                  shadow-[0_5px_20px_rgba(0,0,0,0.05)]
                "
              >
                <Search size={19} strokeWidth={2} />
              </div>

              <div>
                <p
                  className="
                    text-[13px]
                    font-bold
                    text-[#de1334]
                  "
                >
                  검색 노출까지 생각한 제작
                </p>

                <h3
                  className="
                    mt-1.5
                    break-keep
                    text-[20px]
                    font-bold
                    leading-[1.4]
                    tracking-[-0.04em]
                    text-[#171717]

                    md:text-[23px]
                  "
                >
                  예쁜 홈페이지에서 끝나지 않습니다.
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[600px]
                    break-keep
                    text-[14px]
                    leading-[1.7]
                    text-[#666]

                    md:text-[15px]
                  "
                >
                  검색에 유리한 구조와 기본 SEO를 함께 적용해 더 많은 고객에게
                  발견될 수 있도록 제작합니다.
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

                md:justify-end
              "
            >
              {["검색 구조", "메타데이터", "사이트맵", "검색엔진 등록"].map(
                (item) => (
                  <div
                    key={item}
                    className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-black/[0.06]
                    bg-white
                    px-3
                    py-2
                  "
                  >
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      className="text-[#de1334]"
                    />

                    <span
                      className="
                      whitespace-nowrap
                      text-[12px]
                      font-bold
                      text-[#444]
                    "
                    >
                      {item}
                    </span>
                  </div>
                ),
              )}

              <div
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#de1334]
                  text-white
                "
              >
                <ArrowUpRight size={15} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
