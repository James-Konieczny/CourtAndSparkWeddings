// scripts/about.js

function buildAboutSection(config, mountPointId) {
  const sectionEl = document.getElementById(mountPointId);
  if (!sectionEl) {
    console.warn(`About section #${mountPointId} not found`);
    return;
  }

  // --- Logo ---
  const logoImg = document.createElement("img");
  logoImg.src = config.logo.src;
  logoImg.alt = config.logo.alt;
  logoImg.id = config.logo.id;
  sectionEl.appendChild(logoImg);

  // --- Heading ---
  const headingEl = document.createElement("h2");
  headingEl.textContent = config.heading;
  sectionEl.appendChild(headingEl);

  // --- Paragraphs ---
  config.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.innerHTML = text; // innerHTML so links can work
    sectionEl.appendChild(p);
  });

  // --- Headshot ---
  const headshotImg = document.createElement("img");
  headshotImg.src = config.headshot.src;
  headshotImg.alt = config.headshot.alt;
  headshotImg.id = config.headshot.id;

  if (config.headshot.srcset) {
    headshotImg.setAttribute("srcset", config.headshot.srcset);
  }
  if (config.headshot.sizes) {
    headshotImg.setAttribute("sizes", config.headshot.sizes);
  }

  sectionEl.appendChild(headshotImg);
}

// --- Shared logo config ---
const rabbitLogo = {
  src: "images/rabbit.jpeg",
  alt: "Rabbit Logo",
  id: "rabbitlogo"
};

// --- Default configs for each section ---
const aboutConfigs = {
  "about-us": {
    logo: rabbitLogo,
    heading: "About Us",
    paragraphs: [
      "So nice to meet you!",
      "We are so glad you chose us to help take your special day to the next level!",
      "As a (now engaged) couple, we have spent years individually honing our crafts and providing top tier photography, baking, and live entertainment for weddings across the North. After moving from Chapleau to the Sault area in early 2022, we decided combine our efforts and focus our energy into what we truly love ...Love!",
      "Being a part of many of our friends and familiars’ big days opened our eyes to the most important elements to planning any wedding. They are: peace and joy. We understand how difficult it is to find vendors, budget both your time and hard earned dollars, organize all of those moving parts, fill out the rest of the day with all of your must-haves and moments, and, most of all, still find TIME to be excited about the best day of your lives!",
      "Thus, COURT & SPARK was born. With our specially curated packages, you can enjoy the peace of mind that organizing 4 wedding day services in 1 meeting brings you. We are proud of our work, and so thrilled to be a small part of your big day!",
      `<a href="contact.html">Send us a message</a>, and let’s meet for coffee (or wine!) and let us see how we can bring you the peace of mind and the joy of the day you deserve!`,
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
  },
  "about-courtney": {
    logo: rabbitLogo,
    heading: "About Me Courtney Doyle-Evans.",
    paragraphs: [
      "Courtney Doyle-Evans is your Baker and Photographer. Having successfully run two companies in her hometown of Chapleau, ON, the owner of Cakes by Courtney & Captured by Courtney, has been providing her keen eye and crafty spirit to happy couples in the North for more than 6 years. Courtney excels in everything she does; whether it is catching the beauty of the first moment your see your true love at the end of the aisle, the detail and care of your favourite flavours coming to life, or the comfort of organizing your loved ones and swiftly capturing moments that will last a lifetime in your home, she is hard to beat.",
      "When Courtney isn’t creating life-long memories, she can be found at her other role as a financial service representative. Her approachable and professional demeanour install both trust and optimism in her clients, and she is rapidly making a name for herself as a stand out in her field. The trust of dealing with people’s most precious resources on a daily basis make Courtney acutely qualified in handling your biggest day!",
      "When she finds a brief moment for herself, she loves collecting rocks and shells, watching One Tree Hill, and playing with her dog Taz, and her new niece, Cleo! She cannot wait to meet you and make your wedding dreams come true!"
    ],
    headshot: {
      src: "images/headshotC-800.jpeg",
      alt: "Headshot of Courtney Doyle-Evans",
      id: "headshotC",
      srcset: `
        images/headshotC-480.jpg 480w,
        images/headshotC-800.jpg 800w,
        images/headshotC-1200.jpg 1200w
      `,
      sizes: "(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
    }
  },
  "about-matthew": {
    logo: rabbitLogo,
    heading: "About Me Matthew Fearnley-Brown",
    paragraphs: [
      "Matthew Fearnley-Brown is your Live Entertainment, D.J, and Master of Ceremonies. You may know him as Matthew James, a rising local musician. If you have not heard of him, you definitely have HEARD him around town! Whether it is playing 4-5 times a week at local restaurants and bars, singing the National Anthems at Greyhounds games, or dancing the night away to his music and DJ sets at your friend’s wedding. Playing over 150 shows a year, Matthew has cultivated a very strong and dedicated following in the Sault area.",
      "Those who hear Matthew want to hear more! This is why Matthew is proud to have been voted the Sault’s Best Artist by KISS FM 2024, and Best Local Band, Entertainer, Live Entertainment, and...BEST WEDDING ENTERTAINMENT by Sault Ste Marie CommunityVotes 2024. Whether it is a new spin on and old classic, a faithful cover of your favourite song as you walk down the aisle, or an electric DJ set during your reception, Matthew has your entertainment covered! Conga line or not, His boundless energy and showmanship bring the “party” to your “Wedding party”.",
      "When he is not entertaining the North, he is teaching the next generation of students as a vocal coach! He loves his Toronto Maple Leafs (because crying is fun), he also loves playing with his dog and golfing with anyone who’s free! He is stoked to meet you on the dance floor!"
    ],
    headshot: {
      src: "images/headshotM-800.jpg",
      alt: "Headshot of Matthew Fearnley-Brown",
      id: "headshotM",
      srcset: `
        images/headshotM-480.jpg 480w,
        images/headshotM-800.jpg 800w,
        images/headshotM-1200.jpg 1200w
      `,
      sizes: "(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
    }
  }
};

// Auto-build on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(aboutConfigs).forEach(sectionId => {
    buildAboutSection(aboutConfigs[sectionId], sectionId);
  });
});
