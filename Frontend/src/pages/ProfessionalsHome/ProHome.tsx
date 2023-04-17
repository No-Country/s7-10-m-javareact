import React from "react";
import EditSchedule from "../../components/ProHome/EditSchedule";
import ReviewRequests from "../../components/ProHome/ReviewRequests";

type Props = {};

const ProHome = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="min-h-screen place-items-center">
          <EditSchedule />
          <ReviewRequests />
        </div>
      </div>
    </div>
  );
};

export default ProHome;
