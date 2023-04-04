import React from "react";

type Props = {};

const Client = (props: Props) => {
  return (
    <div>
      <div className="text-center py-6">
        {/* <div className="justify-center flex py-4">
          <div>
            <svg
              width="144"
              height="144"
              viewBox="0 0 144 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="72" cy="72" r="72" fill="#D9D9D9" />
              <path
                d="M18.5227 88V58.9091H22.0455V84.875H35.5682V88H18.5227ZM64.4354 73.4545C64.4354 76.5227 63.8814 79.1742 62.7734 81.4091C61.6655 83.6439 60.1456 85.3674 58.2138 86.5795C56.282 87.7917 54.0755 88.3977 51.5945 88.3977C49.1134 88.3977 46.907 87.7917 44.9751 86.5795C43.0433 85.3674 41.5234 83.6439 40.4155 81.4091C39.3075 79.1742 38.7536 76.5227 38.7536 73.4545C38.7536 70.3864 39.3075 67.7348 40.4155 65.5C41.5234 63.2652 43.0433 61.5417 44.9751 60.3295C46.907 59.1174 49.1134 58.5114 51.5945 58.5114C54.0755 58.5114 56.282 59.1174 58.2138 60.3295C60.1456 61.5417 61.6655 63.2652 62.7734 65.5C63.8814 67.7348 64.4354 70.3864 64.4354 73.4545ZM61.0263 73.4545C61.0263 70.9356 60.6049 68.8097 59.7621 67.0767C58.9287 65.3438 57.7971 64.0322 56.3672 63.142C54.9467 62.2519 53.3558 61.8068 51.5945 61.8068C49.8331 61.8068 48.2375 62.2519 46.8075 63.142C45.3871 64.0322 44.2554 65.3438 43.4126 67.0767C42.5793 68.8097 42.1626 70.9356 42.1626 73.4545C42.1626 75.9735 42.5793 78.0994 43.4126 79.8324C44.2554 81.5653 45.3871 82.8769 46.8075 83.767C48.2375 84.6572 49.8331 85.1023 51.5945 85.1023C53.3558 85.1023 54.9467 84.6572 56.3672 83.767C57.7971 82.8769 58.9287 81.5653 59.7621 79.8324C60.6049 78.0994 61.0263 75.9735 61.0263 73.4545ZM90.245 68C89.9325 67.0436 89.5206 66.1866 89.0092 65.429C88.5073 64.6619 87.906 64.0085 87.2053 63.4688C86.514 62.929 85.728 62.517 84.8473 62.233C83.9666 61.9489 83.0007 61.8068 81.9496 61.8068C80.2261 61.8068 78.6589 62.2519 77.2479 63.142C75.8369 64.0322 74.7147 65.3438 73.8814 67.0767C73.0481 68.8097 72.6314 70.9356 72.6314 73.4545C72.6314 75.9735 73.0528 78.0994 73.8956 79.8324C74.7384 81.5653 75.8795 82.8769 77.3189 83.767C78.7583 84.6572 80.3776 85.1023 82.1768 85.1023C83.8435 85.1023 85.3113 84.7472 86.5803 84.0369C87.8587 83.3172 88.853 82.304 89.5632 80.9972C90.2829 79.6809 90.6428 78.1326 90.6428 76.3523L91.7223 76.5795H82.9723V73.4545H94.0518V76.5795C94.0518 78.9754 93.5405 81.0587 92.5178 82.8295C91.5045 84.6004 90.103 85.9735 88.3132 86.9489C86.5329 87.9148 84.4875 88.3977 82.1768 88.3977C79.6011 88.3977 77.3378 87.7917 75.3871 86.5795C73.4458 85.3674 71.9306 83.6439 70.8416 81.4091C69.7621 79.1742 69.2223 76.5227 69.2223 73.4545C69.2223 71.1534 69.5301 69.0843 70.1456 67.2472C70.7706 65.4006 71.6513 63.8286 72.7876 62.5312C73.924 61.2339 75.2687 60.2396 76.8217 59.5483C78.3748 58.857 80.084 58.5114 81.9496 58.5114C83.4837 58.5114 84.9136 58.7434 86.2393 59.2074C87.5746 59.6619 88.763 60.3106 89.8047 61.1534C90.8558 61.9867 91.7318 62.9858 92.4325 64.1506C93.1333 65.3059 93.6162 66.589 93.8814 68H90.245ZM124.631 73.4545C124.631 76.5227 124.077 79.1742 122.969 81.4091C121.861 83.6439 120.341 85.3674 118.409 86.5795C116.477 87.7917 114.271 88.3977 111.79 88.3977C109.309 88.3977 107.102 87.7917 105.17 86.5795C103.239 85.3674 101.719 83.6439 100.611 81.4091C99.5028 79.1742 98.9489 76.5227 98.9489 73.4545C98.9489 70.3864 99.5028 67.7348 100.611 65.5C101.719 63.2652 103.239 61.5417 105.17 60.3295C107.102 59.1174 109.309 58.5114 111.79 58.5114C114.271 58.5114 116.477 59.1174 118.409 60.3295C120.341 61.5417 121.861 63.2652 122.969 65.5C124.077 67.7348 124.631 70.3864 124.631 73.4545ZM121.222 73.4545C121.222 70.9356 120.8 68.8097 119.957 67.0767C119.124 65.3438 117.992 64.0322 116.562 63.142C115.142 62.2519 113.551 61.8068 111.79 61.8068C110.028 61.8068 108.433 62.2519 107.003 63.142C105.582 64.0322 104.451 65.3438 103.608 67.0767C102.775 68.8097 102.358 70.9356 102.358 73.4545C102.358 75.9735 102.775 78.0994 103.608 79.8324C104.451 81.5653 105.582 82.8769 107.003 83.767C108.433 84.6572 110.028 85.1023 111.79 85.1023C113.551 85.1023 115.142 84.6572 116.562 83.767C117.992 82.8769 119.124 81.5653 119.957 79.8324C120.8 78.0994 121.222 75.9735 121.222 73.4545Z"
                fill="black"
              />
            </svg>
          </div>
        </div> */}
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
