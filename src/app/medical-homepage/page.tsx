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
  title: "병원 홈페이지 제작 | 의료 홈페이지 제작 전문 | MADE BY YOUNG",
  description:
    "병원 홈페이지 제작 MADE BY YOUNG. 의료진 소개, 진료과목, 온라인 상담, 오시는 길 등 환자에게 신뢰감 있게 정보를 전달하는 의료 홈페이지를 제작합니다.",
  keywords: [
    "병원 홈페이지 제작",
    "의료 홈페이지 제작",
    "병원 홈페이지",
    "의원 홈페이지 제작",
    "치과 홈페이지 제작",
    "병원 홈페이지 리뉴얼",
  ],
  alternates: {
    canonical: "/medical-homepage",
  },
  openGraph: {
    title: "병원 홈페이지 제작 | MADE BY YOUNG",
    description:
      "의료진 소개, 진료과목, 온라인 상담, 오시는 길까지. 환자에게 신뢰감 있게 정보를 전달하는 병원 홈페이지를 제작합니다.",
    url: "/medical-homepage",
    type: "website",
  },
};

export default function MedicalHomepagePage() {
  return (
    <>
      <TopBanner />
      <Header />

      <main>
        <section id="home">
          <HeroSection variant="medical" />
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
