document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("top");
  if (!headerEl) return;

const navConfig = {
    logo: {
      src: "images/logo.jpeg",
      alt: "Court & Spark Weddings logo",
      link: "index.html",
      id: "logo"
    },
    links: [
      { text: "Home", href: "index.html" },
      { text: "Packages", href: "packagesandpricing.html" },
      { text: "Portfolio", href: "portfolio.html" },
      { text: "Contact", href: "contact.html" }
    ],
    instagram: {
      href: "https://www.instagram.com/courtandsparkweddings",
      text: "@courtandsparkweddings"
    },
    rabbit: {
      src: "images/rabbit.jpeg",
      alt: "Decorative Rabbit Logo",
      id: "nav-rabbit"
    }
  };

  // --- Navbar wrapper ---
  const navWrapper = document.createElement("div");
  navWrapper.classList.add("navbar");

  // --- Logo ---
  const logoLink = document.createElement("a");
  logoLink.href = navConfig.logo.link;
  logoLink.classList.add("logo");

  const logoImg = document.createElement("img");
  logoImg.src = navConfig.logo.src;
  logoImg.alt = navConfig.logo.alt;
  logoImg.id = navConfig.logo.id;

  logoLink.appendChild(logoImg);
  navWrapper.appendChild(logoLink);

  // --- Toggle button (hamburger for mobile) ---
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("nav-toggle");
  toggleBtn.setAttribute("aria-label", "Toggle navigation");
  toggleBtn.innerHTML = "☰"; // Hamburger icon
  navWrapper.appendChild(toggleBtn);

  // --- Nav list ---
  const navList = document.createElement("ul");
  navList.classList.add("nav-links");

  // Add main links
  navConfig.links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    li.appendChild(a);
    navList.appendChild(li);
  });

  // Add rabbit image (decorative, before Instagram link)
  const rabbitItem = document.createElement("li");
  const rabbitImg = document.createElement("img");
  rabbitImg.src = navConfig.rabbit.src;
  rabbitImg.alt = navConfig.rabbit.alt;
  rabbitImg.id = navConfig.rabbit.id;
  rabbitItem.appendChild(rabbitImg);
  navList.appendChild(rabbitItem);

  // Add Instagram link
  const instaItem = document.createElement("li");
  instaItem.classList.add("nav-instagram");
  const instaLink = document.createElement("a");
  instaLink.href = navConfig.instagram.href;
  instaLink.textContent = navConfig.instagram.text;
  instaItem.appendChild(instaLink);
  navList.appendChild(instaItem);

  navWrapper.appendChild(navList);
  headerEl.appendChild(navWrapper);

  // --- Toggle dropdown behavior ---
  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});