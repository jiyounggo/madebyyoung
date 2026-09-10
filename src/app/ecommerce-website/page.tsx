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
  title: "쇼핑몰 제작 | 브랜드 쇼핑몰·카페24 제작 전문 | MADE BY YOUNG",
  description:
    "쇼핑몰 제작 MADE BY YOUNG. 브랜드 분위기에 맞는 카페24 쇼핑몰 디자인, 메인 페이지 제작, 상품 상세페이지 적용, 쇼핑몰 리뉴얼과 운영 세팅을 제공합니다.",
  keywords: [
    "쇼핑몰 제작",
    "브랜드 쇼핑몰 제작",
    "카페24 쇼핑몰 제작",
    "쇼핑몰 디자인",
    "쇼핑몰 리뉴얼",
    "온라인 쇼핑몰 제작",
  ],
  alternates: {
    canonical: "/ecommerce-website",
  },
  openGraph: {
    title: "쇼핑몰 제작 | MADE BY YOUNG",
    description:
      "브랜드 분위기에 맞는 카페24 쇼핑몰 디자인, 메인 페이지 제작과 쇼핑몰 리뉴얼을 진행합니다.",
    url: "/ecommerce-website",
    type: "website",
  },
};

export default function EcommerceWebsitePage() {
  return (
    <>
      <TopBanner />
      <Header />

      <main>
        <section id="home">
          <HeroSection variant="ecommerce" />
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
