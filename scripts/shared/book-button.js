document.addEventListener("DOMContentLoaded", () => {
  const bookSection = document.getElementById("book-button");

  // Create the link
  const linkEl = document.createElement("a");
  linkEl.href = "contact.html";

  // Create the button
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.textContent = "Book Now";

  // Put button inside link
  linkEl.appendChild(buttonEl);

  // Insert into the section
  bookSection.appendChild(linkEl);
});