import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

export const signUpSchema: Yup.ObjectSchema<
  {
    email: string;
    password: string | undefined;
    fullname: string;
    country: string;
  },
  Yup.AnyObject,
  {
    email: undefined;
    password: undefined;
    fullname: undefined;
    country: undefined;
  },
  ""
> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Min 8 characters")
    .minLowercase(1, "Min 1 lowercase character")
    .minUppercase(1, "Min 1 uppercase character")
    .minNumbers(1, "Min 1 number required")
    .minSymbols(1, "Min 1  symbol required"),
  fullname: Yup.string().required("Full name required"),
  country: Yup.string().required("Country required")
});

export const signUpProSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Min 8 characters")
    .minLowercase(1, "Min 1 lowercase character")
    .minUppercase(1, "Min 1 uppercase character")
    .minNumbers(1, "Min 1 number required")
    .minSymbols(1, "Min 1  symbol required"),
  fullname: Yup.string().required("Full name required"),
  country: Yup.string().required("Country required"),
  categories: Yup.array().required("Need to choose one category at least"),
  experienceYears: Yup.number().required("Years of experience required"),
  kmAround: Yup.number().required("Km around required")
});

export const loginSchema: Yup.ObjectSchema<
  { email: string; password: string },
  Yup.AnyObject,
  { email: undefined; password: undefined },
  ""
> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required")
});
