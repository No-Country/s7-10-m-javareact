import React from "react";

export const ProfilePhoto = () => {
  return (
    <div className="relative">
      <div className="w-24 h-24 bg-blue-100 mx-auto rounded-full shadow-2xl inset-x-0 top-0 flex items-center justify-center text-[#004E98]/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
