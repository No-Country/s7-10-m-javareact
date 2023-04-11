import React, { useState } from "react";
import data from "./data.json";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

type Props = {};

const Reviews = (props: Props) => {
  const dataList = data.reviews;
  const reviewers = dataList.map((item, index): any => (
    <div key={index} className="py-4">
      <div className="flex flex-row-reverse mx-4 text-sm opacity-60">{item?.date}</div>
      <div className="flex py-2 justify-center items-center">
        <h2 className="flex text-start text-xl">
          {item.stars}
          {item?.stars === 5 ? <BsStarFill className="mx-2" /> : <BsStarHalf className="mx-2" />}
        </h2>
        <p className="mx-auto text-md font-semibold ">{item?.reviewer}</p>
      </div>
      <p className="opacity-75">"{item.text}"</p>
    </div>
  ));

  return (
    <>
      <div>
        <div className="mx-8">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <div>{reviewers}</div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
