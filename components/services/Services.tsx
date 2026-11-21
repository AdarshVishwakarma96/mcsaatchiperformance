"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import "./ServicesStyle.css";

type Slide = {
  id: number;
  title: string;
  text: string;
  image: string;
  href: string;
  cta: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Paid Search",
    text: "Search engine marketing (SEM), Paid Search, or Pay Per Click (PPC), lets businesses promote themselves at the top of the Search Engine Results Page (SERP).",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/Service-Pages__Search-Engine-Marketing__Header-Image__640x853.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/sem/",
    cta: "Know More",
  },
  {
    id: 2,
    title: "Paid Social",
    text: "Paid social advertising is the process of displaying ads and sponsored marketing messages across social media platforms.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/YESpexels-cottonbro-studio-5081918.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/paid-social/",
    cta: "Know More",
  },
  {
    id: 3,
    title: "Programmatic Advertising",
    text: "Programmatic advertising allows you to present your ads to the right people at the right time, using real-time bidding for advertising inventory across the digital landscape.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2025/07/florian-wehde-iVW7mZPwd4g-unsplash-807x538.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/programmatic/",
    cta: "Know more",
  },
  {
    id: 4,
    title: "App Marketing",
    text: "App performance marketing is our speciality. We were born in 2006 as one of the world’s first mobile marketing agencies.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/Service-Pages__Paid-Social__Header-Image__640x853.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/app-marketing/",
    cta: "Know More",
  },
  {
    id: 5,
    title: "App Store Optimisation",
    text: "App store optimisation helps to drive organic traffic and installs of your app by utilising platform best practices in your app store listing.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/App-Store-Optimisation__Header-Image__640x853.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/app-store-optimisation/",
    cta: "Know More",
  },
  {
    id: 6,
    title: "Commerce Media",
    text: "The way people shop is changing. Rather than simply encouraging consumers to visit a physical store to shop, commerce media now allows consumers to check out directly via a brand’s storefront within their social media profile, or even during a brand’s livestream event.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/Service-Pages__Commerce-Media__Header-Image__640x853.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/commerce-media/",
    cta: "Know More",
  },
  {
    id: 7,
    title: "GEO & AI Search",
    text: "We help brands win visibility across GEO and AI Search, from ChatGPT and Perplexity to Google’s AI Overviews, by combining expert human judgment with agentic AI.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2026/01/Mask-group-1-e1769510171369-807x876-740x0.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/geo/",
    cta: "Know More",
  },
  {
    id: 8,
    title: "Data, Analytics & Tech",
    text: "At M+C Saatchi Performance, data is at the heart of everything we do, from the channels we choose to the creatives and campaigns we run.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/YESryoji-iwata-X53e51WfjlE-unsplash.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/data-analytics-tech/",
    cta: "Know More",
  },
  {
    id: 9,
    title: "M+C Saatchi OneView",
    text: "M+C Saatchi OneView simplifies complex media measurement - combining modern MMM with attribution and geo-testing to help you measure and optimize the impact of all your media investments",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2025/06/What-is-MC-Saatchi-oneview-Mockup-760x0.png",
    href: "https://www.mcsaatchiperformance.com/oneview/",
    cta: "Know More",
  },
  {
    id: 10,
    title: "Product Led Growth",
    text: "Product Led Growth (PLG) is about creating an optimal experience for users in order to cultivate long-term, sustainable growth.",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/11/Service-Pages__Product-Led-Growth__Header-Image__640x853.jpg",
    href: "https://www.mcsaatchiperformance.com/what-we-do/product-led-growth/",
    cta: "Know More",
  },
];

type Props = {
  title?: string;
  slides?: Slide[];
};

export default function ServicesSliders({
  title = "We can help you with",
  slides = SLIDES,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const dragX = useRef(0);

  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const maxIndex = Math.max(0, slides.length - perView);

  useEffect(() => {
    const readPerView = () => {
      if (!trackRef.current) return;
      const value = getComputedStyle(trackRef.current).getPropertyValue("--per-view");
      setPerView(parseInt(value, 10) || 1);
    };
    readPerView();
    window.addEventListener("resize", readPerView);
    return () => window.removeEventListener("resize", readPerView);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    trackRef.current?.style.setProperty("--index", String(index));
  }, [index]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setIndex((i) => Math.min(maxIndex, i + 1)),
    [maxIndex]
  );

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    dragX.current = 0;
    setDragging(true);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    dragX.current = e.clientX - startX.current;
    trackRef.current?.style.setProperty("--drag", `${dragX.current}px`);
  };

  const onPointerEnd = () => {
    if (!dragging) return;
    if (dragX.current < -50) next();
    else if (dragX.current > 50) prev();
    dragX.current = 0;
    trackRef.current?.style.setProperty("--drag", "0px");
    setDragging(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section id="services" className="mcsservicesection" aria-roledescription="carousel" aria-label={title} onKeyDown={onKeyDown}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mcsservice-header">
              <h2 className="mcsservice-heading">{title}</h2>
              
              <div className="mcsservice-nav">
                <button type="button" className="mcsservice-nav-btn mcsservice-nav-prev" onClick={prev} disabled={index === 0} aria-label="Previous slide">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" className="mcsservice-nav-btn mcsservice-nav-next" onClick={next} disabled={index >= maxIndex} aria-label="Next slide">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mcsservice-viewport" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerLeave={onPointerEnd}>
              <div ref={trackRef} className={dragging ? "mcsservice-track is-dragging" : "mcsservice-track"}>
                {slides.map((s) => (
                  <article className="mcsservice-slide" key={s.id}>
                    <div className="mcsservice-image">
                      <img src={s.image} alt={s.title} draggable={false} loading="lazy" />
                    </div>
                    <h3 className="mcsservice-card-title">{s.title}</h3>
                    <p className="mcsservice-card-text">{s.text}</p>
                    <a className="mcsservice-link" href={s.href}>{s.cta}</a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}