export type HeroVariant =
  | "default"
  | "busan"
  | "corporate"
  | "medical"
  | "renewal"
  | "ecommerce";

type HeroSlide = {
  id: number;
  type: "website" | "development" | "seo" | "automation";
  eyebrow: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  background: string;
};

export const heroSlidesByVariant: Record<HeroVariant, HeroSlide[]> = {
  default: [
    {
      id: 1,
      type: "website",
      eyebrow: "WEBSITE STUDIO",
      title1: "브랜드를 담은",
      title2: "홈페이지를 만듭니다.",
      description1: "기획부터 디자인, 개발까지.",
      description2: "브랜드에 필요한 웹을 하나의 흐름으로 만듭니다.",
      background: "#F4F1EC",
    },
    {
      id: 2,
      type: "development",
      eyebrow: "WEB DEVELOPMENT",
      title1: "보이는 것 너머의",
      title2: "기능까지.",
      description1: "관리자 페이지, 회원, DB, 검색과 필터 등",
      description2: "비즈니스에 필요한 기능을 구현합니다.",
      background: "#ECEFF1",
    },
    {
      id: 3,
      type: "seo",
      eyebrow: "SEO",
      title1: "잘 만든 웹이,",
      title2: "잘 발견되도록.",
      description1: "검색엔진이 사이트를 제대로 이해할 수 있도록",
      description2: "구조부터 구글 · 네이버 기본 SEO까지 함께 설계합니다.",
      background: "#F0F2EA",
    },
    {
      id: 4,
      type: "automation",
      eyebrow: "AI & AUTOMATION",
      title1: "반복되는 일은,",
      title2: "더 간단하게.",
      description1: "문의 수집부터 데이터 정리, 콘텐츠와 관리 업무까지.",
      description2: "반복되는 작업을 웹과 AI로 연결합니다.",
      background: "#F7ECEE",
    },
  ],

  busan: [
    {
      id: 1,
      type: "website",
      eyebrow: "BUSAN WEBSITE PRODUCTION",
      title1: "부산 홈페이지 제작,",
      title2: "브랜드의 시작을 만듭니다.",
      description1: "기획부터 디자인, 개발까지.",
      description2:
        "부산 기업·브랜드에 맞는 홈페이지를 하나의 흐름으로 만듭니다.",
      background: "#F4F1EC",
    },
    {
      id: 2,
      type: "development",
      eyebrow: "CORPORATE WEBSITE",
      title1: "기업의 강점을",
      title2: "명확하게 보여줍니다.",
      description1: "회사 소개, 사업 분야, 포트폴리오, 문의까지.",
      description2: "고객에게 신뢰를 주는 기업 홈페이지를 제작합니다.",
      background: "#ECEFF1",
    },
    {
      id: 3,
      type: "seo",
      eyebrow: "SEO",
      title1: "부산에서 제일 먼저",
      title2: "찾는 홈페이지 회사가 되도록.",
      description1: "검색엔진이 사이트를 제대로 이해할 수 있도록",
      description2: "구조부터 구글 · 네이버 기본 SEO까지 함께 설계합니다.",
      background: "#F0F2EA",
    },
    {
      id: 4,
      type: "automation",
      eyebrow: "MEDICAL WEBSITE",
      title1: "병원에 필요한",
      title2: "정보를 더 쉽게.",
      description1: "의료진, 진료과목, 상담, 오시는 길까지.",
      description2: "환자에게 신뢰감 있게 전달되는 병원 홈페이지를 제작합니다.",
      background: "#F7ECEE",
    },
  ],

  corporate: [
    {
      id: 1,
      type: "website",
      eyebrow: "CORPORATE WEBSITE",
      title1: "기업의 가치를",
      title2: "더 명확하게 보여줍니다.",
      description1: "회사 소개부터 사업 영역, 포트폴리오, 문의까지.",
      description2: "고객과 파트너에게 신뢰를 주는 기업 홈페이지를 제작합니다.",
      background: "#F4F1EC",
    },
    {
      id: 2,
      type: "development",
      eyebrow: "WEB DEVELOPMENT",
      title1: "기업 운영에 필요한",
      title2: "기능까지.",
      description1: "관리자 페이지, 회원, DB, 검색과 필터 등",
      description2: "비즈니스에 맞는 웹 기능을 설계하고 구현합니다.",
      background: "#ECEFF1",
    },
    {
      id: 3,
      type: "seo",
      eyebrow: "SEO",
      title1: "필요한 고객이",
      title2: "회사를 먼저 찾도록.",
      description1: "검색엔진이 기업의 서비스와 강점을 이해하도록",
      description2: "구조부터 구글 · 네이버 기본 SEO까지 함께 설계합니다.",
      background: "#F0F2EA",
    },
    {
      id: 4,
      type: "automation",
      eyebrow: "BUSINESS AUTOMATION",
      title1: "반복되는 업무는,",
      title2: "더 효율적으로.",
      description1: "문의 수집부터 데이터 정리, 콘텐츠 관리까지.",
      description2: "기업에 필요한 업무 흐름을 웹과 AI로 연결합니다.",
      background: "#F7ECEE",
    },
  ],

  medical: [
    {
      id: 1,
      type: "website",
      eyebrow: "MEDICAL WEBSITE",
      title1: "병원의 신뢰를",
      title2: "웹에서도 전달합니다.",
      description1: "의료진, 진료과목, 상담, 오시는 길까지.",
      description2: "환자가 필요한 정보를 쉽게 찾는 병원 홈페이지를 제작합니다.",
      background: "#F4F1EC",
    },
    {
      id: 2,
      type: "development",
      eyebrow: "PATIENT EXPERIENCE",
      title1: "환자에게 필요한",
      title2: "정보를 더 쉽게.",
      description1: "모바일에서도 편한 화면과 명확한 정보 구조로",
      description2: "병원 방문 전 궁금한 내용을 빠르게 전달합니다.",
      background: "#ECEFF1",
    },
    {
      id: 3,
      type: "seo",
      eyebrow: "SEO",
      title1: "필요한 순간에",
      title2: "병원을 찾을 수 있도록.",
      description1: "검색엔진이 진료 정보와 병원 정보를 이해하도록",
      description2: "구조부터 구글 · 네이버 기본 SEO까지 함께 설계합니다.",
      background: "#F0F2EA",
    },
    {
      id: 4,
      type: "automation",
      eyebrow: "MEDICAL MANAGEMENT",
      title1: "문의와 안내를,",
      title2: "더 간단하게.",
      description1: "온라인 상담, 예약 안내, 공지 관리까지.",
      description2: "병원 운영에 맞는 웹 기능을 함께 고민합니다.",
      background: "#F7ECEE",
    },
  ],

  renewal: [
    {
      id: 1,
      type: "website",
      eyebrow: "WEBSITE RENEWAL",
      title1: "오래된 홈페이지를,",
      title2: "다시 매력적으로.",
      description1: "브랜드의 현재 모습과 고객의 흐름에 맞춰",
      description2: "기존 홈페이지를 새롭게 리뉴얼합니다.",
      background: "#F4F1EC",
    },
    {
      id: 2,
      type: "development",
      eyebrow: "WEB DEVELOPMENT",
      title1: "불편했던 기능도,",
      title2: "더 편리하게.",
      description1: "느린 화면, 복잡한 관리자, 모바일 문제까지.",
      description2: "현재 운영 방식에 맞춰 기능을 개선합니다.",
      background: "#ECEFF1",
    },
    {
      id: 3,
      type: "seo",
      eyebrow: "SEO",
      title1: "새롭게 만든 웹이,",
      title2: "더 잘 발견되도록.",
      description1: "기존 검색 노출을 점검하고 필요한 구조를 정리해",
      description2: "구글 · 네이버 기본 SEO까지 함께 설계합니다.",
      background: "#F0F2EA",
    },
    {
      id: 4,
      type: "automation",
      eyebrow: "BETTER WORKFLOW",
      title1: "관리와 운영도,",
      title2: "더 간단하게.",
      description1: "반복되는 업무와 콘텐츠 관리 방식을 점검해",
      description2: "더 편하게 운영할 수 있는 홈페이지를 만듭니다.",
      background: "#F7ECEE",
    },
  ],

  ecommerce: [
    {
      id: 1,
      type: "website",
      eyebrow: "ECOMMERCE WEBSITE",
      title1: "브랜드의 분위기를",
      title2: "쇼핑 경험으로 만듭니다.",
      description1: "메인 페이지부터 상품 분류, 상세페이지, 구매 흐름까지.",
      description2: "브랜드의 감도를 살린 쇼핑몰을 제작합니다.",
      background: "#F4F1EC",
    },

    {
      id: 2,
      type: "development",
      eyebrow: "SHOPPING MALL DEVELOPMENT",
      title1: "고객이 더 쉽게",
      title2: "구매할 수 있도록.",
      description1: "상품 탐색, 카테고리, 장바구니, 주문과 결제까지.",
      description2: "불편함 없는 쇼핑 흐름을 함께 설계합니다.",
      background: "#ECEFF1",
    },

    {
      id: 3,
      type: "seo",
      eyebrow: "SEO",
      title1: "좋은 상품이,",
      title2: "더 잘 발견되도록.",
      description1: "검색엔진이 쇼핑몰과 브랜드 정보를 이해하도록",
      description2: "구조부터 구글 · 네이버 기본 SEO까지 함께 설계합니다.",
      background: "#F0F2EA",
    },

    {
      id: 4,
      type: "automation",
      eyebrow: "SHOP MANAGEMENT",
      title1: "운영과 관리도,",
      title2: "더 편리하게.",
      description1: "상품 등록, 배너 관리, 콘텐츠 업데이트까지.",
      description2: "브랜드가 편하게 운영할 수 있는 쇼핑몰을 만듭니다.",
      background: "#F7ECEE",
    },
  ],
};