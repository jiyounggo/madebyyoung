import type { Metadata } from "next";
import LandingSeoSection from "@/components/home/LandingSeoSection";
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
  title: "기업 홈페이지 제작 | 회사 홈페이지 제작 전문",

  description:
    "기업 홈페이지 제작 MADE BY YOUNG. 회사 소개, 사업 영역, 포트폴리오, 문의 기능까지 비즈니스의 강점을 효과적으로 보여주는 맞춤형 기업 홈페이지를 제작합니다.",

  keywords: [
    "기업 홈페이지 제작",
    "회사 홈페이지 제작",
    "기업 홈페이지",
    "회사 홈페이지",
    "기업 홈페이지 리뉴얼",
    "기업 웹사이트 제작",
    "홈페이지 제작 업체",
  ],

  alternates: {
    canonical: "/corporate-homepage",
  },

  openGraph: {
    title: "기업 홈페이지 제작 | MADE BY YOUNG",
    description:
      "회사 소개부터 사업 영역, 포트폴리오, 문의 기능까지. 비즈니스의 강점을 보여주는 기업 홈페이지를 제작합니다.",
    url: "/corporate-homepage",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MADE BY YOUNG 기업 홈페이지 제작",
      },
    ],
  },
};

export default function CorporateHomepagePage() {
  return (
    <>
      <TopBanner />
      <Header />

      <main>
        <section id="home">
          <HeroSection variant="corporate" />
        </section>
        <LandingSeoSection variant="corporate" />
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
