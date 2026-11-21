"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import "./ResourcesStyle.css";

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
    title: "Making Northern Ireland The Easy Destination",
    text: "News",
    image: "https://www.mcsaatchiperformance.com/wp-content/uploads/2026/10/15-1-370x214.png",
    href: "https://www.mcsaatchiperformance.com/news/making-northern-ireland-the-easy-destination/",
    cta: "Know More",
  },
  {
    id: 2,
    title: "Cracking ASO with Localization & Creative",
    text: "Events & Insights",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2025/06/Webinar-Green-Bubble-Header-1200x700-2-370x214.png",
    href: "https://www.mcsaatchiperformance.com/events/cracking-aso-with-localization-creative/",
    cta: "Know More",
  },
  {
    id: 3,
    title: "Driving Incremental Reach for Canva in India",
    text: "Case Studies",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2026/01/2-6.png",
    href: "https://www.mcsaatchiperformance.com/case-studies/driving-incremental-reach-for-canva-in-india/",
    cta: "Know more",
  },
  {
    id: 4,
    title: "Celebrating 20 Years of Campaigns, Yet Marketing Fundamentals Matter Most",
    text: "Reports",
    image: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/12/Recent-Promotions-In-The-US-Team__Bubble-Header-1024x592.jpg",
    href: "https://www.mcsaatchiperformance.com/news/marketing-fundamentals-that-still-matter/",
    cta: "Know More",
  },
];

type Props = {
  title?: string;
  slides?: Slide[];
};

export default function ResourcesSliders({
  title = "Our Resources",
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
    <section id="resources" className="mcsresourcessection" aria-roledescription="carousel" aria-label={title} onKeyDown={onKeyDown}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mcsresources-header">
              <h2 className="mcsresources-heading">{title}</h2>
              <div className="mcsresources-nav">
                <button type="button" className="mcsresources-nav-btn mcsresources-nav-prev" onClick={prev} disabled={index === 0} aria-label="Previous slide">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" className="mcsresources-nav-btn mcsresources-nav-next" onClick={next} disabled={index >= maxIndex} aria-label="Next slide">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mcsresources-viewport" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerLeave={onPointerEnd}>
              <div ref={trackRef} className={dragging ? "mcsresources-track is-dragging" : "mcsresources-track"}>
                {slides.map((s) => (
                  <article className="mcsresources-slide" key={s.id}>
                    <div className="mcsresources-image">
                      <img src={s.image} alt={s.title} draggable={false} loading="lazy" />
                    </div>
                    <p className="mcsresources-card-text">{s.text}</p>
                    <h3 className="mcsresources-card-title">{s.title}</h3>
                    <a className="mcsresources-link" href={s.href}>{s.cta}</a>
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