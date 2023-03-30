import React from "react";

type Props = {};

const Client = (props: Props) => {
  return (
    <div>
      <div className="text-center py-16">
        <h2 className="text-xl py-4">Welcome!</h2>
        <div>IMAGE</div>
        <p className="text-md">Do you have a Breakdown at Home?</p>
        <p className="text-sm">Find a service provider</p>
        <div className="text-sm py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sed veniam mollitia
            sapiente eaque eius, expedita nostrum, accusamus rerum sunt exercitationem aspernatur
            incidunt eligendi voluptatem alias. Mollitia obcaecati maxime ut.
          </p>
        </div>
      </div>
      <div className="text-center align-content-center">
        <button className="bg-gray-900 hover:bg-gray-700 text-white py-1 px-16 rounded-lg mb-2">
          Login
        </button>
        <button className="bg-gray-900 hover:bg-gray-700 text-white py-1 px-16 rounded-lg mb-2">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Client;
