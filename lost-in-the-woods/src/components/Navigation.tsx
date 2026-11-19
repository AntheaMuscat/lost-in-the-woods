import { useEffect, useState } from "react";
import { navigationItems } from "../data/content";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { scrollToSection } from "../lib/navigation";
import { Icon } from "./Icon";
import "./Navigation.css";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = (section: string) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} aria-label="Main navigation">
        <button
          className="brand"
          onClick={() => navigateTo("home")}
          aria-label="Lost in the Woods home"
        >
          <span className="brand-mark">
            <Icon name="compass" />
          </span>
        </button>
        <div className="nav-links">
          {navigationItems.map((item) => (
            <button key={item} onClick={() => navigateTo(item)}>
              {item}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => navigateTo("contact")}>
          Wishlist now <Icon name="arrow" />
        </button>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div>
          {navigationItems.map((item, index) => (
            <button
              key={item}
              style={{ "--i": index } as React.CSSProperties}
              onClick={() => navigateTo(item)}
            >
              {item}
              <span>0{index + 1}</span>
            </button>
          ))}
        </div>
        <button className="primary" onClick={() => navigateTo("contact")}>
          Wishlist now
        </button>
      </div>
    </>
  );
}
