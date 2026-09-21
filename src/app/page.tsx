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
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
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
      <TopBanner />
      <Header />

      <main>
        {/* HERO */}
        <section id="home">
          <HeroSection />
        </section>
        {/* SERVICES */}
        <section id="services" className="scroll-mt-[90px]">
          <ServiceSection />
        </section>
        {/* PROCESS */}
        <section id="process" className="scroll-mt-[90px]">
          <AboutProfileSection />
        </section>
        {/* PORTFOLIO */}
        <section id="" className="scroll-mt-[120px]">
          <IdeaSection />
        </section>
        {/* PORTFOLIO */}
        <section id="portfolio" className="scroll-mt-[120px]">
          <PortfolioShowcase />
        </section>
        {/* ABOUT */}
        <section id="about" className="scroll-mt-[120px]">
          <SeoBanner />
        </section>
        {/* INQUIRY */}
        <section id="inquiry" className="scroll-mt-[90px]">
          <InquirySection />
        </section>
        {/* CONTACT */}
        <section id="contact" className="scroll-mt-[90px]">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
