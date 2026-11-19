import { useState } from "react";
import { artwork } from "../data/content";
import { Icon } from "./Icon";
import "./contact.css";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="contact">
      <div
        className="contact-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 17, 13, .72), rgba(9, 17, 13, .92)), url(${artwork.village})`,
        }}
      />
      <div className="contact-inner">
        <p className="eyebrow">The search begins soon</p>
        <h2>
          WILL YOU FIND
          <br />
          <em>YOUR WAY OUT?</em>
        </h2>
        <p>
          Wishlist Lost in the Woods and be the first to receive classified field notes, development
          updates and release news.
        </p>
        {submitted ? (
          <div className="success">
            <span>✓</span>
            <div>
              <strong>TRANSMISSION RECEIVED</strong>
              <small>We’ll contact you when the forest calls.</small>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input id="email" type="email" required placeholder="Enter your email address" />
            <button className="primary" type="submit">
              Join the wishlist <Icon name="arrow" />
            </button>
          </form>
        )}
        <small className="platforms">
          Coming to PC &nbsp;·&nbsp; PS5 &nbsp;·&nbsp; XBOX SERIES X|S
        </small>
      </div>
    </section>
  );
}
