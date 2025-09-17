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