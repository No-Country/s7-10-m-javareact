import React from "react";

export const RequestMenu = () => {
  return (
    <div className="bg-red w-full h-8 flex justify-around font-inter_regular font-semibold">
      <p className="border-b-4 text-[#004E98] border-[#004E98] w-full text-center">Approved</p>
      <p className="border-b-4 	 w-full text-gray text-center">pending</p>
    </div>
  );
};
