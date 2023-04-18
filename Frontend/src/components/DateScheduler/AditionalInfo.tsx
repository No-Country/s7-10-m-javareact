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
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Add any additional information here"
        />
      </div>

      {/* image upload input */}
      <div className="mt-8">
        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
          Upload Images
        </label>
        <div className="mt-1">
          <input
            id="image-upload"
            name="image-upload"
            type="file"
            accept="image/*"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="mt-8 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300">
        Send Request
      </button>
    </div>
  );
};

export default AditionalInfo;
