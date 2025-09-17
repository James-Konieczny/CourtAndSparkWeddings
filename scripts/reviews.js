// scripts/reviews.js

function buildReviews(config, mountPointId = "reviews") {
  const reviewsSection = document.getElementById(mountPointId);
  if (!reviewsSection) {
    console.warn(`Reviews mount point #${mountPointId} not found`);
    return;
  }

  config.forEach((review) => {
    // --- Decorative rabbit logo ---
    const logoImg = document.createElement("img");
    logoImg.src = review.logo.src;
    logoImg.alt = review.logo.alt;
    logoImg.classList.add(review.logo.className);

    // --- Couple name ---
    const heading = document.createElement("h2");
    heading.textContent = `- ${review.couple}`;

    // --- Review text ---
    const p = document.createElement("p");
    p.textContent = review.text;

    // Append in order
    reviewsSection.appendChild(logoImg);
    reviewsSection.appendChild(heading);
    reviewsSection.appendChild(p);
  });
}

// --- Default config ---
const defaultReviewsConfig = [
  {
    couple: "Carly & Dave",
    text: "Matthew James was easily the highlight of our wedding! He personalized the songs for my father-daughter dance and my husband’s mother-son dance, and his voice literally moved me to tears! He mixed in new and old classics that everyone could vibe to! Our friends and family have not stopped talking about how amazing he was! He was also so accommodating and made everything super easy! He showed up early, stayed late, and was super flexible with everything. If you’re looking for someone who’ll make your wedding (or any event) truly unforgettable, Matt is your guy! We’re so grateful to have had him as part of our day, we honestly we couldn’t have asked for anything better! Thanks so much Matt!",
    logo: {
      src: "images/rabbittitle.jpeg",
      alt: "Rabbit Logo",
      className: "rabbittitle"
    }
  },
  {
    couple: "David & Hannah",
    text: "I speak on behalf of both Hannah and I, Matthew was absolutely amazing, and we are so happy that he was able to be a part of our day with such a key role in particular. It was all perfect, the day and the evening. It really set the tone with the entry music and ceremony. Also, my GOODNESS, the cake was unbelievable, so delicious that it is dangerous. Thank you Courtney for putting strong effort into that as not only did it taste good, it looked good! We appreciate what Matthew and Courtney have done for us, and the work you put in.",
    logo: {
      src: "images/rabbittitle.jpeg",
      alt: "Rabbit Logo",
      className: "rabbittitle"
    }
  },
  {
    couple: "Brandon & Cassandra",
    text: "We had the pleasure of having Matthew James provide live music and entertainment for our wedding reception at Northern Superior Brewery, and he was absolutely amazing! He was easy to work with, accommodated all of our wedding song requests perfectly, and kept everyone entertained, singing, and dancing all night long. Our guests couldn’t stop raving about him and were even asking us for his contact information. Matthew’s talent, combined with his friendly and personable nature, made him a highlight of our day. If you’re considering live music for your event, I highly recommend booking him ASAP!",
    logo: {
      src: "images/rabbittitle.jpeg",
      alt: "Rabbit Logo",
      className: "rabbittitle"
    }
  },
  {
    couple: "Amanda S.",
    text: "We had heard Matthew play at several venues in Sault Ste. Marie and when we got engaged we reached out to him immediately to see if he could be part of our special day. He became one of the reasons it was a truly magical day and entertained us all evening. He is extremely kind, very easy to work with, and incredibly talented.",
    logo: {
      src: "images/rabbittitle.jpeg",
      alt: "Rabbit Logo",
      className: "rabbittitle"
    }
  }
];

// Auto-build on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  buildReviews(defaultReviewsConfig);
});