import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProviderId, selectProviderName } from "../../app/state/providerSlice";
import { selectIdUser } from "../../app/state/userSlice";
import { AiOutlineCheckCircle } from "react-icons/ai";

type Props = {};

const AditionalInfo = (props: Props) => {
  let { idUser } = useAppSelector(selectProviderId);
  let fullname = useAppSelector(selectProviderName);
  let user = useAppSelector(selectIdUser);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center">
      <label
        htmlFor="problemDescription"
        className="block font-georama text-sm font-medium text-gray-700"
      >
        Additional Information
      </label>
      <div className="mt-1">
        <textarea
          id="problemDescription"
          name="problemDescription"
          rows={3}
          className=" p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Add any additional information here"
        />
      </div>

      {/* image upload input */}
      <div className="mt-8">
        <label
          htmlFor="image-upload"
          className="block text-sm font-medium font-georama text-gray-700"
        >
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
      {/* idprovider input */}
      <div className="mt-8" hidden>
        <label htmlFor="idProvider" className="block text-sm font-medium text-gray-700">
          IdProvider
        </label>
        <div className="mt-1">
          <input
            id="idProvider"
            name="idProvider"
            type="number"
            value={idUser}
            readOnly={true}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      {/* iduser input */}
      <div className="mt-8" hidden>
        <label htmlFor="idUser" className="block text-sm font-medium text-gray-700">
          idUser
        </label>
        <div className="mt-1">
          <input
            id="idUser"
            name="idUser"
            type="text"
            readOnly={true}
            value={user}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      {/* submit button */}
      <button
        type="submit"
        className="mt-8 items-center mx-auto bg-[#004E98] text-white py-2 px-4 rounded-md hover:bg-[#004E98]/70 transition-colors duration-300"
      >
        Send Request
      </button>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto font-inter">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Successful</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You have schedule a visit with {fullname}!
                    </p>
                    <AiOutlineCheckCircle className="mx-auto mt-4 text-5xl text-green-400" />
                    <p className="text-lg font-semibold mt-1"></p>
                    <p className="text-lg font-semibold mt-1"></p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AditionalInfo;
