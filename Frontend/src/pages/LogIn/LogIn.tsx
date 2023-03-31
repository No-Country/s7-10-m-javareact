import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Logo from '../../assets/logo.png';
import * as Yup from "yup";
import YupPassword from "yup-password";

import { LoginValues } from "../../models/LoginValues";

YupPassword(Yup);

const loginSchema: Yup.ObjectSchema<
  { email: string; password: string },
  Yup.AnyObject,
  { email: undefined; password: undefined },
  ""
> = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string().min(6, "Contraseña minimo 6 caracteres").required("Contraseña requerida")
});

export default function LogIn() {
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const INITIAL__VALUES__LOGIN__FORM: LoginValues = {
    email: "",
    password: ""
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4  sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-md justify-center items-center mb-4">
        <img className="w-2/6 rounded-full mb-5"  src={Logo} alt="logo"/>
        <p className="w-full text-xs">Login with</p>
      </div>

      <div className="flex flex-row w-full max-w-md justify-center items-center mb-4 h-10">
        <FcGoogle className="w-2/6 rounded self-center border-solid border-2 border-stone-500 text-base py-1 h-7 cursor-pointer mx-2 h-100 "/>
      </div>

      <div className="flex flex-row w-full max-w-md justify-center items-center mb-4 ">
        <hr className="w-full	"/>
        <p className="w-full px-3 text-xs	text-center">Or continue with</p>
        <hr className="w-full	"/>
      </div>
      <div className="w-full max-w-md space-y-8">
        <Formik
          initialValues={INITIAL__VALUES__LOGIN__FORM}
          validationSchema={loginSchema}
          onSubmit={values => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form className="">
              <label htmlFor="email">
                Email address
              </label>
              <Field className="relative block w-full rounded-md border-solid border-2 border-stone-500 py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2" name="email" />
              {errors.email && touched.email ? <div className="mb-4 mt-1 text-xs text-red-600">{errors.email}</div> : null}

              <div className="mt-5">
                <label htmlFor="password" className="mt-10">
                  Password
                </label>
                <div className="flex relative">
                  <Field className="block w-full rounded-md border-solid border-2 border-stone-500	 py-1.5 text-gray-900  sm:text-sm sm:leading-6 mt-2 pl-2" name="password" type={seePassword ? "text" : "password"} />
                  <FaEye
                    className="absolute bottom-2.5 right-6 cursor-pointer"
                    onClick={(): void => {
                      setSeePassword(!seePassword);
                    }}
                  />
                </div>
              </div>
              {errors.password && touched.password ? <div className="mt-1 text-xs text-red-600">{errors.password}</div> : null}

              <button className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8" type="submit">
                Log In
              </button>
              <button className="text-center w-full	mt-4 text-indigo-700" type="button">
                Forgot your password?
              </button>

              <div className="w-100 flex items-center justify-center">
              <Link to='/signup' className="w-full mt-4 self-center text-center	">
                Don't have an account yet? <span className="text-indigo-700">Sign up!</span> 
              </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
