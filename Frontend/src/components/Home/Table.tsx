import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useImageStack } from "../../hooks/useImageStack";
import { Link } from "react-router-dom";

export const Table = () => {
  const images = useImageStack();
  const [showAllImages, setShowAllImages] = useState(false); // Estado para indicar si se deben mostrar todas las imágenes
  const numImagesToShow = 12; // Número de imágenes a mostrar inicialmente

  const handleShowAllImages = () => {
    setShowAllImages(true); // Actualiza el estado para mostrar todas las imágenes
  };

  const handleHideAllImages = () => {
    setShowAllImages(false); // Actualiza el estado para ocultar las imágenes
  };

  return (
    <>
      <h1 className="text-xl font-cagliostro mt-5 px-4 py-4">Choose among the categories</h1>
      <div className="m-auto max-w-7xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:md:grid-cols-6 p-0 gap-0">
        {images.slice(0, showAllImages ? images.length : numImagesToShow).map(profession => (
          <Link to={`/professionals/${profession.id}`} key={profession.id}>
            <div className="bg-gray-100 hover:scale-110 w-20 h-20 xs:w-28 xs:h-28 sm:h-28 rounded-md m-auto hover:bg-gray-300 hover:border-[#004E98] border-solid border-2 animate-pulse border-orange-500 duration-100 ease-out transition hover:animate-none flex justify-center mt-4">
              <img src={profession.image} className="w-12 xs:w-16 xs:h-18 self-center" />
            </div>
            <p className="text-center pt-0 mt-1 font-cagliostro">{profession.title}</p>
          </Link>
        ))}
      </div>
      {!showAllImages && (
        <div className="m-auto cursor-pointer max-w-lg" onClick={handleShowAllImages}>
          <div className="justify-center align-content-center px-4 py-6">
            <p className="border-2 border-solid text-2xl font-normal rounded-[32px] text-center py-2 transition hover:bg-gray-300 border-[#004E98] text-[#004E98]">
              Show more
            </p>
          </div>
        </div>
      )}
      {showAllImages && (
        <div className="m-auto cursor-pointer max-w-lg" onClick={handleHideAllImages}>
          <div className="justify-center align-content-center px-4 py-6">
            <p className="border-2 border-solid text-2xl font-normal rounded-[32px] text-center py-2 transition hover:bg-gray-300 border-[#004E98] text-[#004E98]">
              Hide
            </p>
          </div>
        </div>
      )}
    </>
  );
};
