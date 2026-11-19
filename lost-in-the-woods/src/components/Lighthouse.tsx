import { Icon } from "./Icon";
import "./Lighthouse.css";

type LightboxProps = {
  image: string;
  onClose: () => void;
};

export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button aria-label="Close image">
        <Icon name="close" />
      </button>
      <img src={image} alt="Expanded forest field recording" />
    </div>
  );
}
