import * as Yup from "yup";

export const AppointmentValidation: Yup.ObjectSchema<{
  problemDescription: string;
  date: number;
  idUser: number;
  idProvider: number;
}> = Yup.object().shape({
  problemDescription: Yup.string().required().min(50),
  date: Yup.number().required(),
  idUser: Yup.number().integer().positive().required(),
  idProvider: Yup.number().integer().positive().required()
});
