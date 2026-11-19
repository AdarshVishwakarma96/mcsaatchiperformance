
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thank you | M+C Saatchi Performance",
  description: "Thank you for contacting M+C Saatchi Performance. We've received your enquiry and our team will be in touch with you shortly.",
  alternates: {
    canonical: "https://mcsaatchiperformance-nine.vercel.app/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Thank You | M+C Saatchi Performance",
    description: "Thank you for contacting M+C Saatchi Performance. We've received your enquiry and our team will be in touch with you shortly.",
    url: "https://mcsaatchiperformance-nine.vercel.app/thank-you",
    siteName: "M+C Saatchi Performance",
    images: [
      {
        url: "https://mcsaatchiperformance-nine.vercel.app/media/open-graph-social.png",
        width: 1200,
        height: 630,
        alt: "M+C Saatchi Performance Thank You",
      },
    ],
    type: "website",
  },
  twitter: {
      card: "summary_large_image",
      title: "THank You | M+C Saatchi Performance",
      images: ["https://mcsaatchiperformance-nine.vercel.app/media/open-graph-social.png"],
    },
};

export default function Thankyou() {
  return (
    <section className="thanksection">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-11 col-sm-12 col-12">
                    <div className="thank-contents text-center">
                      <div className="thank-media">
                        <Image src="/media/dark-logo.webp" alt="M+C Saatchi Performance Thank You" fill />
                      </div>
                      <h1>Thank You!</h1>
                      <p>Your enquiry has been submitted. We will get back to you soon.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}