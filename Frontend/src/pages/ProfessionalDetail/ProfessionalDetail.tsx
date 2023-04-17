import React from "react";
import Header from "../../components/ProfessionalDetails/Header";
import Descriptions from "../../components/ProfessionalDetails/Descriptions";
import FirstVisit from "../../components/ProfessionalDetails/FirstVisit";
import Gallery from "../../components/ProfessionalDetails/Gallery";
import Reviews from "../../components/ProfessionalDetails/Reviews";
import HireNow from "../../components/ProfessionalDetails/HireNow";

type Props = {};

const ProfessionalDetail = (props: Props) => {
  return (
    <div>
      <Header />
      <Descriptions />
      <FirstVisit />
      <Gallery />
      <Reviews />
      <HireNow />
    </div>
  );
};

export default ProfessionalDetail;
