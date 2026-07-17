import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://mattiamorlotti.com";
const title = "Mattia Morlotti, International Business & Finance Student";
const description =
  "Mattia Morlotti is an International Business & Economics student at Saint Louis University, building toward a career in strategy, investing, and company-building.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Mattia Morlotti",
    "International Business",
    "Corporate Finance",
    "Business Development",
    "Strategy",
    "Saint Louis University",
  ],
  authors: [{ name: "Mattia Morlotti" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Mattia Morlotti",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 1500,
        alt: "Mattia Morlotti",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
