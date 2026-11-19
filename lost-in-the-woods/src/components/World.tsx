import { artwork } from "../data/content";
import "./World.css";

export function World() {
  return (
    <section id="world" className="world">
      <img src={artwork.world} alt="The ancient heart of the forest beneath a colossal tree" />
      <div className="world-overlay" />
      <div className="world-content section">
        <p className="eyebrow">Beyond the marked trail</p>
        <h2>
          THE FOREST
          <br />
          <em>REMEMBERS.</em>
        </h2>
        <p>
          Explore a handcrafted wilderness shaped by your choices. The cabin, the watchtower, the
          buried chapel—each place holds a truth the woods tried to swallow.
        </p>
        <div className="world-stats">
          <div>
            <strong>17</strong>
            <span>Hidden locations</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Possible endings</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Ways to get lost</span>
          </div>
        </div>
      </div>
      <div className="symbol" aria-hidden="true">
        <span>⌖</span>
      </div>
    </section>
  );
}
