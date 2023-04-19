import { FaArrowLeft } from "react-icons/fa";
import { Card } from "../../components/Professionals/Card";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  SelectProviders,
  SelectStatusProviders,
  getProviders
} from "../../app/state/providersSlice";
import { useEffect, useRef } from "react";
import { useImageStackById } from "../../hooks/useImageStack";
import { HeaderCard } from "../../components/Professionals/HeaderCard";
import Spinner from "../../components/Spinner/Spinner";
import data from "../../hooks/useData";

export default function Professionals() {
  let dispatch = useAppDispatch();

  let { id } = useParams();
  let selectStatus = useAppSelector(SelectStatusProviders);
  let select = useAppSelector(SelectProviders);
 
  const profession = useImageStackById(parseInt(id ?? ""));
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(getProviders({ id: id! }));

      effectRan.current = true;
    }
  }, [dispatch, id]);
  return (
    <>
      <Link to={"/"}>
        <FaArrowLeft className="text-gray-600 h-6 w-6 ml-4" />
      </Link>
      <div className="flex items-center justify-center h-12 w-full p-12">
        <div className="absolute left-10"></div>
        <HeaderCard profession={profession} />
      </div>
      <div className="flex justify-center p-6 max-w-[280px] m-auto">
        <input
          className="border border-gray-300 rounded-md py-2 pl-6 pr-4 text-sm w-full"
          type="text"
          placeholder="Sort By"
        />
        <input
          className="border border-gray-300 rounded-md ml-2 py-2 pl-6 pr-4 text-sm w-full"
          type="text"
          placeholder="Filter By"
        />
      </div>
      {/* {selectStatus === 'pending' && <Spinner />} */}
      {selectStatus === "fulfilled" ? (
        select.map((provider, index) => <Card key={index} provider={provider} />)
      ) : (
        <Spinner />
      )}
        {data.map((provider, index) => <Card key={index} provider={provider} />)}
    </>
  );
}
