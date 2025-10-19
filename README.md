# CourtAndSparkWeddings
Custom website

# Notes, Descriptions, and More

## navigation.js
**Variable Cheatsheet**
-----------------------
**Function Parameters**
- config
    - Comes from defaultNavConfig when buildNavigation(config) is called.
    - Holds all customizable data: logo, links, dropdowns, Instagram, rabbit.

**Main Function Variables**
- headerEl
    - DOM element with id="top".
    - Parent container where the nav bar will be inserted.

- navWrapper
    - A <nav> element created dynamically.
    - Gets class .navbar (your main nav container).

- logoLink
    - An <a> element wrapping your logo image.
    - Gets class .logo.

- logoImg
    - An <img> element for the logo inside logoLink.
    - Gets id="logo" (from config).

- toggleBtn
    - A <button> element for the hamburger menu.
    - Gets class .nav-toggle.
    - Has ARIA attributes (aria-label, aria-expanded, etc.).

- navList
    - A <ul> element holding all nav links.
    - Gets class .nav-links and id="nav-links".

**Inside Links Loop**
- li
    - A <li> created for each link in config.links.
    - May contain a plain <a> or a dropdown menu.

- a (inside loop)
    - An <a> link for each nav item (like Home, Packages, etc.).
    - textContent and href come from config.links.

- dropdown
    - A <ul> created only if the link has a dropdown (currently “Home”).
    - Gets class .dropdown.

- dropLi
    - A <li> inside the dropdown.

- dropA
    - An <a> inside each dropdown <li>.

**Decorative & Social Media Items**
- rabbitItem
    - A <li> holding the decorative rabbit image.
    - Has aria-hidden="true".

- rabbitImg
    - The <img> inside rabbitItem.
    - Gets id="nav-rabbit".

- instaItem
    - A <li> holding the Instagram link.
    - Gets class .nav-instagram.

- instaLink
    - An <a> inside instaItem.
    - Opens in new tab, with ARIA label.

**Event Listener Variables**
- isExpanded
    - Boolean result of navList.classList.toggle("active").
    - True = menu is open, False = closed.

- firstLink
    - The first <a> inside navList, used for keyboard focus when the hamburger opens.

- submenu
    - A <ul> with class .dropdown, if it exists inside a <li>.

- link (inside dropdown keyboard logic)
    - The <a> that toggles its dropdown submenu.

**Config Object Variables (defaultNavConfig)**
These aren’t DOM elements, but they’re the source of content/attributes:

- logo.src, logo.alt, logo.link, logo.id
- links (array of nav items, some with dropdowns)
- instagram.href, instagram.text
- rabbit.src, rabbit.alt, rabbit.id

**Summary for CSS**
.navbar → main container
.logo / #logo → logo link & image
.nav-toggle → hamburger button
.nav-links / #nav-links → UL for nav items
.dropdown → dropdown menus
.nav-instagram → Instagram list item
#nav-rabbit → decorative rabbit image


#top {
  position: sticky;
  top: 0;
  /* display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #1A4D1A;
  padding: 0.5em 1em; */
  z-index: 1000;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1A4D1A;
  padding: 0.5em 1em;
}

.navbar .logo img {
  height: 70px;
  margin-bottom: -50px;
}

.nav-toggle {
  display: none;
  font-size: 2em;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0em 0em 0em 11em;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

#nav-rabbit {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.nav-links li .dropdown {
  display: none;
  position: absolute;
  background-color: #064420;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
  z-index: 1000;
}

.nav-links li .dropdown li a {
  padding: 0.5rem 1rem;
}

.nav-links li:hover .dropdown,
.nav-links li:focus-within .dropdown {
  display: block;
}

#book-button {
  text-align: center;
  margin: 2em 0;
}

#book-button button {
  background-color: #1A4D1A; /* dark green */
  color: white;
  font-size: 1.2em;
  padding: 0.6em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#book-button button:hover {
  background-color: #145014; /* slightly lighter green */
}


/* Mobile styles */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #1A4D1A;
    width: 100%;
    text-align: center;
  }
  .nav-links.active {
    display: flex;
  }
  .nav-links li .dropdown {
    position: static;
  }
  .nav-instagram {
    margin-top: 1em;
  }
}
