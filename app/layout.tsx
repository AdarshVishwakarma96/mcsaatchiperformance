import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M+C Saatchi Performance | Global Growth Marketing Agency",
  description: "A global growth marketing agency for digital and app brands. Performance marketing, search, SEO, GEO and analytics built for measurable ROI since 2006",
  alternates: {
    canonical: "https://mcsaatchiperformance-nine.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Home | M+C Saatchi Performance",
    description: "A global growth marketing agency for digital and app brands. Performance marketing, search, SEO, GEO and analytics built for measurable ROI since 2006",
    url: "https://mcsaatchiperformance-nine.vercel.app/",
    siteName: "M+C Saatchi Performance",
    images: [
      {
        url: "https://mcsaatchiperformance-nine.vercel.app/media/Open-Graph.webp",
        width: 1200,
        height: 630,
        alt: "M+C Saatchi Performance Home",
      },
    ],
    type: "website",
  },
  twitter: {
      card: "summary_large_image",
      title: "Home | M+C Saatchi Performance",
      images: ["https://mcsaatchiperformance-nine.vercel.app/media/Open-Graph.webp"],
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
