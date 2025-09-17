/** --- Navigation Bar ---
 * Dynamically builds a responsive, accessible navigation bar.
 * Features:
 * - Logo linking to homepage
 * - Navigation links with optional dropdown for "Home"
 * - Rabbit logo decoration
 * - Instagram link opening in new tab
 * - Hamburger menu for small screens
 * - Accessibility features: ARIA attributes, keyboard navigation
*/

/** --- Build The Navigation Function ---
 * @param {Object} config - Configuration object for the navigation bar
 * 
 * ARIA attributes:
 * - aria-label="...": Describes the purpose of the nav element. Adds a description for screen readers.
 * - aria-expanded="true/false": Indicates whether the menu is expanded or collapsed. Tells if a menu is open or closed.
 * - aria-controls="nav-links": Identifies the element controlled by the toggle button. Says which element this button controls.
 * - aria-hidden="true": Hides decorative elements from screen readers. Prevents screen readers from announcing non-essential content.
 */
function buildNavigation(config) {
  const headerEl = document.getElementById("top"); // Find the HTML element with id="top"
  if (!headerEl) { // If the element is not found, log a warning and exit
    console.warn(`Navigation mount point #top not found`); // log warning
    return; // exit the function
  }

  const navWrapper = document.createElement("nav"); // Create a <nav> element
  navWrapper.classList.add("navbar");
  navWrapper.setAttribute("aria-label", "Main navigation");

  const logoLink = document.createElement("a"); // Create a link for the logo
  logoLink.href = config.logo.link;
  logoLink.classList.add("logo");

  const logoImg = document.createElement("img"); // Create the logo image
  logoImg.src = config.logo.src;
  logoImg.alt = config.logo.alt;
  logoImg.id = config.logo.id;
  logoLink.appendChild(logoImg); // Nest the logo image inside the link
  navWrapper.appendChild(logoLink); // Nest the logo link inside the nav

  const toggleBtn = document.createElement("button"); // Create the hamburger menu button
  toggleBtn.classList.add("nav-toggle");
  toggleBtn.setAttribute("aria-label", "Toggle navigation");
  toggleBtn.setAttribute("aria-expanded", "false");
  toggleBtn.setAttribute("aria-controls", "nav-links");
  toggleBtn.innerHTML = "☰";
  navWrapper.appendChild(toggleBtn); // Nest the button inside the nav

  const navList = document.createElement("ul"); // Create the list to hold navigation links
  navList.classList.add("nav-links");
  navList.id = "nav-links";

  config.links.forEach(link => { // Loop through each link in the config
    const li = document.createElement("li");

    if (link.text === "Home" && link.dropdown) { // if the link is "Home" and has a dropdown
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href;
      li.appendChild(a);

      const dropdown = document.createElement("ul"); // Create the dropdown menu
      dropdown.classList.add("dropdown");

      link.dropdown.forEach(item => { // Loop through to add each dropdown item
        const dropLi = document.createElement("li");
        const dropA = document.createElement("a");
        dropA.textContent = item.text;
        dropA.href = item.href;
        dropLi.appendChild(dropA); // Nest the link inside the list item
        dropdown.appendChild(dropLi); // Nest the list item inside the dropdown
      });
      
      li.appendChild(dropdown); // Nest the dropdown inside the "Home" list item
    } else {
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href;
      li.appendChild(a); // Nest the link inside the list item
    }

    navList.appendChild(li);
  });

  const rabbitItem = document.createElement("li"); // Decorative rabbit logo
  rabbitItem.setAttribute("aria-hidden", "true");
  const rabbitImg = document.createElement("img");
  rabbitImg.src = config.rabbit.src;
  rabbitImg.alt = config.rabbit.alt;
  rabbitImg.id = config.rabbit.id;
  rabbitItem.appendChild(rabbitImg);
  navList.appendChild(rabbitItem);

  const instaItem = document.createElement("li"); // Instagram link
  instaItem.classList.add("nav-instagram");
  const instaLink = document.createElement("a");
  instaLink.href = config.instagram.href;
  instaLink.textContent = config.instagram.text;
  instaLink.setAttribute("target", "_blank");
  instaLink.setAttribute("rel", "noopener noreferrer");
  instaLink.setAttribute("aria-label", "Visit our Instagram page (opens in new tab)");
  instaItem.appendChild(instaLink);
  navList.appendChild(instaItem);

  navWrapper.appendChild(navList); // Nest the nav list inside the nav
  headerEl.appendChild(navWrapper); // Finally, nest the entire nav inside the header

  // --- Event Listeners for Interactivity ---

  toggleBtn.addEventListener("click", () => { // Toggle menu visibility on button click
    const isExpanded = navList.classList.toggle("active");
    toggleBtn.setAttribute("aria-expanded", isExpanded.toString());
    
  
    if (isExpanded) { // If menu is now open, focus the first link
      const firstLink = navList.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  });

  document.addEventListener("keydown", (e) => { // Close menu on Escape key press
    if (e.key === "Escape" && navList.classList.contains("active")) {
      navList.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.focus();
    }
  });

  navList.querySelectorAll("li").forEach(li => { // Keyboard navigation for dropdowns
    const submenu = li.querySelector(".dropdown");
    if (submenu) {
      const link = li.querySelector("a");

      link.addEventListener("keydown", (e) => { // Open submenu on Enter or Space
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          submenu.classList.toggle("active");
        }
      });

      submenu.addEventListener("keydown", (e) => { // Close submenu on Escape
        if (e.key === "Escape") {
          submenu.classList.remove("active");
          link.focus();
        }
      });
    }
  });
}

const defaultNavConfig = {
  logo: {
    src: "images/logo.jpeg",
    alt: "Court & Spark Weddings logo",
    link: "index.html",
    id: "logo"
  },
  links: [
    { text: "Home", href: "index.html", dropdown: [{ text: "About", href: "#about-us"}, { text: "Reviews", href: "#reviews"}] },
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

document.addEventListener("DOMContentLoaded", () => { // Wait for the DOM to be fully loaded
  buildNavigation(defaultNavConfig); // Build the navigation menu, call the function
});