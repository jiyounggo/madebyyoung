import type { Metadata } from "next";
import { landingPageContent } from "@/data/landingPageContent";
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
  // layout.tsx의 title template이 뒤에 | MADE BY YOUNG를 자동 추가함
  title: "병원 홈페이지 제작 | 의료 홈페이지 제작 전문",

  description:
    "병원 홈페이지 제작 MADE BY YOUNG. 의료진 소개, 진료과목, 온라인 상담, 오시는 길 등 환자에게 신뢰감 있게 정보를 전달하는 의료 홈페이지를 제작합니다.",

  keywords: [
    "병원 홈페이지 제작",
    "의료 홈페이지 제작",
    "병원 홈페이지",
    "의원 홈페이지 제작",
    "치과 홈페이지 제작",
    "병원 홈페이지 리뉴얼",
    "병원 웹사이트 제작",
    "병원 홈페이지 제작 업체",
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
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MADE BY YOUNG 병원 홈페이지 제작",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "병원 홈페이지 제작 | MADE BY YOUNG",
    description:
      "의료진 소개, 진료과목, 온라인 상담, 오시는 길까지. 환자에게 신뢰감 있게 정보를 전달하는 병원 홈페이지를 제작합니다.",
    images: ["/images/og-image.jpg"],
  },
};

export default function MedicalHomepagePage() {
  const content = landingPageContent.medical;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <TopBanner />
      <Header />

      <main>
        <section id="home">
          <HeroSection variant="medical" />
        </section>

        <LandingSeoSection variant="medical" />

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
