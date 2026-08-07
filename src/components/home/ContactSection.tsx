"use client";

import { ArrowUpRight, Check, ChevronDown, Send, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";

type ContactForm = {
  name: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
};

const INITIAL_FORM: ContactForm = {
  name: "",
  phone: "",
  type: "",
  budget: "",
  message: "",
};

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* ==========================================
      MODAL OPEN 시 body scroll 막기
  ========================================== */

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ==========================================
      ESC 닫기
  ========================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ==========================================
      CHANGE
  ========================================== */

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ==========================================
      SUBMIT
  ========================================== */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("상담 문의", form);

    setIsSubmitted(true);

    /*
      나중에 여기에서

      - Google Sheets
      - Supabase
      - API Route

      등으로 전송하면 됨.
    */
  };

  const closeModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setForm(INITIAL_FORM);
    }, 250);
  };

  return (
    <>
      {/* ==========================================
          CONTACT SECTION
      ========================================== */}

      <section
        className="
    relative
    overflow-hidden
    bg-[#171717]
    px-5
    py-10

    md:px-8
    md:py-14
  "
      >
        {/* ==========================================
      BACKGROUND MOTION
  ========================================== */}

        <motion.div
          initial={{
            x: 80,
            y: -40,
            scale: 0.8,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
      pointer-events-none
      absolute
      -right-[140px]
      -top-[180px]

      h-[440px]
      w-[440px]

      rounded-full

      bg-[#de1334]/10
    "
        />

        {/* 천천히 떠다니는 원 */}

        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      pointer-events-none
      absolute
      -right-[70px]
      top-[20px]

      h-[150px]
      w-[150px]

      rounded-full

      border
      border-[#de1334]/20
    "
        />

        {/* ==========================================
      CONTENT
  ========================================== */}

        <div
          className="
      relative
      z-10

      mx-auto
      flex
      w-full
      max-w-[1100px]
      flex-col
      items-center

      text-center
    "
        >
          {/* TITLE */}

          <h2
            className="
        break-keep

        text-[42px]
        font-bold
        leading-[1.2]
        tracking-[-0.06em]

        text-white

        sm:text-[42px]
        md:text-[54px]
      "
          >
            <motion.span
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              아이디어가 있다면,
            </motion.span>

            <br />

            <motion.span
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
          inline-block
          text-[#de1334]
        "
            >
              이제 시작해볼까요?
            </motion.span>
          </h2>

          {/* BUTTON */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9"
          >
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
          group

          flex
          items-center
          gap-4

          rounded-full

          bg-[#de1334]

          px-8
          py-4

          text-[22px]
          font-bold
          text-white

          shadow-[0_14px_40px_rgba(222,19,52,0.22)]

          transition-colors
          duration-300

          hover:bg-[#c9112f]
        "
            >
              상담하기
              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
            flex
            h-9
            w-9
            items-center
            justify-center

            rounded-full

            bg-white

            text-[#de1334]

            transition-transform
            duration-300

            group-hover:rotate-45
          "
              >
                <ArrowUpRight size={17} strokeWidth={2} />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* 얇은 움직이는 포인트 라인 */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 1.2,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        mt-10
        h-px
        w-[120px]
        origin-center

        bg-gradient-to-r
        from-transparent
        via-[#de1334]
        to-transparent
      "
          />
        </div>
      </section>

      {/* ==========================================
          MODAL
      ========================================== */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[999]

            flex
            items-center
            justify-center

            bg-black/55

            px-4
            py-6

            backdrop-blur-[6px]
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="
              relative

              max-h-[calc(100vh-48px)]
              w-full
              max-w-[620px]

              overflow-y-auto

              rounded-[28px]

              bg-white

              shadow-[0_30px_100px_rgba(0,0,0,0.25)]

              sm:rounded-[32px]
            "
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeModal}
              aria-label="상담 모달 닫기"
              className="
                absolute
                right-5
                top-5
                z-20

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-[#f5f5f5]

                text-[#555]

                transition-colors

                hover:bg-[#ececec]
                hover:text-black
              "
            >
              <X size={18} />
            </button>

            {!isSubmitted ? (
              <>
                {/* MODAL HEADER */}

                <div
                  className="
                    border-b
                    border-black/[0.07]

                    px-6
                    pb-6
                    pt-8

                    sm:px-8
                    sm:pb-7
                    sm:pt-9
                  "
                >
                  <p
                    className="
                      mb-2

                      text-[12px]
                      font-bold

                      text-[#de1334]
                    "
                  >
                    프로젝트 상담
                  </p>

                  <h3
                    className="
                      text-[27px]
                      font-bold
                      tracking-[-0.05em]

                      text-[#171717]

                      sm:text-[31px]
                    "
                  >
                    어떤 홈페이지를
                    <br />
                    만들고 싶으신가요?
                  </h3>

                  <p
                    className="
                      mt-3

                      text-[13px]
                      leading-[1.7]

                      text-[#777]
                    "
                  >
                    아직 구체적으로 정해지지 않아도 괜찮습니다. 아는 내용만
                    편하게 작성해 주세요.
                  </p>
                </div>

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="
                    px-6
                    py-7

                    sm:px-8
                    sm:py-8
                  "
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* NAME */}

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold text-[#444]">
                        이름 / 업체명
                        <span className="ml-1 text-[#de1334]">*</span>
                      </span>

                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="성함 또는 업체명"
                        className="
                          w-full

                          rounded-[14px]

                          border
                          border-black/[0.1]

                          bg-[#fafafa]

                          px-4
                          py-3.5

                          text-[14px]
                          text-[#222]

                          outline-none

                          transition

                          placeholder:text-[#aaa]

                          focus:border-[#de1334]/50
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#de1334]/[0.06]
                        "
                      />
                    </label>

                    {/* PHONE */}

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-bold text-[#444]">
                        연락처
                        <span className="ml-1 text-[#de1334]">*</span>
                      </span>

                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="010-0000-0000"
                        className="
                          w-full

                          rounded-[14px]

                          border
                          border-black/[0.1]

                          bg-[#fafafa]

                          px-4
                          py-3.5

                          text-[14px]

                          outline-none

                          transition

                          placeholder:text-[#aaa]

                          focus:border-[#de1334]/50
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#de1334]/[0.06]
                        "
                      />
                    </label>
                  </div>

                  {/* TYPE */}

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[12px] font-bold text-[#444]">
                      어떤 작업이 필요하신가요?
                    </span>

                    <div className="relative">
                      <select
                        value={form.type}
                        onChange={(e) => handleChange("type", e.target.value)}
                        className="
                          w-full
                          appearance-none

                          rounded-[14px]

                          border
                          border-black/[0.1]

                          bg-[#fafafa]

                          px-4
                          py-3.5

                          pr-11

                          text-[14px]
                          text-[#333]

                          outline-none

                          transition

                          focus:border-[#de1334]/50
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#de1334]/[0.06]
                        "
                      >
                        <option value="">제작 유형을 선택해 주세요.</option>

                        <option value="맞춤 홈페이지">맞춤 홈페이지</option>

                        <option value="스타터 홈페이지">스타터 홈페이지</option>

                        <option value="홈페이지 리뉴얼">홈페이지 리뉴얼</option>

                        <option value="맞춤 기능 개발">맞춤 기능 개발</option>

                        <option value="AI · 업무 자동화">
                          AI · 업무 자동화
                        </option>

                        <option value="유지보수">유지보수</option>

                        <option value="기타">아직 잘 모르겠어요</option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="
                          pointer-events-none

                          absolute
                          right-4
                          top-1/2

                          -translate-y-1/2

                          text-[#888]
                        "
                      />
                    </div>
                  </label>

                  {/* BUDGET */}

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[12px] font-bold text-[#444]">
                      예상 예산
                    </span>

                    <div className="relative">
                      <select
                        value={form.budget}
                        onChange={(e) => handleChange("budget", e.target.value)}
                        className="
                          w-full
                          appearance-none

                          rounded-[14px]

                          border
                          border-black/[0.1]

                          bg-[#fafafa]

                          px-4
                          py-3.5

                          pr-11

                          text-[14px]
                          text-[#333]

                          outline-none

                          transition

                          focus:border-[#de1334]/50
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#de1334]/[0.06]
                        "
                      >
                        <option value="">예상 예산을 선택해 주세요.</option>

                        <option value="50만원 이하">50만원 이하</option>

                        <option value="50~100만원">50~100만원</option>

                        <option value="100~200만원">100~200만원</option>

                        <option value="200만원 이상">200만원 이상</option>

                        <option value="상담 후 결정">상담 후 결정</option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="
                          pointer-events-none

                          absolute
                          right-4
                          top-1/2

                          -translate-y-1/2

                          text-[#888]
                        "
                      />
                    </div>
                  </label>

                  {/* MESSAGE */}

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[12px] font-bold text-[#444]">
                      프로젝트 내용
                    </span>

                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={`예)
회사 홈페이지를 새로 만들고 싶어요.
아직 기획은 없고 참고 사이트만 있습니다.`}
                      rows={5}
                      className="
                        w-full

                        resize-none

                        rounded-[14px]

                        border
                        border-black/[0.1]

                        bg-[#fafafa]

                        px-4
                        py-3.5

                        text-[14px]
                        leading-[1.7]

                        outline-none

                        transition

                        placeholder:text-[#aaa]

                        focus:border-[#de1334]/50
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#de1334]/[0.06]
                      "
                    />
                  </label>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="
                      mt-6

                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2

                      rounded-[15px]

                      bg-[#de1334]

                      px-5
                      py-4

                      text-[14px]
                      font-bold
                      text-white

                      transition-all
                      duration-300

                      hover:bg-[#c9112f]
                    "
                  >
                    상담 신청하기
                    <Send size={15} strokeWidth={2} />
                  </button>

                  <p
                    className="
                      mt-3

                      text-center

                      text-[11px]
                      leading-[1.6]

                      text-[#999]
                    "
                  >
                    남겨주신 내용을 확인한 뒤 연락드리겠습니다.
                  </p>
                </form>
              </>
            ) : (
              /* ==========================================
                  SUCCESS
              ========================================== */

              <div
                className="
                  flex
                  min-h-[440px]
                  flex-col
                  items-center
                  justify-center

                  px-7
                  py-12

                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-full

                    bg-[#fff0f2]

                    text-[#de1334]
                  "
                >
                  <Check size={24} strokeWidth={2.4} />
                </div>

                <p
                  className="
                    mt-6

                    text-[13px]
                    font-bold

                    text-[#de1334]
                  "
                >
                  상담 신청 완료
                </p>

                <h3
                  className="
                    mt-2

                    text-[27px]
                    font-bold
                    tracking-[-0.05em]

                    text-[#171717]
                  "
                >
                  문의 감사합니다.
                </h3>

                <p
                  className="
                    mt-3

                    break-keep

                    text-[14px]
                    leading-[1.8]

                    text-[#666]
                  "
                >
                  남겨주신 내용을 확인한 후
                  <br />
                  최대한 빠르게 연락드리겠습니다.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-8

                    rounded-full

                    bg-[#171717]

                    px-7
                    py-3.5

                    text-[13px]
                    font-bold
                    text-white
                  "
                >
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
