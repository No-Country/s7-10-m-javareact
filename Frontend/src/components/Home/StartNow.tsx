import React from "react";

type Props = {};

const StartNow = (props: Props) => {
  return (
    <>
      <div className="py-6 font-georama">
        <div className="justify-start px-4 py-4">
          <p className="text-lg">
            You can trust that you're getting the best possible service from the most qualified
            professionals.{" "}
          </p>
        </div>
        <div className="justify-start px-4 py-4">
          <p className="text-lg">
            Plus, we make it easy to get started - simply create your account and connect with
            professionals who are available and ready to help you.
          </p>
        </div>
        <div className="justify-start px-4 py-4">
          <p className="text-2xl font-semibold">Don't wait until it's too late!</p>
        </div>
        <div className="justify-center align-content-center px-4 py-6">
          <p className="text-2xl font-semibold font-georama rounded-[32px] text-center py-4 bg-[#FF9A1F] text-[#14213D] ">
            Start Now
          </p>
        </div>
      </div>
    </>
  );
};

export default StartNow;
