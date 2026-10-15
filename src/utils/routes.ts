/**
 * Central route helper and active page detection for OPHRON Platform.
 */

export function resolveCurrentRoute(): string {
  if (typeof window === "undefined") return "/";

  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, "");

  // Legacy founder route redirect to about
  if (rawPath === "/founder" || rawHash === "founder") {
    return "/about";
  }

  // Support query param service links (e.g. /services?service=marble-polishing)
  if (typeof window !== "undefined" && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("service");
    if (s) {
      return `/services/${s.toLowerCase()}`;
    }
  }

  // Support hash service links (e.g. #services?service=marble-polishing or #services/marble-polishing)
  if (rawHash.includes("service=")) {
    const match = rawHash.match(/service=([^&]+)/);
    if (match && match[1]) {
      return `/services/${match[1].toLowerCase()}`;
    }
  }
  if (rawHash.startsWith("services/")) {
    return `/${rawHash.toLowerCase()}`;
  }

  // Check known route paths
  const knownRoutes = [
    "about",
    "services",
    "why",
    "gallery",
    "gallery-grid",
    "blog",
    "contact",
    "all-articles",
    "mainframe",
  ];

  // If path matches a known route
  for (const r of knownRoutes) {
    if (rawPath === `/${r}`) {
      return `/${r}`;
    }
    if (rawPath.startsWith(`/${r}/`)) {
      // Preserve sub-routes such as /services/marble-polishing
      return rawPath;
    }
  }

  // If visited via legacy hash (e.g. #about, #services), support and upgrade
  for (const r of knownRoutes) {
    if (rawHash === r || rawHash.startsWith(`${r}?`) || rawHash.startsWith(`${r}/`)) {
      return `/${r}`;
    }
  }

  return "/";
}

/**
 * Returns true if the user is on the platform homepage ("/"),
 * false if they are on any other dedicated sub-page (/about, /services, /why, etc.).
 */
export function isHomePage(): boolean {
  return resolveCurrentRoute() === "/";
}
