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
    }
  }
];

const Header = () => {
  return <div>Header</div>;
};

export default Header;
