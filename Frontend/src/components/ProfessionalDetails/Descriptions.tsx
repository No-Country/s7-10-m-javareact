import React from "react";
import data from "./data.json";
import { selectProviderDescription } from "../../app/state/providerSlice";
import { useAppSelector } from "../../app/hooks";

type Props = {};

const Descriptions = (props: Props) => {
  let select = useAppSelector(selectProviderDescription)
  return (
    <div>
      <div className="text-start mx-8 py-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="py-2">"{select}"</p>
      </div>
    </div>
  );
};

export default Descriptions;
