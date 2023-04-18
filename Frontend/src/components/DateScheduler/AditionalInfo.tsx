import React from "react";

type Props = {};

const AditionalInfo = (props: Props) => {
  return (
    <div className="mt-8">
      <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700">
        Additional Information
      </label>
      <div className="mt-1">
        <textarea
          id="additional-info"
          name="additional-info"
          rows={10}
          cols={50}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block sm:text-sm border-gray-300 rounded-md"
          placeholder="Describe here the problem you have, what has happened and what needs to be fixed by the professional..."
        />
      </div>

      {/* image upload input */}
      <div className="mt-8">
        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
          Upload Images
        </label>
        <div className="mt-1 border-gray-500 border-solid">
          <input
            id="image-upload"
            name="image-upload"
            type="file"
            accept="image/*"
            className="shadow-sm focus:ring-indigo-500 h-[200px] focus:border-indigo-500 mt-1 block w-full sm:text-sm rounded-md"
          />
        </div>
      </div>

      {/* submit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-8 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default AditionalInfo;
