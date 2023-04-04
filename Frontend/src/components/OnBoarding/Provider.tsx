import React from "react";

type Props = {};

const Provider = (props: Props) => {
  return (
    <div>
      <div className="text-center">
        <div className="text-start ">
          <div className="relative">
            <img
              className="max-w-[425px] min-h-fit opacity-80"
              src="https://img.freepik.com/foto-gratis/hombre-fontanero-fijacion-fregadero-cocina_53876-27.jpg?w=1060&t=st=1680650638~exp=1680651238~hmac=a5fb5b2c0d780b9bfc563073a77b3b3e209a44277e85d8978e1439e8a0807a9d"
            />
          </div>
          <p className="text-md text-start absolute top-16 text-[#FF9A1F] font-semibold text-3xl mr-40 ml-4">
            Are you a skilled trader?
          </p>
          <div className="justify-start bg-[#FF9A1F]">
            <div className="mx-4 py-4 text-start">
              <p className="text-2xl py-2 font-semibold text-[#14213D]">Offer your services</p>
              <p className="text-xl">
                Welcome to our platform for Home Repair Professionals! We're excited to help you
                connect with homeowners in need of your expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm px-4 py-4 text-center">
          <p className="text-start text-sm">Here's how to get started:</p>
          <ol className="list-decimal text-start py-4 mx-2">
            <li className="py-2">
              <span className="font-semibold">Create your profile:</span> The first step is to
              create a profile that showcases your skills and experience. This will help homeowners
              find you when they're searching for professionals to help with their home repairs. Be
              sure to include details about your services, certifications, and any relevant photos
              or videos of your work.
            </li>
            <li className="py-2">
              <span className="font-semibold">Set your availability: </span>
              Once your profile is complete, you can set your availability so homeowners know when
              you're available to work. This will help you attract more clients and ensure that
              you're not overbooked.
            </li>
            <li className="py-2">
              <span className="font-semibold">Receive job request:</span> When a homeowner is in
              need of your services, they can submit a job request through our platform. You'll
              receive a notification and can review the details of the job, including the scope of
              work, location, and budget.
            </li>
            <li className="py-2">
              <span className="font-semibold">Acept the job:</span> If you're interested in the job,
              you can accept it through the platform. You'll be able to communicate with the
              homeowner to discuss the details and arrange a time to start the work
            </li>
            <ol className="list-disc">
              <li className="py-2">
                <span className="font-semibold">Get Paid: </span>
                Our platform provides a secure payment system that makes it easy for you to get paid
                for your services. You'll receive payment directly to your bank account, and we'll
                take care of the transaction fees.
              </li>
            </ol>
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
          <span className="text-[#5046E5]">I want to hire a skilled trader</span>
        </div>
      </div>
    </div>
  );
};

export default Provider;
