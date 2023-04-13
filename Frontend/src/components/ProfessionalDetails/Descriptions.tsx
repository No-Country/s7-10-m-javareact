import React from "react";
import data from "./data.json";

type Props = {};

const Descriptions = (props: Props) => {
  return (
    <div>
      <div className="text-start mx-8 py-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="py-2">"{data.description.text}"</p>
      </div>
    </div>
  );
};

export default Descriptions;
