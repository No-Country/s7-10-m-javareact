import { FaArrowLeft } from "react-icons/fa";
import Calefaccion from "../../assets/jobs/calefaccion.png";
import { Card } from "../../components/Professionals/Card";
import { Link } from "react-router-dom";

export default function Professionals() {
  return (
    <>
    <Link to={'/'}>
    <FaArrowLeft className="text-gray-600 h-6 w-6 ml-4" />
    </Link>
      <div className="flex items-center justify-center h-12 w-full p-12">
        <div className="absolute left-10"></div>
        <div>
          <div className="bg-gray-100 w-20 h-20 xs:w-20xs:h-20 sm:h-20 rounded-md m-auto  border-solid border-2 border-orange-500 duration-100 ease-out transition hover:animate-none flex justify-center mt-4">
            <img src={Calefaccion} className="w-12 xs:w-16 xs:h-18 self-center" />
          </div>
          <p className="text-center pt-0 mt-1 font-cagliostro">Plumber</p>
        </div>
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
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
