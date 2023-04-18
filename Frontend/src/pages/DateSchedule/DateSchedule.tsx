import React from "react";
import Scheduler from "../../components/DateScheduler/Scheduler";
import AditionalInfo from "../../components/DateScheduler/AditionalInfo";

type Props = {};

const DateSchedule = (props: Props) => {
  return (
    <div className="flex justify-center">
      <div>
        <div>
          <Scheduler />
        </div>
        <div>
          <AditionalInfo />
        </div>
      </div>
    </div>
  );
};

export default DateSchedule;
