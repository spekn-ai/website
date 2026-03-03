import { OpenPanel } from "@openpanel/web";

const STORAGE_KEY = "spekn-cookie-consent";

let op: OpenPanel | null = null;

function init() {
  if (op) return;
  op = new OpenPanel({
    clientId: import.meta.env.VITE_OPENPANEL_CLIENT_ID,
    ...(import.meta.env.VITE_OPENPANEL_API_URL && {
      apiUrl: import.meta.env.VITE_OPENPANEL_API_URL,
    }),
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
  });
}

export function initAnalyticsIfConsented() {
  if (localStorage.getItem(STORAGE_KEY) === "accepted") {
    init();
  }
}

export function onConsentAccepted() {
  init();
}
