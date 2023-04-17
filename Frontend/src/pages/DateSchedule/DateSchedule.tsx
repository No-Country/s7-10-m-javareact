import React from "react";
import Scheduler from "../../components/DateScheduler/Scheduler";
import AditionalInfo from "../../components/DateScheduler/AditionalInfo";
import SendRequest from "../../components/DateScheduler/SendRequest";

type Props = {};

const DateSchedule = (props: Props) => {
  return (
    <div>
      <Scheduler />
      <AditionalInfo />
      <SendRequest />
    </div>
  );
};

export default DateSchedule;
