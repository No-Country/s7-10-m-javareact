import React, { FC } from "react";

interface SpinnerProps {
  size?: string;
}

const Spinner: FC<SpinnerProps> = ({ size = "w-6 h-6" }) => {
  return (
    <div className="flex justify-center items-center h-2/4	">
      <div
        className={`loader ease-linear rounded-full border-4 border-t-4 border-gray-200 ${size}`}
      />
    </div>
  );
};

export default Spinner;
