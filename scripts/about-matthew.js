document.addEventListener("DOMContentLoaded", () => {
  const matthewSection = document.getElementById("about-matthew");

  // --- Configuration object ---
  const matthewConfig = {
    logo: {
      src: "images/rabbit.jpeg",
      alt: "Rabbit Logo",
      id: "rabbitlogo"
    },
    heading: "About Me Matthew Fearnley-Brown",
    paragraphs: [
      "Matthew Fearnley-Brown is your Live Entertainment, D.J, and Master of Ceremonies. You may know him as Matthew James, a rising local musician. If you have not heard of him, you definitely have HEARD him around town! Whether it is playing 4-5 times a week at local restaurants and bars, singing the National Anthems at Greyhounds games, or dancing the night away to his music and DJ sets at your friend’s wedding. Playing over 150 shows a year, Matthew has cultivated a very strong and dedicated following in the Sault area.",
      "Those who hear Matthew want to hear more! This is why Matthew is proud to have been voted the Sault’s Best Artist by KISS FM 2024, and Best Local Band, Entertainer, Live Entertainment, and...BEST WEDDING ENTERTAINMENT by Sault Ste Marie CommunityVotes 2024. Whether it is a new spin on and old classic, a faithful cover of your favourite song as you walk down the aisle, or an electric DJ set during your reception, Matthew has your entertainment covered! Conga line or not, His boundless energy and showmanship bring the “party” to your “Wedding party”.",
      "When he is not entertaining the North, he is teaching the next generation of students as a vocal coach! He loves his Toronto Maple Leafs (because crying is fun), he also loves playing with his dog and golfing with anyone who’s free! He is stoked to meet you on the dance floor!"
    ],
    headshot: {
      src: "images/headshotM-800.jpg",  // medium fallback
      alt: "Headshot of Matthew Fearnley-Brown",
      id: "headshotM",
      srcset: `
        images/headshotM-480.jpg 480w,
        images/headshotM-800.jpg 800w,
        images/headshotM-1200.jpg 1200w
      `,
      sizes: "(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
    }
  };

  // --- Build DOM elements ---

  // Logo
  const logoImg = document.createElement("img");
  logoImg.src = matthewConfig.logo.src;
  logoImg.alt = matthewConfig.logo.alt;
  logoImg.id = matthewConfig.logo.id;
  matthewSection.appendChild(logoImg);

  // Heading
  const headingEl = document.createElement("h2");
  headingEl.textContent = matthewConfig.heading;
  matthewSection.appendChild(headingEl);

  // Paragraphs
  matthewConfig.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    matthewSection.appendChild(p);
  });

  // Headshot
  const headshotImg = document.createElement("img");
  headshotImg.src = matthewConfig.headshot.src;
  headshotImg.alt = matthewConfig.headshot.alt;
  headshotImg.id = matthewConfig.headshot.id;

  // Responsive attributes
  headshotImg.setAttribute("srcset", matthewConfig.headshot.srcset);
  headshotImg.setAttribute("sizes", matthewConfig.headshot.sizes);

  matthewSection.appendChild(headshotImg);
});