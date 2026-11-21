declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const trackEvent = (
  eventName: string,
  eventData: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });

  console.log("Tracking Event:", eventName, eventData);
};