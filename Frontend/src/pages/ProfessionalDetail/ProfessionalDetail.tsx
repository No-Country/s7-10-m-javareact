import React from "react";
import Header from "../../components/ProfessionalDetails/Header";
import Descriptions from "../../components/ProfessionalDetails/Descriptions";
import FirstVisit from "../../components/ProfessionalDetails/FirstVisit";
import Gallery from "../../components/ProfessionalDetails/Gallery";

type Props = {};

const ProfessionalDetail = (props: Props) => {
  return (
    <div>
      <Header />
      <Descriptions />
      <FirstVisit />
      <Gallery/>
    </div>
  );
};

export default ProfessionalDetail;
