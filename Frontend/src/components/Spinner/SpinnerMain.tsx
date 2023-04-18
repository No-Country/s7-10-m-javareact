import React, { FC } from "react";

interface SpinnerProps {
  size?: string;
}

const SpinnerMain: FC<SpinnerProps> = ({ size = "w-6 h-6" }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`loader ease-linear rounded-full border-4 border-t-4  border-indigo-500 ${size} animate-spin transition-colors`}
      />
    </div>
  );
};

export default SpinnerMain;
