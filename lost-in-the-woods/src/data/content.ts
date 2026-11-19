import abandonedVillage from "../assets/concept-art/abandoned-village.png";
import explorerSymbols from "../assets/concept-art/explorer-deciphers-tree-symbols.png";
import forestSpirit from "../assets/concept-art/forest-spirit-at-the-crossroads.png";
import heartOfForest from "../assets/concept-art/heart-of-the-forest.png";
import heroBanner from "../assets/website/hero-banner-detailed.png";
import titleArtwork from "../assets/branding/lost-in-the-woods-title.png";
import silentLake from "../assets/concept-art/silent-lake.png";
import strangerKey from "../assets/concept-art/stranger-offers-a-key.png";
import theWatcher from "../assets/concept-art/the-watcher.png";
import type { IconName } from "../components/Icon";

export const navigationItems = ["Home", "Story", "Features", "World", "Gallery", "Contact"];

export const artwork = {
  hero: heroBanner,
  title: titleArtwork,
  story: explorerSymbols,
  world: heartOfForest,
  village: abandonedVillage,
} as const;

export const features: Array<{
  number: string;
  icon: IconName;
  title: string;
  description: string;
}> = [
  {
    number: "01",
    icon: "compass",
    title: "A WORLD THAT SHIFTS",
    description:
      "Trails rearrange after dark. Landmarks vanish. Maps become unreliable. Learn the forest’s rhythm—or become part of it.",
  },
  {
    number: "02",
    icon: "eye",
    title: "FOLLOW THE SIGNS",
    description:
      "Decode symbols, recover fragmented memories and decide which voices in the static deserve your trust.",
  },
  {
    number: "03",
    icon: "moon",
    title: "SURVIVE THE NIGHT",
    description:
      "Light is precious. Manage your supplies, build shelter and stay silent when something moves beyond the firelight.",
  },
];

export const galleryItems = [
  {
    src: forestSpirit,
    title: "The crossroads",
    meta: "Day 01 — 06:42",
  },
  {
    src: theWatcher,
    title: "The watcher",
    meta: "Day 03 — 17:16",
  },
  {
    src: abandonedVillage,
    title: "The village",
    meta: "Day 05 — 23:08",
  },
  {
    src: silentLake,
    title: "Silent water",
    meta: "Day 07 — Time unknown",
  },
  {
    src: strangerKey,
    title: "The offering",
    meta: "Day 09 — 04:11",
  },
] as const;
