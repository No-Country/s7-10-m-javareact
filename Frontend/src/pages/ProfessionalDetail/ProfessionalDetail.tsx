import React, { useEffect, useRef } from "react";
import Header from "../../components/ProfessionalDetails/Header";
import Descriptions from "../../components/ProfessionalDetails/Descriptions";
import FirstVisit from "../../components/ProfessionalDetails/FirstVisit";
import Gallery from "../../components/ProfessionalDetails/Gallery";
import Reviews from "../../components/ProfessionalDetails/Reviews";
import HireNow from "../../components/ProfessionalDetails/HireNow";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SelectStatusProvider, getProvider } from "../../app/state/providerSlice";
import Spinner from "../../components/Spinner/Spinner";

type Props = {};

const ProfessionalDetail = (props: Props) => {
  const { id } = useParams();
  let dispatch = useAppDispatch();
  let status = useAppSelector(SelectStatusProvider);
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(getProvider({ id: id! }));

      effectRan.current = true;
    }
  }, [dispatch, id]);
  return (
    <div>
      {status === "fulfilled" ? (
        <>
          <Header />
          <Descriptions />
          <FirstVisit />
          <Gallery />
          <Reviews />
          <HireNow />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ProfessionalDetail;
