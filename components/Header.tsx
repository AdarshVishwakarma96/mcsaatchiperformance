"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
  id: string;
};

const LOGO = {
  src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/themes/mandcsaatchiperformance/assets/img/logo-upright-246x0.png",
  alt: "M+C Saatchi Performance - Home",
  width: 160,
  height: 56,
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: ".", id: "home" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Our Work", href: "/#ourwork", id: "ourwork" },
  { label: "Our Clients", href: "/#clients", id: "clients" },
  { label: "FAQs", href: "/#faq", id: "faq" },
  { label: "Awards", href: "/#awards", id: "awards" },
  { label: "Resources", href: "/#resources", id: "resources" },
];

const CTA = { label: "Talk to us", href: "/#contactus" };

export default function MCSHeaderNav() {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    document.body.classList.toggle("mcs-header-nav-lock", open);
    return () => document.body.classList.remove("mcs-header-nav-lock");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(max-width: 900px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
    <header className="mcs-header-nav">
        <div className="mcs-header-nav-inner">
          <Link href="." className="mcs-header-nav-logo" onClick={closeMenu} >
            <img className="mcs-header-nav-logo-img" src={LOGO.src} alt={LOGO.alt} width={LOGO.width} height={LOGO.height} />
          </Link>

          <nav className="mcs-header-nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.id} href={link.href} className={`mcs-header-nav-link${ active === link.id ? " mcs-header-nav-link-active" : "" }`} >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href={CTA.href} className="mcs-header-nav-cta" onClick={closeMenu} >
            {CTA.label}
          </Link>

          <button type="button" className="mcs-header-nav-toggle" aria-expanded={open} aria-controls="mcs-header-nav-mobile" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)} >
            {open ? (
              <svg className="mcs-header-nav-toggle-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" aria-hidden="true" >
                <path d="M6 6l20 20M26 6L6 26" />
              </svg>
            ) : (
              <svg className="mcs-header-nav-toggle-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" aria-hidden="true" >
                <path d="M4 9h24M4 16h24M4 23h24" />
              </svg>
            )}
          </button>
        </div>
    </header>

    <div id="mcs-header-nav-mobile" className={`mcs-header-nav-mobile${ open ? " mcs-header-nav-mobile-open" : "" }`} >
        {NAV_LINKS.map((link) => (
          <Link key={link.id} href={link.href} className={`mcs-header-nav-mobile-link${ active === link.id ? " mcs-header-nav-mobile-link-active" : "" }`} onClick={closeMenu} >
            {link.label}
          </Link>
        ))}
    </div>
    </>
  );
}