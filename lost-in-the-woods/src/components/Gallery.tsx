import { useState } from "react";
import { galleryItems } from "../data/content";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { Lightbox } from "./Lighthouse";
import "./Gallery.css";

export function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  useBodyScrollLock(Boolean(activeImage));

  return (
    <>
      <section id="gallery" className="gallery section">
        <header className="section-head horizontal">
          <div>
            <p className="eyebrow">Field recordings</p>
            <h2>
              GLIMPSES FROM
              <br />
              <em>THE UNKNOWN.</em>
            </h2>
          </div>
          <p>
            Recovered images from inside the perimeter.
            <br />
            Select an image to investigate.
          </p>
        </header>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              className={`gallery-item g${index + 1}`}
              key={item.src}
              onClick={() => setActiveImage(item.src)}
            >
              <img src={item.src} alt={item.title} />
              <span className="gallery-shade" />
              <span className="gallery-label">
                <small>{item.meta}</small>
                {item.title}
              </span>
              <span className="gallery-plus">+</span>
            </button>
          ))}
        </div>
      </section>

      {activeImage && <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />}
    </>
  );
}
