"use client";

import { useState, type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "Why should you work with M+C Saatchi Performance?",
    answer: (
      <>
        Our agency has proven experience driving search engine marketing campaigns for global brands. We are an award-winning media agency with a wealth of knowledge in providing effective, targeted, data-driven campaigns for our clients. Our focus is on your success.
      </>
    ),
  },
  {
    question: "Why choose us as your Media Buying & Planning Agency?",
    answer:
      "Media planning and buying is a complex and competitive landscape. The digital age means that consumers have multiple sources of media at their fingertips, and brands want to get in on the action. In this oversaturated market, competition for advertising real estate is fierce. By choosing M+C Saatchi Performance, you’ll not only benefit from our strong relationships with key platforms and channels, but our seasoned team of experts. We know exactly where to place your ad for the greatest engagement, increased conversion, and a boost in your brand awareness. Partner with us to discover how an effective omnichannel media planning & buying strategy could benefit your brand and amplify engagement.",
  },
  {
    question: "Do brands really need to optimize for ChatGPT and Perplexity?",
    answer:
      "Yes. If your audience uses AI tools to research, compare, or understand their options, then optimising for platforms like ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, Grok and other LLM tools is essential. AI engines increasingly act as decision‑assistants, not just search tools. LLMs generate a single answer and selectively cite a small number of sources they trust. If your brand isn’t one of those sources, you may not appear at all, even if you rank well in traditional search.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO typically shows steady, meaningful improvement in 8–12 weeks, depending on your site’s baseline, competition, and how fast changes are implemented. Technical fixes can move quickly; authority-building and content improvements compound over time.",
  },
  {
    question: "How much involvement in the ASO process should we have as a brand?",
    answer:
      "We understand that some brands prefer to have complete visibility at every stage of the process, while others prefer to let us take the reins. You can have as much or as little involvement as you wish.",
  },
  {
    question: "What KPIs do you usually track with an influencer campaign?",
    answer:
      "The most common KPI would be post engagement, typically likes + comments + shares divided by views, and comparing the engagement rate against platform benchmarks. If there is a link provided (e.g. link in bio), we may also be able to track conversions and measure the efficiency of each post. With paid media, we can also track impressions, clicks, view-through rate, and conversions. Brand lift studies can also be secured if awareness is the KPI.",
  },
];

type PlusMinusIconProps = {
  open: boolean;
};

function PlusMinusIcon({ open }: PlusMinusIconProps) {
  return (
    <svg className={open ? "mcs-faqs-icon mcs-faqs-icon-open" : "mcs-faqs-icon"} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"aria-hidden="true">
      <line x1="3" y1="10" x2="17" y2="10" />
      <line className="mcs-faqs-icon-vertical" x1="10" y1="3" x2="10" y2="17" />
    </svg>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="mcs-faqs">
      <div className="mcs-faqs-list">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className={open ? "mcs-faqs-item mcs-faqs-item-open" : "mcs-faqs-item"}>
              <h3 className="mcs-faqs-heading">
                <button type="button" className="mcs-faqs-question" onClick={() => toggle(i)} aria-expanded={open} aria-controls={`faq-panel-${i}`} id={`faq-header-${i}`}>
                  <span className="mcs-faqs-question-text">{item.question}</span>
                  <PlusMinusIcon open={open} />
                </button>
              </h3>

              <div className="mcs-faqs-panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-header-${i}`}>
                <div className="mcs-faqs-panel-inner">
                  <div className="mcs-faqs-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}