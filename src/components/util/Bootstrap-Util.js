export function collapseHamburger(toggleExternalID, document) {
  const nav = document
    .createElement("nav")
    .classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");
  const container = document
    .createElement("div")
    .classList.add("container-fluid");
  const toggle = document
    .createElement("button")
    .classList.add("navbar-toggler");
  toggle.setAttribute("type", "button");
  toggle.setAttribute("data-bs-toggle", "collapse");
  toggle.setAttribute("data-bs-target", "#" + toggleExternalID);
  toggle.setAttribute("aria-controls", toggleExternalID);
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Toggle navigation");

  const span = document
    .createElement("span")
    .classList.add("navbar-toggler-icon");

  nav.appendChild(container);
  container.appendChild(toggle);
  toggle.appendChild(span);
}
