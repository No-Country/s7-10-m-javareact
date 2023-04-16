import React from "react";
import { ImageStack } from "../../hooks/useImageStack";

export const HeaderCard = ({ profession }: any) => {
  console.log(profession);
  return (
    <div>
      <div className="bg-gray-100 w-20 h-20 xs:w-20xs:h-20 sm:h-20 rounded-md m-auto  border-solid border-2 border-orange-500 duration-100 ease-out transition hover:animate-none flex justify-center mt-4">
        {profession && <img src={profession.image} className="w-14 xs:w-18 xs:h-20 self-center" />}
      </div>
      <p className="text-center pt-0 mt-1 font-cagliostro">{profession.title}</p>
    </div>
  );
};
