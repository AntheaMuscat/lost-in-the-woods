import { Icon } from "./Icon";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <span className="brand-mark">
          <Icon name="compass" />
        </span>
      </div>
      <p>© 2026 Northstar Interactive. A fictional game concept.</p>
      <div>
        <a href="#home">Privacy</a>
        <a href="#home">Press kit</a>
        <a href="#home">Social</a>
      </div>
    </footer>
  );
}
