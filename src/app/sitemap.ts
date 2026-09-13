import type { MetadataRoute } from "next";

const siteUrl = "https://madebyyoung.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/busan-homepage`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
  url: `${siteUrl}/daegu-homepage`,
  lastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
    {
      url: `${siteUrl}/corporate-homepage`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/medical-homepage`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/homepage-renewal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ecommerce-website`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}