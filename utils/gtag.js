import { useCallback, useEffect, useRef } from "react";

export const sendEvent = ({ action, category, label, value, custom = {} }) => {
  if (!window.gtag) return;

  if (Object.keys(custom).length > 0) {
    window.gtag("event", action, custom);
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    ...(!!value && { value: value }),
  });
};

export const useGAEventEffect = (
  { action, category = "", label = "", value = "", custom = {} },
  deps = []
) => {
  useEffect(() => {
    sendEvent({ action, category, label, value, custom });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, category, label, value, ...deps]);
};

export const sendOutboundLinkEvent = (url, label) => {
  sendEvent({
    action: url,
    category: "Outbound Links",
    label: label,
  });
};
