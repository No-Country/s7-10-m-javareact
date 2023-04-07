import React from "react";

const userData = [
  {
    name: "Jack",
    serviceCategories: [
      {
        role: "tag",
        order: "1"
      },
      {
        role: "tag",
        order: "2"
      },
      {
        role: "tag",
        order: "3"
      },
      {
        role: "tag",
        order: "4"
      }
    ],
    stars: "4.6",
    description: {
      text: "Hello, my name is Jack and I've been a plumber for over 10 years. I started my career as an apprentice, learning the ropes from experienced plumbers and gradually building up my skills and knowledge."
    },
    firstVisit: [
      "Inspect plumbing fixtures and appliances",
      "Water pressure test",
      "Pipes and drain check",
      "Inspect exposed pipes and joints for signs of leaks or damage."
    ],
    gallery: {
      url: ["url", "url", "url", "url"]
    },
    reviews: [
      {
        reviewer: "Juan",
        date: "08/05/22",
        text: "I would highly recommend this plumbing service to anyone in need of plumbing repairs. Jack and his team are skilled, reliable, and provide excellent customer service. I will definitely be using them again in the future.",
        stars: 4.8
      },
      {
        reviewer: "Antonella",
        date: "28/07/22",
        text: "He was polite, professional, and took the time to listen to my concerns and explain what needed to be done. He was able to quickly diagnose the problem and provide me with a quote, which was very reasonable.",
        stars: 4.5
      }
    ]
  }
];

const Header = () => {
  return <div>Header</div>;
};

export default Header;
