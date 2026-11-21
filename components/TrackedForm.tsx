
"use client";
import { useRef } from "react";
import { trackEvent } from "./tracking";
import type {
  ComponentProps,
  FocusEvent,
  FormEvent,
} from "react";

type TrackedFormProps = ComponentProps<"form"> & {
  formName: string;
  formLocation: string;
};

export default function TrackedForm({
  formName,
  formLocation,
  children,
  onFocusCapture,
  ...props
}: TrackedFormProps) {
  const formStarted = useRef(false);

  const handleFocus = (event: FocusEvent<HTMLFormElement>) => {
    if (!formStarted.current) {
      formStarted.current = true;

      trackEvent("form_start", {
        form_name: formName,
        form_location: formLocation,
        page_name: "Home",
      });
    }
    onFocusCapture?.(event);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    trackEvent("form_submit", {
      form_name: formName,
      form_location: formLocation,
      page_name: "Home",
      submission_status: "success",
    });

    window.location.href = "/thank-you";
  };

  return (
    <form
      {...props}
      onFocusCapture={handleFocus}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
