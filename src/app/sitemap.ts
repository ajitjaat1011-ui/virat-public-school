import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://viratpublicschool.pages.dev";
  const now = new Date();

  const routes: Array<{ path: string; priority: number; changeFreq: "monthly" | "weekly" | "yearly" }> = [
    { path: "", priority: 1.0, changeFreq: "weekly" },
    { path: "/about-us", priority: 0.9, changeFreq: "monthly" },
    { path: "/about-us/history", priority: 0.7, changeFreq: "monthly" },
    { path: "/about-us/vision-mission", priority: 0.7, changeFreq: "monthly" },
    { path: "/about-us/principals-message", priority: 0.7, changeFreq: "monthly" },
    { path: "/about-us/management", priority: 0.6, changeFreq: "monthly" },
    { path: "/academics", priority: 0.9, changeFreq: "monthly" },
    { path: "/academics/curriculum", priority: 0.8, changeFreq: "monthly" },
    { path: "/academics/classes", priority: 0.8, changeFreq: "monthly" },
    { path: "/academics/faculty", priority: 0.7, changeFreq: "monthly" },
    { path: "/academics/examinations", priority: 0.6, changeFreq: "weekly" },
    { path: "/admissions", priority: 1.0, changeFreq: "monthly" },
    { path: "/admissions/process", priority: 0.9, changeFreq: "monthly" },
    { path: "/admissions/fees", priority: 0.9, changeFreq: "monthly" },
    { path: "/admissions/apply", priority: 0.9, changeFreq: "yearly" },
    { path: "/admissions/eligibility", priority: 0.8, changeFreq: "monthly" },
    { path: "/news-events", priority: 0.8, changeFreq: "weekly" },
    { path: "/news-events/announcements", priority: 0.7, changeFreq: "weekly" },
    { path: "/news-events/calendar", priority: 0.7, changeFreq: "weekly" },
    { path: "/news-events/gallery", priority: 0.6, changeFreq: "weekly" },
    { path: "/contact-us", priority: 0.9, changeFreq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
