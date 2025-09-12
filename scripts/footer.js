document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("site-footer");

  const copyright = document.createElement("p");
  copyright.innerHTML = "&copy; 2025 Court & Spark Weddings";

  const insta = document.createElement("p");
  insta.innerHTML = `Visit Our Instagram Page <a href="https://www.instagram.com/courtandsparkweddings">@courtandsparkweddings</a>`;

  const backToTop = document.createElement("a");
  backToTop.href = "#";
  backToTop.title = "Back to top";
  backToTop.textContent = "◤";

  footer.appendChild(copyright);
  footer.appendChild(insta);
  footer.appendChild(backToTop);
});