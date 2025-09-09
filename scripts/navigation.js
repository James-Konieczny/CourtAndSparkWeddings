document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("top");

// //   Wrapper for the entire navbar
  const navWrapper = document.createElement("div");
  navWrapper.classList.add("navbar");

  // --- Logo ---
  const logoLink = document.createElement("a");
  logoLink.href = "index.html";
  logoLink.classList.add("logo");

  const logoImg = document.createElement("img");
  logoImg.src = "images/logo.jpeg";
  logoImg.alt = "Court & Spark Weddings logo";

  logoLink.appendChild(logoImg);
  navWrapper.appendChild(logoLink);

  // --- Menu toggle button (shows on small screens) ---
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("nav-toggle");
  toggleBtn.setAttribute("aria-label", "Toggle navigation");
  toggleBtn.innerHTML = "☰"; // hamburger symbol
  navWrapper.appendChild(toggleBtn);

  // --- Menu items ---
  const navList = document.createElement("ul");
  navList.classList.add("nav-links");

  const pages = [
    { name: "Home", href: "index.html" },
    { name: "Packages", href: "packagesandpricing.html" },
    { name: "Portfolio", href: "portfolio.html" },
    { name: "Contact", href: "contact.html" }
  ];

  pages.forEach(page => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = page.name;
    a.href = page.href;
    li.appendChild(a);
    navList.appendChild(li);
  });

  // --- Instagram link ---
  const instaItem = document.createElement("li");
  instaItem.classList.add("nav-instagram");
  const instaLink = document.createElement("a");
  instaLink.href = "https://www.instagram.com/courtandsparkweddings";
  instaLink.textContent = "@courtandsparkweddings";
  instaItem.appendChild(instaLink);
  navList.appendChild(instaItem);

  navWrapper.appendChild(navList);

  // Insert into page
  header.appendChild(navWrapper);

  // --- Toggle dropdown behavior ---
  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
