"use client";

import { useState } from "react";
import { ArrowUp, MessageCircle, Mail } from "lucide-react";

import ProjectContactModal from "@/components/home/ProjectContactModal";

export default function QuickMenu() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================
          QUICK MENU
      ========================= */}
      <div
        className="
          fixed
          bottom-5
          right-4
          z-[998]
          flex
          flex-col
          gap-2
          md:bottom-8
          md:right-8
        "
      >
        {/* 카카오톡 상담 */}
        <a
          href="https://pf.kakao.com/_wbxniX/chat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 상담"
          className="
            group
            relative
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            bg-[#FEE500]
            text-[#191919]
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_35px_rgba(0,0,0,0.16)]
          "
        >
          <MessageCircle
            size={21}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          {/* PC hover */}
          <span
            className="
              pointer-events-none
              absolute
              right-[62px]
              whitespace-nowrap
              rounded-md
              bg-black
              px-3
              py-2
              text-[11px]
              font-medium
              tracking-[-0.01em]
              text-white
              opacity-0
              shadow-lg
              transition-all
              duration-200
              group-hover:-translate-x-[2px]
              group-hover:opacity-100
              max-md:hidden
            "
          >
            카카오톡 상담
          </span>
        </a>

        {/* 프로젝트 문의 */}
        <button
          type="button"
          onClick={() => setIsContactOpen(true)}
          aria-label="프로젝트 문의하기"
          className="
            group
            relative
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            bg-[#DE1334]
            text-white
            shadow-[0_8px_30px_rgba(222,19,52,0.22)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-black
            hover:shadow-[0_12px_35px_rgba(0,0,0,0.16)]
          "
        >
          <Mail
            size={20}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          {/* PC hover */}
          <span
            className="
              pointer-events-none
              absolute
              right-[62px]
              whitespace-nowrap
              rounded-md
              bg-black
              px-3
              py-2
              text-[11px]
              font-medium
              tracking-[-0.01em]
              text-white
              opacity-0
              shadow-lg
              transition-all
              duration-200
              group-hover:-translate-x-[2px]
              group-hover:opacity-100
              max-md:hidden
            "
          >
            프로젝트 문의
          </span>
        </button>

        {/* TOP */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="
            group
            relative
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-black
            shadow-[0_8px_30px_rgba(0,0,0,0.10)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-black
            hover:bg-black
            hover:text-white
            hover:shadow-[0_12px_35px_rgba(0,0,0,0.16)]
          "
        >
          <ArrowUp
            size={20}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
            "
          />

          {/* PC hover */}
          <span
            className="
              pointer-events-none
              absolute
              right-[62px]
              whitespace-nowrap
              rounded-md
              bg-black
              px-3
              py-2
              text-[11px]
              font-medium
              tracking-[-0.01em]
              text-white
              opacity-0
              shadow-lg
              transition-all
              duration-200
              group-hover:-translate-x-[2px]
              group-hover:opacity-100
              max-md:hidden
            "
          >
            맨 위로
          </span>
        </button>
      </div>

      {/* =========================
          PROJECT CONTACT MODAL
      ========================= */}
      <ProjectContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
