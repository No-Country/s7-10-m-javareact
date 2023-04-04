import React from "react";

type Props = {};

const Client = (props: Props) => {
  return (
    <div>
      <div className="text-center py-6">
        <h2 className="text-3xl py-4">Welcome!</h2>
        <div className="justify-center flex py-4">
          <div>
            <svg
              width="214"
              height="146"
              viewBox="0 0 214 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_48_390)">
                <rect width="214" height="146" fill="#F2F2F2" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M107.721 58.9319L117.2 43L141 83H120.359C120.518 81.9113 120.6 80.7983 120.6 79.6667C120.6 70.6452 115.369 62.8142 107.721 58.9319ZM107.721 58.9319C104.449 57.2715 100.736 56.3333 96.8 56.3333C83.6624 56.3333 73 66.7867 73 79.6667C73 92.5467 83.6624 103 96.8 103C108.783 103 118.707 94.3029 120.359 83H93.4L107.721 58.9319Z"
                  fill="#B3B3B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_390">
                  <rect width="214" height="146" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="text-start">
          <div className="py-4">
            <p className="text-md">Do you have a Breakdown at Home?</p>
          </div>
          <div className="justify-start bg-[#FF9A1F]">
            <div className="mx-4 py-4 text-start">
              <p className="text-2xl py-2 font-semibold text-[#14213D]">Find a service provider</p>
              <p className="text-xl">
                Welcome to our platform for finding professionals to help repair damage in your
                home! We understand that experiencing damage to your home can be a stressful and
                overwhelming experience. That's why we're here to help connect you with experienced
                professionals who can get your home back to its pre-damaged state as quickly and
                efficiently as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm px-4 py-4 text-center">
          <ol className="list-decimal text-start py-4 mx-2">
            <li className="py-2">
              <span className="font-semibold">Create an Account:</span> To start using our platform,
              you'll need to create an account. It's quick and easy - just provide your name, email
              address, and a password.
            </li>
            <li className="py-2">
              <span className="font-semibold">
                Use our filters or choose from our list of professionals:
              </span>
              After creating your account, use our filters at the homepage with the details about
              the damage you have. This will help us match you with professionals who have
              experience in handling similar repairs.
            </li>
            <li className="py-2">
              <span className="font-semibold">Choose your professionals:</span> Based on the details
              you provide, we'll present you with a list of qualified professionals who are
              available to help. You can view their profiles, see their ratings and reviews, and
              choose the one that best fits your needs.
            </li>
            <li className="py-2">
              <span className="font-semibold">Get Started:</span> Once you've chosen a professional,
              you can get started right away. Our platform provides tools for communication and to
              ensure that the repair process goes smoothly and you're always kept in the loop.
            </li>
          </ol>
        </div>
      </div>
      <div className="text-center align-content-center">
        <div className="w-full">
          <button className="bg-[#004E98] hover:bg-gray-700 text-white py-2 px-16 w-[250px] rounded-full mb-2">
            Login
          </button>
        </div>
        <div className="w-full">
          <button className="bg-[#004E98] hover:bg-gray-700 text-white py-2 px-16 w-[250px] rounded-full mb-2">
            Sign up
          </button>
        </div>
        <div className="w-full py-5">
          <span className="text-[#5046E5]">I want to offer a service</span>
        </div>
      </div>
    </div>
  );
};

export default Client;
