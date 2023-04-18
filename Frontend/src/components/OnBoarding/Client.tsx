import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Client = (props: Props) => {
  return (
    <div>
      <div className="text-center">
        <div className="text-start ">
          <div className="relative font-inter">
            <img
              className="min-h-fit opacity-80 m-auto"
              src="https://img.freepik.com/foto-gratis/necesito-ayuda-mujer-infeliz-agachada-cerca-grifo-agua-que-gotea-casa_259150-58305.jpg?w=1060&t=st=1680649079~exp=1680649679~hmac=198b0d50b93a842e5492b70759f58e5154992d789febe8367bf294fe70bc223c"
            />
            <p className="text-md text-start absolute top-2 text-[#FF9A1F] font-semibold font-georama text-3xl mx-4">
              Do you have a Breakdown at Home?
            </p>
          </div>
          <div className="justify-start bg-[#FF9A1F]">
            <div className="mx-4 py-4 text-start">
              <p className="text-2xl py-2 font-semibold text-[#14213D] font-georama">Find a service provider</p>
              <p className="text-xl font-inter">
                Welcome to our platform for finding professionals to help repair damage in your
                home! We understand that experiencing damage to your home can be a stressful and
                overwhelming experience. That's why we're here to help connect you with experienced
                professionals who can get your home back to its pre-damaged state as quickly and
                efficiently as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm px-4 py-4 text-center font-inter">
          <p className="text-start text-sm">Here are the steps to get started:</p>
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
      <div className="text-center align-content-center w-full justify-center">
        <div className="py-4 flex justify-center">
          <Link
            to="/login"
            className="text-center bg-[#004E98] hover:bg-gray-700 font-georama font-semibold text-white w-[300px] rounded-full py-3"
          >
            Login
          </Link>
        </div>
        <div className="py-4 flex justify-center">
          <Link
            to="/signup-client"
            className="text-center bg-[#004E98] hover:bg-gray-700 font-georama font-semibold text-white w-[300px] rounded-full py-3"
          >
            Sign up
          </Link>
        </div>
        <div className="w-full py-4">
          <Link to="/onboarding/provider" className="text-[#5046E5] underline font-inter">
            I want to offer a service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Client;
