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
  title: "쇼핑몰 제작 | 브랜드 쇼핑몰·카페24 제작 전문",

  description:
    "쇼핑몰 제작 MADE BY YOUNG. 브랜드 분위기에 맞는 카페24 쇼핑몰 디자인, 메인 페이지 제작, 상품 상세페이지 적용, 쇼핑몰 리뉴얼과 운영 세팅을 제공합니다.",

  keywords: [
    "쇼핑몰 제작",
    "브랜드 쇼핑몰 제작",
    "카페24 쇼핑몰 제작",
    "쇼핑몰 디자인",
    "쇼핑몰 리뉴얼",
    "온라인 쇼핑몰 제작",
    "쇼핑몰 홈페이지 제작",
    "카페24 디자인",
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
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MADE BY YOUNG 쇼핑몰 제작",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "쇼핑몰 제작 | MADE BY YOUNG",
    description:
      "브랜드 분위기에 맞는 카페24 쇼핑몰 디자인, 메인 페이지 제작과 쇼핑몰 리뉴얼을 진행합니다.",
    images: ["/images/og-image.jpg"],
  },
};

export default function EcommerceWebsitePage() {
  const content = landingPageContent.ecommerce;

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
          <HeroSection variant="ecommerce" />
        </section>

        <LandingSeoSection variant="ecommerce" />

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
