// This file contains a function that scrolls to a specific section of the page

export function scrollToSection(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}
