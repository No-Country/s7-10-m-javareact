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
      <div className="m-auto max-w-7xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:md:grid-cols-6 p-0 gap-0">
        {images.slice(0, showAllImages ? images.length : numImagesToShow).map(profession => (
          
            <Link to="www.example.com" key={profession.id}>
              <div className="bg-gray-100 w-20 h-20 xs:w-28 xs:h-28 sm:h-28 rounded-md m-auto hover:bg-gray-300 border-solid border-2 border-orange-500  flex justify-center mt-4">
                <img src={profession.image} className="w-14 h-16 xs:w-16 xs:h-18 self-center" />
              </div>
              <p className="text-center pt-0 mt-1">{profession.title}</p>
            </Link>
          
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
