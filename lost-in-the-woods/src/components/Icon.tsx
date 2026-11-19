import {
  Compass,
  Eye,
  Moon,
  Menu,
  X,
  ArrowRight,
  Play,
  Volume2,
} from "lucide-react";

import "./Icon.css";

const icons = {
  compass: Compass,
  eye: Eye,
  moon: Moon,
  menu: Menu,
  close: X,
  arrow: ArrowRight,
  play: Play,
  sound: Volume2,
};

export type IconName = keyof typeof icons;

export function Icon({ name }: { name: IconName }) {
  const IconComponent = icons[name];

  return <IconComponent className="app-icon" aria-hidden="true" />;
}
