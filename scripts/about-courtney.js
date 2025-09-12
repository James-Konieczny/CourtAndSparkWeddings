document.addEventListener("DOMContentLoaded", () => {
    const courtneySection = document.getElementById("about-courtney");

    // --- Configuration object ---
    const courtneyConfig = {
        logo: {
            src: "images/rabbit.jpeg",
            alt: "Rabbit Logo",
            id: "rabbitlogo"
        },
        heading: "About Me Courtney Doyle-Evans.",
        paragraphs: [
            "Courtney Doyle-Evans is your Baker and Photographer. Having successfully run two companies in her hometown of Chapleau, ON, the owner of Cakes by Courtney & Captured by Courtney, has been providing her keen eye and crafty spirit to happy couples in the North for more than 6 years. Courtney excels in everything she does; whether it is catching the beauty of the first moment your see your true love at the end of the aisle, the detail and care of your favourite flavours coming to life, or the comfort of organizing your loved ones and swiftly capturing moments that will last a lifetime in your home, she is hard to beat.",
            "When Courtney isn’t creating life-long memories, she can be found at her other role as a financial service representative. Her approachable and professional demeanour install both trust and optimism in her clients, and she is rapidly making a name for herself as a stand out in her field. The trust of dealing with people’s most precious resources on a daily basis make Courtney acutely qualified in handling your biggest day!",
            "When she finds a brief moment for herself, she loves collecting rocks and shells, watching One Tree Hill, and playing with her dog Taz, and her new niece, Cleo! She cannot wait to meet you and make your wedding dreams come true!",
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
    };

    // --- Build DOM elements ---
    
    // Logo
const logoImg = document.createElement("img");
  logoImg.src = courtneyConfig.logo.src;
  logoImg.alt = courtneyConfig.logo.alt;
  logoImg.id = courtneyConfig.logo.id;
  courtneySection.appendChild(logoImg);

  // Heading
  const headingEl = document.createElement("h2");
  headingEl.textContent = courtneyConfig.heading;
  courtneySection.appendChild(headingEl);

  // Paragraphs
  courtneyConfig.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    courtneySection.appendChild(p);
  });

  // Headshot
  const headshotImg = document.createElement("img");
  headshotImg.src = courtneyConfig.headshot.src;
  headshotImg.alt = courtneyConfig.headshot.alt;
  headshotImg.id = courtneyConfig.headshot.id;

  // Responsive attributes
  headshotImg.setAttribute("srcset", courtneyConfig.headshot.srcset);
  headshotImg.setAttribute("sizes", courtneyConfig.headshot.sizes);

  courtneySection.appendChild(headshotImg);
});