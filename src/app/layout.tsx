import type { Metadata } from "next";
import "./globals.css";
import QuickMenu from "@/components/layout/QuickMenu";

export const metadata: Metadata = {
  metadataBase: new URL("https://madebyyoung.com"),

  title: {
    default: "MADE BY YOUNG | 홈페이지 제작",
    template: "%s | MADE BY YOUNG",
  },

  description:
    "브랜드와 비즈니스에 맞는 홈페이지를 제작합니다. 맞춤형 홈페이지 제작, 홈페이지 리뉴얼, 유지보수, SEO, AI 및 업무 자동화 개발까지 제공합니다.",

  keywords: [
    "홈페이지 제작",
    "웹사이트 제작",
    "부산 홈페이지 제작",
    "맞춤형 홈페이지 제작",
    "홈페이지 리뉴얼",
    "반응형 홈페이지",
    "Next.js 홈페이지",
    "SEO 홈페이지 제작",
    "웹 개발",
    "업무 자동화",
  ],

  openGraph: {
    title: "MADE BY YOUNG | 홈페이지 제작",
    description:
      "브랜드와 비즈니스에 맞는 맞춤형 홈페이지 제작부터 SEO, AI 및 업무 자동화 개발까지.",
    url: "/",
    siteName: "MADE BY YOUNG",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MADE BY YOUNG 홈페이지 제작",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MADE BY YOUNG | 홈페이지 제작",
    description: "맞춤형 홈페이지 제작부터 SEO, AI 및 업무 자동화 개발까지.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <QuickMenu />
      </body>
    </html>
  );
}
