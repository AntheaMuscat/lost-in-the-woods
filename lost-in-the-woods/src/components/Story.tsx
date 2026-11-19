import { artwork } from "../data/content";
import { scrollToSection } from "../lib/navigation";
import { Icon } from "./Icon";
import "./Story.css";

export function Story() {
  return (
    <section id="story" className="story section">
      <div className="story-image reveal">
        <img
          src={artwork.story}
          alt="An explorer deciphers glowing symbols carved into an ancient tree"
        />
        <div className="image-frame" />
        <span className="coordinates">
          46° 18' 22" N<br />
          113° 51' 08" W
        </span>
      </div>
      <div className="story-copy">
        <p className="eyebrow">Chapter I — The awakening</p>
        <h2>
          EVERY FOREST
          <br />
          HAS A <em>SECRET.</em>
        </h2>
        <p className="lead">
          You wake up alone after a car accident. Your phone has no signal, your memories are
          unclear, and the road you came from is gone.
        </p>
        <p>
          The forest seems endless. Strange marks are carved into the trees. A distant radio repeats
          your name. And every time the sun goes down, the paths shift.
        </p>
        <blockquote>“The woods do not want you to leave. They want you to remember.”</blockquote>
        <button className="line-link" onClick={() => scrollToSection("features")}>
          Uncover what happened <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}
