import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useImageStack } from "../../hooks/useImageStack";

type PropsCategories = {
  addCategory: (category: string) => void;
  categories: string[];
};

export const Categories = ({ addCategory, categories }: PropsCategories) => {
  const images = useImageStack();
  const [showAllImages, setShowAllImages] = useState(false);

  const numImagesToShow = 9;

  const handleShowAllImages = () => {
    setShowAllImages(true);
  };

  const handleHideAllImages = () => {
    setShowAllImages(false);
  };

  return (
    <>
      <div className="m-auto max-w-7xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 p-0 gap-0">
        {images.slice(0, showAllImages ? images.length : numImagesToShow).map(profession => (
          <button
            type="button"
            key={profession.title}
            onClick={() => addCategory(profession.title)}
          >
            <div
              className={
                categories.find(c => c == profession.title)
                  ? "bg-gray-300 w-28 h-28 sm:h-28 rounded-md m-auto  border-solid border-2 border-orange-500  flex justify-center mt-4"
                  : "bg-gray-100 w-28 h-28 sm:h-28 rounded-md m-auto  border-solid border-2 border-orange-500  flex justify-center mt-4"
              }
            >
              <img src={profession.image} className="w-16 h-18 self-center" />
            </div>
            <p className="text-center pt-0 mt-1">{profession.title}</p>
          </button>
        ))}
      </div>
      {!showAllImages && (
        <div className="w-12 h-12 m-auto cursor-pointer" onClick={handleShowAllImages}>
          <AiOutlinePlusCircle className="w-full h-full mt-8 mb-8 animate-bounce" />
        </div>
      )}
      {showAllImages && (
        <div className="w-12 h-12 m-auto cursor-pointer" onClick={handleHideAllImages}>
          <AiOutlineMinusCircle className="w-full h-full mt-8 mb-8 animate-bounce" />
        </div>
      )}
    </>
  );
};
