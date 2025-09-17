// scripts/footer.js

function buildFooter(config, mountPointId = "site-footer") {
  const footerEl = document.getElementById(mountPointId);
  if (!footerEl) {
    console.warn(`Footer mount point #${mountPointId} not found`);
    return;
  }

  // --- Copyright ---
  const copyright = document.createElement("p");
  copyright.innerHTML = `&copy; ${config.year} ${config.company}`;

  // --- Instagram link ---
  const insta = document.createElement("p");
  const instaLink = document.createElement("a");
  instaLink.href = config.instagram.href;
  instaLink.textContent = config.instagram.text;
  instaLink.setAttribute("target", "_blank"); // Open in new tab
  instaLink.setAttribute("rel", "noopener noreferrer"); // Security best practice
  instaLink.setAttribute(
    "aria-label",
    "Visit our Instagram page (opens in new tab)"
  );

  insta.textContent = config.instagram.prefix + " ";
  insta.appendChild(instaLink);

  // --- Back to top link ---
  const backToTop = document.createElement("a");
  backToTop.href = "#top"; // ensure you have id="top" in your <header>
  backToTop.title = "Back to top";
  backToTop.textContent = "◤";

  // Smooth scroll back to top (instead of jumping)
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Append everything to footer
  footerEl.appendChild(copyright);
  footerEl.appendChild(insta);
  footerEl.appendChild(backToTop);
}

// Export a default config
const defaultFooterConfig = {
  year: new Date().getFullYear(),
  company: "Court & Spark Weddings",
  instagram: {
    prefix: "Visit Our Instagram Page",
    href: "https://www.instagram.com/courtandsparkweddings",
    text: "@courtandsparkweddings"
  }
};

// Auto-build on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  buildFooter(defaultFooterConfig);
});