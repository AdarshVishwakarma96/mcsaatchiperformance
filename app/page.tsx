import type { Metadata } from "next";
import Image from "next/image";
import Services from "../components/services/Services";
import OurClients from "../components/OurClients/OurClients";
import Resources from "../components/Resources/Resources";
import FaqAccordion from "@/components/FaqAccordion";
import AwardsGrid from "@/components/AwardsGrid/AwardsGrid";

export const metadata: Metadata = {
  title: "M+C Saatchi Performance | Global Growth Marketing Agency",
  description: "A global growth marketing agency for digital and app brands. Performance marketing, search, SEO, GEO and analytics built for measurable ROI since 2006",
  alternates: {
    canonical: "https://mcsaatchiperformance-nine.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Home | M+C Saatchi Performance",
    description: "A global growth marketing agency for digital and app brands. Performance marketing, search, SEO, GEO and analytics built for measurable ROI since 2006",
    url: "https://mcsaatchiperformance-nine.vercel.app/",
    siteName: "M+C Saatchi Performance",
    images: [
      {
        url: "https://mcsaatchiperformance-nine.vercel.app/media/open-graph-social.png",
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
      images: ["https://mcsaatchiperformance-nine.vercel.app/media/open-graph-social.png"],
    },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://mcsaatchiperformance-nine.vercel.app/#organization",
  "name": "M+C Saatchi Performance",
  "url": "https://mcsaatchiperformance-nine.vercel.app/",
  "description": "A global growth marketing agency for digitally-driven brands, offering performance marketing, paid search, paid social, programmatic advertising and app marketing.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/themes/mandcsaatchiperformance/assets/img/logo-upright-246x0.png"
  }
};


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mcsaatchiperformance-nine.vercel.app/#website",
  "url": "https://mcsaatchiperformance-nine.vercel.app/",
  "name": "M+C Saatchi Performance",
  "publisher": {
    "@id": "https://mcsaatchiperformance-nine.vercel.app/#organization"
  },
  "inLanguage": "en"
};


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://mcsaatchiperformance-nine.vercel.app/#webpage",
  "url": "https://mcsaatchiperformance-nine.vercel.app/",
  "name": "M+C Saatchi Performance | Global Growth Marketing Agency",
  "description": "A global growth marketing agency for digitally-driven brands. Discover performance marketing, paid search, paid social, programmatic advertising and app marketing services.",
  "isPartOf": {
    "@id": "https://mcsaatchiperformance-nine.vercel.app/#website"
  },
  "about": {
    "@id": "https://mcsaatchiperformance-nine.vercel.app/#organization"
  },
  "inLanguage": "en"
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should you work with M+C Saatchi Performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our agency has proven experience driving search engine marketing campaigns for global brands. We are an award-winning media agency with a wealth of knowledge in providing effective, targeted, data-driven campaigns for our clients. Our focus is on your success."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose us as your Media Buying & Planning Agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Media planning and buying is a complex and competitive landscape. The digital age means that consumers have multiple sources of media at their fingertips, and brands want to get in on the action. In this oversaturated market, competition for advertising real estate is fierce. By choosing M+C Saatchi Performance, you’ll not only benefit from our strong relationships with key platforms and channels, but our seasoned team of experts. We know exactly where to place your ad for the greatest engagement, increased conversion, and a boost in your brand awareness. Partner with us to discover how an effective omnichannel media planning & buying strategy could benefit your brand and amplify engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Do brands really need to optimize for ChatGPT and Perplexity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your audience uses AI tools to research, compare, or understand their options, then optimising for platforms like ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, Grok and other LLM tools is essential. AI engines increasingly act as decision‑assistants, not just search tools. LLMs generate a single answer and selectively cite a small number of sources they trust. If your brand isn’t one of those sources, you may not appear at all, even if you rank well in traditional search."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO typically shows steady, meaningful improvement in 8–12 weeks, depending on your site’s baseline, competition, and how fast changes are implemented. Technical fixes can move quickly; authority-building and content improvements compound over time."
      }
    },
    {
      "@type": "Question",
      "name": "How much involvement in the ASO process should we have as a brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We understand that some brands prefer to have complete visibility at every stage of the process, while others prefer to let us take the reins. You can have as much or as little involvement as you wish."
      }
    },
    {
      "@type": "Question",
      "name": "What KPIs do you usually track with an influencer campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common KPI would be post engagement, typically likes + comments + shares divided by views, and comparing the engagement rate against platform benchmarks. If there is a link provided (e.g. link in bio), we may also be able to track conversions and measure the efficiency of each post. With paid media, we can also track impressions, clicks, view-through rate, and conversions. Brand lift studies can also be secured if awareness is the KPI."
      }
    }
  ]
};



export default function Home() {
  return (
    <>
    {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
            .replace(/</g, "\\u003c")
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
            .replace(/</g, "\\u003c")
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema)
            .replace(/</g, "\\u003c")
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
            .replace(/</g, "\\u003c")
        }}
      />

    <main>
    <section id="home" className="bannersection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-sm-12 col-12">
            <div className="banner-container">
              <h1>We’re the minds behind the machines</h1>
              <h2>The growth marketing agency</h2>
              <h3>for digitally-driven brands</h3>
              <p>We work at the frontiers of media, marketing and technology to maximise marketing ROI. Our approach involves meticulous media planning and buying across digital channels leveraging the reach of paid search & social, programmatic advertising, influencer marketing, streaming platforms, affiliates and more.</p>
              <a href="#contactus" title="Talk To Us">Talk to us</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Services />

    <section id="ourwork" className="ourworksection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Our Work</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="our-work-media">
              <Image src="/media/Our-Work-Art-Media-Img.webp" alt="M+C Saatchi Performance Works" fill />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="our-work-descp">
              <h3><span>Measurement</span> is at the core of what we do</h3>
              <p>The measurable nature of performance marketing enables marketers to understand and maximise the return on their advertising investment.</p>
              <p>We don’t just assume it, we test and learn, optimizing campaigns only based on what’s driving performance.</p>
              <a href="#" title="View Our Work">View Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <OurClients />

    <section id="faq" className="faqsection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="faq-accordian">
              <div className="faq-accordian-title">
                <h2>Frequently Asked Questions</h2>
              </div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="awards" className="awardssection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="awards-title">
              <h2>Driving innovation since 2006</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AwardsGrid />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <div className="awards-cta">
              <a href="https://www.mcsaatchiperformance.com/awards/" target="_blank">View Our More Awards</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Resources />

    <section id="contactus" className="contactsection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-title">
              <h2>Talk To Us</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12">
            <div className="contact-media">
              <img src="https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2026/01/david-sarkisov-VUyb7WeQ0QA-unsplash-1000x1000-1.jpg" alt="MC Saathi Contact Us" loading="lazy"/>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contact-form">
              <form autoComplete="off">
                <div className="form-field">
                  <label htmlFor="formname">Name</label>
                  <input type="text" id="formname" name="formname" placeholder="Enter your Name" />
                </div>
                <div className="form-field">
                  <label htmlFor="formemail">Email</label>
                  <input type="email" id="formemail" name="formemail" placeholder="Enter your Email Address" />
                </div>
                <div className="form-field">
                  <label htmlFor="formphone">Phone number</label>
                  <input type="tel" id="formphone" name="formphone" placeholder="Enter your Phone number" />
                </div>
                <div className="form-field">
                  <label htmlFor="formservice">I'd like to talk about</label>
                  <select id="formservice" name="formservice">
                    <option value="">Please Select</option>
                    <option value="App Store Optimisation">App Store Optimisation</option>
                    <option value="Performance Media">Performance Media</option>
                    <option value="Ecommerce/Retail Media">eCommerce / Retail Media &amp; Quick Commerce</option>
                    <option value="Measurement / OneView / MMM &amp; Incrementality">Measurement / OneView / MMM &amp; Incrementality</option>
                    <option value="AEO / SEO / GEO">AEO / SEO / GEO</option>
                    <option value="Media Partnerships">Media Partnerships</option>
                    <option value="Careers">Careers</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="formmessage">Can you give us some more detail?</label>
                  <textarea id="formmessage" name="formmessage" placeholder="Enter more detail"></textarea>
                </div>
                {/* <div className="form-field">
                  <div className="form-msg">
                    <p>Error</p>
                    <p>Form sbumitted succesfull</p>
                  </div>
                </div> */}
                <div className="form-field">
                  <button type="submit" title="Submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>

</>

  );
}
