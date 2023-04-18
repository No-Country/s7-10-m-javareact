import React from "react";
import data from "./data.json";

type Props = {};

const FirstVisit = (props: Props) => {
  const dataList = data.firstVisit;
  const listItems = dataList.map(items => (
    <li className="list-disc" key={items}>
      {items}
    </li>
  ));
  return (
    <div>
      <div className="text-start mx-8 py-4">
        <h2 className="text-2xl font-semibold font-georama">First Visit Includes:</h2>
        <ol className="py-2 mx-4 font-inter_italic">{listItems}</ol>
      </div>
    </div>
  );
};

export default FirstVisit;
