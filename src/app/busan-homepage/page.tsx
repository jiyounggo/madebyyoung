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
  // layout.tsx의 title template이 | MADE BY YOUNG를 자동으로 붙여줌
  title: "부산 홈페이지 제작 | 기업·병원·브랜드 홈페이지 전문",

  description:
    "부산 홈페이지 제작 MADE BY YOUNG. 기업·병원·브랜드 홈페이지 제작, 쇼핑몰 리뉴얼, SEO 기본 세팅과 유지보수를 제공합니다.",

  keywords: [
    "부산 홈페이지 제작",
    "부산 홈페이지",
    "부산 기업 홈페이지 제작",
    "부산 병원 홈페이지 제작",
    "부산 쇼핑몰 제작",
    "부산 홈페이지 리뉴얼",
    "부산 웹사이트 제작",
    "부산 웹디자인",
  ],

  alternates: {
    canonical: "/busan-homepage",
  },

  openGraph: {
    title: "부산 홈페이지 제작 | MADE BY YOUNG",
    description:
      "기업·병원·브랜드 홈페이지 제작부터 쇼핑몰 리뉴얼과 SEO 기본 세팅까지, 비즈니스에 맞는 홈페이지를 제작합니다.",
    url: "/busan-homepage",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MADE BY YOUNG 부산 홈페이지 제작",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "부산 홈페이지 제작 | MADE BY YOUNG",
    description:
      "기업·병원·브랜드 홈페이지 제작부터 쇼핑몰 리뉴얼과 SEO 기본 세팅까지, 비즈니스에 맞는 홈페이지를 제작합니다.",
    images: ["/images/og-image.jpg"],
  },
};

export default function BusanHomepagePage() {
  const content = landingPageContent.busan;

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
          <HeroSection variant="busan" />
        </section>

        <LandingSeoSection variant="busan" />

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
