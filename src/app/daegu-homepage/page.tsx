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
  title: "대구 홈페이지 제작 | 기업·병원·브랜드 홈페이지 전문",

  description:
    "대구 홈페이지 제작 MADE BY YOUNG. 기업·병원·브랜드 홈페이지 제작부터 쇼핑몰 리뉴얼, SEO 기본 세팅과 유지보수까지 비즈니스에 맞게 제공합니다.",

  keywords: [
    "대구 홈페이지 제작",
    "대구 홈페이지",
    "대구 기업 홈페이지 제작",
    "대구 병원 홈페이지 제작",
    "대구 쇼핑몰 제작",
    "대구 홈페이지 리뉴얼",
    "대구 웹사이트 제작",
    "대구 웹디자인",
  ],

  alternates: {
    canonical: "/daegu-homepage",
  },

  openGraph: {
    title: "대구 홈페이지 제작 | MADE BY YOUNG",
    description:
      "기업·병원·브랜드 홈페이지 제작부터 쇼핑몰 리뉴얼과 SEO 기본 세팅까지, 비즈니스에 맞는 홈페이지를 제작합니다.",
    url: "/daegu-homepage",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MADE BY YOUNG 대구 홈페이지 제작",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "대구 홈페이지 제작 | MADE BY YOUNG",
    description:
      "기업·병원·브랜드 홈페이지 제작부터 쇼핑몰 리뉴얼과 SEO 기본 세팅까지, 비즈니스에 맞는 홈페이지를 제작합니다.",
    images: ["/images/og-image.jpg"],
  },
};

export default function DaeguHomepagePage() {
  const content = landingPageContent.daegu;

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
          <HeroSection variant="daegu" />
        </section>

        <LandingSeoSection variant="daegu" />

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
