// scripts/book-button.js

function buildBookButton(config, mountPointId = "book-button") {
  const sectionEl = document.getElementById(mountPointId);
  if (!sectionEl) {
    console.warn(`Book button mount point #${mountPointId} not found`);
    return;
  }

  // --- Link wrapper ---
  const linkEl = document.createElement("a");
  linkEl.href = config.href;

  // --- Button ---
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.textContent = config.text;

  // Accessibility: tell screen readers what the button does
  buttonEl.setAttribute("aria-label", config.ariaLabel);

  // Nest button inside link
  linkEl.appendChild(buttonEl);

  // Insert into page
  sectionEl.appendChild(linkEl);
}

// Export a default config
const defaultBookButtonConfig = {
  href: "contact.html",
  text: "Book Now",
  ariaLabel: "Book now by visiting the contact page"
};

// Auto-build on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  buildBookButton(defaultBookButtonConfig);
});