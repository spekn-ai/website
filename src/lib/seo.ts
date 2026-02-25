export const DEFAULT_SITE_URL = "https://spekn.com";
export const DEFAULT_OG_IMAGE_PATH = "/og-image.svg";

function stripTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function getSiteUrl() {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  return stripTrailingSlash(configured || DEFAULT_SITE_URL);
}

export function toAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const base = getSiteUrl();
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}
