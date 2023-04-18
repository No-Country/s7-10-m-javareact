import React, { useEffect, useRef } from "react";
import Header from "../../components/ProfessionalDetails/Header";
import Descriptions from "../../components/ProfessionalDetails/Descriptions";
import FirstVisit from "../../components/ProfessionalDetails/FirstVisit";
import Gallery from "../../components/ProfessionalDetails/Gallery";
import Reviews from "../../components/ProfessionalDetails/Reviews";
import HireNow from "../../components/ProfessionalDetails/HireNow";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { getProvider } from "../../app/state/providerSlice";

type Props = {};

const ProfessionalDetail = (props: Props) => {
  const {id} = useParams()
  let dispatch = useAppDispatch()

  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(getProvider({ id: id! }));

      effectRan.current = true;
    }
  }, [dispatch, id]);
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
