import React from "react";
import Header from "../../components/ProfessionalDetails/Header";
import Descriptions from "../../components/ProfessionalDetails/Descriptions";
import FirstVisit from "../../components/ProfessionalDetails/FirstVisit";

type Props = {};

const ProfessionalDetail = (props: Props) => {
  return (
    <div>
      <Header />
      <Descriptions />
      <FirstVisit />
    </div>
  );
};

export default ProfessionalDetail;
