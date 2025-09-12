document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about-us");

  // --- Configuration object ---
  const aboutConfig = {
    logo: {
      src: "images/rabbit.jpeg",
      alt: "Rabbit Logo",
      id: "rabbitlogo"
    },
    heading: "About Us",
    paragraphs: [
      "So nice to meet you!",
      "We are so glad you chose us to help take your special day to the next level!",
      "As a (now engaged) couple, we have spent years individually honing our crafts and providing top tier photography, baking, and live entertainment for weddings across the North. After moving from Chapleau to the Sault area in early 2022, we decided combine our efforts and focus our energy into what we truly love ...Love!",
      "Being a part of many of our friends and familiars’ big days opened our eyes to the most important elements to planning any wedding. They are: peace and joy. We understand how difficult it is to find vendors, budget both your time and hard earned dollars, organize all of those moving parts, fill out the rest of the day with all of your must-haves and moments, and, most of all, still find TIME to be excited about the best day of your lives!",
      "Thus, COURT & SPARK was born. With our specially curated packages, you can enjoy the peace of mind that organizing 4 wedding day services in 1 meeting brings you. We are proud of our work, and so thrilled to be a small part of your big day!",
      ` <a href="contact.html">Send us a message</a>, and let’s meet for coffee (or wine!) and let us see how we can bring you the peace of mind and the joy of the day you deserve!`,
      "With Love, Sincerely, Courtney & Matthew"
    ],
    headshot: {
      src: "images/headshotB-800.jpeg",
      alt: "Courtney and Matthew smiling at the camera",
      id: "headshotB",
      srcset: `
      images/headshotB-480.jpg 480w,
      images/headshotB-800.jpg 800w,
      images/headshotB-1200.jpg 1200w
      `,
      sizes: "(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
    }
  };

  // --- Build DOM elements ---

  // Logo
  const logoImg = document.createElement("img");
  logoImg.src = aboutConfig.logo.src;
  logoImg.alt = aboutConfig.logo.alt;
  logoImg.id = aboutConfig.logo.id;
  aboutSection.appendChild(logoImg);

  // Heading
  const headingEl = document.createElement("h2");
  headingEl.textContent = aboutConfig.heading;
  aboutSection.appendChild(headingEl);

  // Paragraphs
  aboutConfig.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.innerHTML = text;
    aboutSection.appendChild(p);
  });

  // Headshot
  const headshotImg = document.createElement("img");
  headshotImg.src = aboutConfig.headshot.src;
  headshotImg.alt = aboutConfig.headshot.alt;
  headshotImg.id = aboutConfig.headshot.id;
  
  if (aboutConfig.headshot.srcset) {
    headshotImg.setAttribute("srcset", aboutConfig.headshot.srcset);
  }
  if (aboutConfig.headshot.sizes) {
    headshotImg.setAttribute("sizes", aboutConfig.headshot.sizes);
  }

  aboutSection.appendChild(headshotImg);
});
