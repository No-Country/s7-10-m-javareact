import React, { useState } from "react";
import data from "./data.json";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useAppSelector } from "../../app/hooks";
import { selectProviderReviews } from "../../app/state/providerSlice";

type Props = {};

const Reviews = (props: Props) => {
  let select = useAppSelector(selectProviderReviews);

  const dataList = data.reviews;
  const reviewers = select.map((item, index): any => (
    <div key={index} className="py-4 ">
      <div className="flex flex-row-reverse mx-4 text-sm opacity-60">{item?.creationDate}</div>
      <div className="flex py-2 justify-center items-center">
        <h2 className="flex text-start text-xl font-Inter-Italic">
          {item.rating}
          {item?.rating === 5 ? (
            <BsStarFill className="mx-2 mt-[3px]" />
          ) : (
            <BsStarHalf className="mx-2 mt-[3px]" />
          )}
        </h2>
        <p className="mx-auto text-md font-semibold font-Inter-Italic">{item?.nameClient}</p>
      </div>
      <p className="opacity-75 ">"{item.comment}"</p>
    </div>
  ));

  return (
    <>
      <div>
        <div className="mx-8 font-inter_italic">
          <h2 className="text-2xl font-semibold font-georama">Reviews</h2>
          <div>{reviewers}</div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
