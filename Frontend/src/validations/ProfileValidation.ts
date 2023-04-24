import * as Yup from "yup";

export const profileForm = Yup.object().shape({
  fullname: Yup.string().required("Full name required"),
  country: Yup.string().required("Country required"),
  address: Yup.array().required("Need to choose one category at least"),
  mobile: Yup.number().required("Years of experience required"),
  genre: Yup.number().required("Km around required")
});
