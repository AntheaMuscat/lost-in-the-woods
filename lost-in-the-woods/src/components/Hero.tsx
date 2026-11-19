import { useState } from "react";
import { artwork } from "../data/content";
import { scrollToSection } from "../lib/navigation";
import { Icon } from "./Icon";
import "./Hero.css";

export function Hero() {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-image" style={{ backgroundImage: `url(${artwork.hero})` }} />
      <div className="hero-vignette" />
      <div className="fog fog-one" />
      <div className="fog fog-two" />
      <button
        className={`sound ${soundOn ? "active" : ""}`}
        onClick={() => setSoundOn((enabled) => !enabled)}
        aria-label="Toggle ambient sound"
      >
        <Icon name="sound" />
        <span>{soundOn ? "Ambient on" : "Ambient off"}</span>
      </button>
      <div className="hero-content">
        <p className="eyebrow">A psychological survival mystery</p>
        <img
          className="hero-title"
          src={artwork.title}
          alt="Lost in the Woods — The Forest Remembers"
        />
        <p className="tagline">Some paths are never meant to be found.</p>
        <div className="hero-rule" />
        <p className="hero-copy">
          Enter a forest where every night changes the world around you. Uncover its secrets,
          survive the unknown and find your way home.
        </p>
        <div className="hero-actions">
          <button className="primary" onClick={() => scrollToSection("world")}>
            Explore the unknown <Icon name="arrow" />
          </button>
          <button className="text-btn" onClick={() => scrollToSection("story")}>
            <span>
              <Icon name="play" />
            </span>
            Discover the story
          </button>
        </div>
      </div>
      <button className="scroll-hint" onClick={() => scrollToSection("story")}>
        <span>Scroll to descend</span>
        <i />
      </button>
      <div className="chapter-mark">
        01 <span /> 06
      </div>
    </section>
  );
}
