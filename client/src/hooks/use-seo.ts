import { useEffect } from "react";

const SITE_URL = "https://www.passport2fluency.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type SeoOptions = {
  title: string;
  description: string;
  /** Path only, e.g. "/es/pricing". Used for canonical + og:url. Defaults to current path. */
  path?: string;
  image?: string;
  /** "website" (default) or "article" */
  type?: "website" | "article";
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight, dependency-free per-page SEO for this client-rendered SPA.
 * Sets the document title, meta description, canonical URL and Open Graph/Twitter
 * tags for the current route so each page is distinct for search and AI engines.
 */
export function useSeo({ title, description, path, image, type = "website" }: SeoOptions) {
  useEffect(() => {
    const url = SITE_URL + (path ?? window.location.pathname);
    const img = image ?? DEFAULT_IMAGE;

    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", img);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
  }, [title, description, path, image, type]);
}
