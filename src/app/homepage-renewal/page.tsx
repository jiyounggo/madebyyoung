import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import IdeaSection from "@/components/home/IdeaSection";
import ServiceSection from "@/components/home/ServiceSection";
import InquirySection from "@/components/home/InquirySection";
import SeoBanner from "@/components/home/SeoBanner";
import AboutProfileSection from "@/components/home/AboutProfileSection";
import ContactSection from "@/components/home/ContactSection";
import TopBanner from "@/components/layout/TopBanner";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "홈페이지 리뉴얼 | 기업·브랜드 홈페이지 리뉴얼 | MADE BY YOUNG",
  description:
    "홈페이지 리뉴얼 MADE BY YOUNG. 오래된 기업·브랜드 홈페이지를 현재 비즈니스와 고객 흐름에 맞춰 디자인, 기능, 모바일 환경, SEO까지 새롭게 개선합니다.",
  keywords: [
    "홈페이지 리뉴얼",
    "기업 홈페이지 리뉴얼",
    "브랜드 홈페이지 리뉴얼",
    "웹사이트 리뉴얼",
    "홈페이지 디자인 리뉴얼",
    "쇼핑몰 리뉴얼",
  ],
  alternates: {
    canonical: "/homepage-renewal",
  },
  openGraph: {
    title: "홈페이지 리뉴얼 | MADE BY YOUNG",
    description:
      "오래된 홈페이지를 디자인, 기능, 모바일 환경과 SEO까지 현재 비즈니스에 맞게 새롭게 개선합니다.",
    url: "/homepage-renewal",
    type: "website",
  },
};

export default function HomepageRenewalPage() {
  return (
    <>
      <TopBanner />
      <Header />

      <main>
        <section id="home">
          <HeroSection variant="renewal" />
        </section>

        <section id="services" className="scroll-mt-[90px]">
          <ServiceSection />
        </section>

        <section id="process" className="scroll-mt-[90px]">
          <AboutProfileSection />
        </section>

        <section id="works" className="scroll-mt-[90px]">
          <SeoBanner />
        </section>

        <section id="about" className="scroll-mt-[90px]">
          <IdeaSection />
        </section>

        <section id="inquiry" className="scroll-mt-[90px]">
          <InquirySection />
        </section>

        <section id="contact" className="scroll-mt-[90px]">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
