import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import IdeaSection from "@/components/home/IdeaSection";
import IdentitySection from "@/components/home/IdentitySection";
import ServiceSection from "@/components/home/ServiceSection";

export const metadata: Metadata = {
  title: "MADE BY YOUNG | 맞춤형 홈페이지 제작",

  description:
    "브랜드와 비즈니스에 맞는 맞춤형 홈페이지를 제작합니다. 홈페이지 제작, 리뉴얼, SEO 최적화, 웹 개발, AI 및 업무 자동화까지 MADE BY YOUNG에서 제공합니다.",

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        {/* <IdentitySection /> */}
        <ServiceSection />
      </main>
    </>
  );
}
