import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Automatic WordPress Theme Image Path Resolver
if (typeof window !== "undefined") {
  const getThemeUrl = () => {
    return (
      (window as any).ophronData?.themeUrl ||
      (window as any).__OPHRON_THEME_URL__ ||
      ""
    );
  };

  const fixImg = (img: HTMLImageElement) => {
    const themeUrl = getThemeUrl();
    if (!themeUrl) return;
    const rawSrc = img.getAttribute("src");
    if (rawSrc && rawSrc.startsWith("/images/")) {
      const fixed = `${themeUrl}${rawSrc}`;
      if (img.src !== fixed) {
        img.src = fixed;
      }
    }
  };

  const fixBg = (el: HTMLElement) => {
    const themeUrl = getThemeUrl();
    if (!themeUrl) return;
    const style = el.getAttribute("style") || "";
    if (style.includes("/images/")) {
      const fixedStyle = style.replace(/url\((['"]?)\/images\//g, `url($1${themeUrl}/images/`);
      el.setAttribute("style", fixedStyle);
    }
  };

  const scanDom = () => {
    document.querySelectorAll<HTMLImageElement>('img[src^="/images/"]').forEach(fixImg);
    document.querySelectorAll<HTMLElement>('[style*="/images/"]').forEach(fixBg);
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLImageElement) {
          fixImg(node);
        } else if (node instanceof HTMLElement) {
          node.querySelectorAll<HTMLImageElement>('img[src^="/images/"]').forEach(fixImg);
          node.querySelectorAll<HTMLElement>('[style*="/images/"]').forEach(fixBg);
          fixBg(node);
        }
      });
    });
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  scanDom();
  window.addEventListener("DOMContentLoaded", scanDom);
  setTimeout(scanDom, 100);
  setTimeout(scanDom, 300);
  setTimeout(scanDom, 800);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
