import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Logo from "../../assets/logo.png";
import { Navigate } from "react-router-dom";
import { ProfileValues } from "../../models/LoginValues";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login, selectToken } from "../../app/state/userSlice";
import { profileForm } from "../../validations/ProfileValidation";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const ProfileForm = () => {
  let dispatch = useAppDispatch();
  let token = useAppSelector(selectToken);
  const [status, setStats] = useState(true);
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [clicked, setClicked] = useState("");
  const INITIAL__VALUES__VALIDATION__FORM: ProfileValues = {
    fullname: "",
    country: "",
    address: "",
    mobile: "",
    genre: ""
  };
  const handleForm = (values: any) => {};

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-8 sm:px-6 lg:px-8 font-inter_regular">
      <div className="flex flex-row w-full max-w-md justify-center items-center mb-4 ">
        <hr className="w-full	" />
        <p className="w-full px-3 text-xs	text-center">Edit User</p>
        <hr className="w-full	" />
      </div>
      <div className="w-full max-w-md space-y-8">
        <Formik
          initialValues={INITIAL__VALUES__VALIDATION__FORM}
          validationSchema={profileForm}
          onSubmit={values => handleForm(values)}
        >
          {({ errors, touched }) => (
            <Form className="">
              <label htmlFor="fullname">Fullname</label>
              <Field
                className="relative block w-full rounded-3xl border-solid border border-[#004E98] py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2"
                name="fullname"
              />
              {errors.fullname && touched.fullname ? (
                <div className="mb-4 mt-1 text-xs text-red-600">{errors.fullname}</div>
              ) : null}

              <div className="mt-5">
                <label htmlFor="Country" className="mt-10">
                  Country
                </label>
                <div className="flex relative">
                  <Field
                    className="block w-full rounded-3xl border-solid border border-[#004E98]	 py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2"
                    name="Country"
                    type="text"
                  />
                  {errors.country && touched.country ? (
                    <div className="mt-1 text-xs text-red-600">{errors.country}</div>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="Address" className="mt-10">
                  Address
                </label>
                <div className="flex relative">
                  <Field
                    className="block w-full rounded-3xl border-solid border border-[#004E98]	 py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2"
                    name="Address"
                    type="text"
                  />
                  {errors.address && touched.address ? (
                    <div className="mt-1 text-xs text-red-600">{errors.address}</div>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="Mobile" className="mt-10">
                  Mobile
                </label>
                <div className="flex relative">
                  <Field
                    className="block w-full rounded-3xl border-solid border border-[#004E98]	 py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2"
                    name="Mobile"
                    type="text"
                  />
                  {errors.mobile && touched.mobile ? (
                    <div className="mt-1 text-xs text-red-600">{errors.mobile}</div>
                  ) : null}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="Genre" className="mt-10">
                  Genre
                </label>
                <div className="flex relative">
                  <Field
                    className="block w-full rounded-3xl border-solid border border-[#004E98]	 py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2"
                    name="Genre"
                    type="text"
                  />
                </div>
              </div>
              {errors.genre && touched.genre ? (
                <div className="mt-1 text-xs text-red-600">{errors.genre}</div>
              ) : null}
              {status && (
                <>
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
                      rows={10}
                      cols={50}
                      className="border-2 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-[#004E98] rounded-md"
                      placeholder="Describe here the problem you have, what has happened and what needs to be fixed by the professional..."
                    />
                  </div>
                  <div className="mt-8 text-center">
                    <label
                      htmlFor="image-upload"
                      className="block text-sm font-medium font-georama text-gray-700"
                    >
                      Upload Images
                    </label>
                    <button className="border-[#004E98] border-2 text-[#004E98] py-2 px-4 rounded-md flex items-center w-full text-6xl">
                      <AiOutlineCloudUpload className="mx-auto " />

                      <input
                        id="image-upload"
                        name="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        /* onChange={handleFileSelect} */
                      />
                    </button>
                    <span className="">Select Image</span>
                  </div>
                </>
              )}
              <button
                className="group relative flex w-full justify-center font-georama rounded-3xl bg-[#004E98] px-3 py-3 text-sm font-semibold text-white hover:bg-[#004E98]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  mt-8"
                type="submit"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
