import { features } from "../data/content";
import { Icon } from "./Icon";
import "./Features.css";

export function Features() {
  return (
    <section id="features" className="features section">
      <header className="section-head">
        <p className="eyebrow">Survive the changing dark</p>
        <h2>
          TRUST NOTHING.
          <br />
          <em>QUESTION EVERYTHING.</em>
        </h2>
      </header>
      <div className="feature-list">
        {features.map((feature) => (
          <article key={feature.number} className="feature">
            <span className="feature-number">{feature.number}</span>
            <div className="feature-icon">
              <Icon name={feature.icon} />
            </div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <span className="feature-arrow">
              <Icon name="arrow" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
