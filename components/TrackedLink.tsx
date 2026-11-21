
"use client";

import { trackEvent } from "./tracking";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  title: string;
  className?: string;
  children: ReactNode;
  buttonName: string;
  buttonLocation: string;
};

export default function TrackedLink({
  href,
  title,
  className,
  children,
  buttonName,
  buttonLocation,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      title={title}
      className={`datalayer-string-cta ${className || ""}`.trim()}
      onClick={() =>
        trackEvent("cta_click", {
          button_name: buttonName,
          button_location: buttonLocation,
          page_name: "Home",
          button_title: title,
        })
      }
    >
      {children}
    </a>
  );
}
