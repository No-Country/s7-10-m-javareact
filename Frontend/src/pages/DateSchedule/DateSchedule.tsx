import React, { useState } from "react";
import Scheduler from "../../components/DateScheduler/Scheduler";
import AditionalInfo from "../../components/DateScheduler/AditionalInfo";
import Header from "../../components/ProfessionalDetails/Header";
import { useDate } from "../../hooks/useDate";
import { useHour } from "../../hooks/useHour";
import { Form, Formik } from "formik";
import { AppointmentValidation } from "../../validations/AppointmentValidation";
import { postRequest } from "../../app/state/appointmentSlice";

type Props = {};

const DateSchedule = (props: Props) => {
  const [time, setTime] = useHour("");
  const [date, setDate] = useDate("");
  const INITIAL__VALUES__APPOINTMENT__FORM = {
    idClient: 0,
    idServiceProvider: 0,
    problemDescription: "",
    problemPhotos: [""],
    date: ""
  };
  const [userState, setUserState] = useState(INITIAL__VALUES__APPOINTMENT__FORM);

  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <div className="flex justify-center">
        <div>
          {/*         <Formik
          initialValues={INITIAL__VALUES__APPOINTMENT__FORM}
          validationSchema={AppointmentValidation}
          onSubmit={values => console.log(values)}
        >
          <>
          
          <Form> */}
          <Scheduler /* setTime={setTime} setDate={setDate} */ />
          <AditionalInfo />
          {/*           </Form> 
          </>
           </Formik> */}
        </div>
      </div>
    </div>
  );
};

export default DateSchedule;
