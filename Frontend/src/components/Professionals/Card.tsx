import { useState } from "react";
import { BsStarHalf } from "react-icons/bs";
import { ImFacebook2, ImFloppyDisk, ImInstagram } from "react-icons/im";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Profile from "../../assets/profile.png";
import { TbWashMachine, TbFridge, TbAirConditioning } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export const Card = () => {
  const [expanded, setExpanded] = useState(false);
  let navigate = useNavigate();
  const handleExpandClick = () => {
    console.log("entra");
    setExpanded(!expanded);
  };
  return (
    <div
      className={`overflow-hidden transform bg-gray-100 w-[300px] rounded-md m-auto border-solid border-2 border-orange-500 duration-100 ease-out transition hover:animate-none flex flex-col justify-between mt-2 p-1 ${
        expanded ? "h-auto w-[300px]" : "h-20 w-[300px] "
      }`}
    >
      <div className="flex">
        <img className="p-2 w-16 h-16" src={Profile} />
        <div className="align-middle content-center p-1 justify-between">
          <div className="flex center font-inter m-auto">
            <p className="w-28">Jhon</p>
            <p className="w-8">4.6</p>
            <BsStarHalf />
            <ImFloppyDisk className="ml-10" />
          </div>
          <div className="flex center font-inter_regular text-xs m-auto">
            <p className="w-full">Plumber • Buenos Aires •</p>
          </div>
          <div className="flex font-inter_regular justify-between m-auto text-xs p-1">
            <p className="w-15">12 Experience</p>
            <div className="flex w-20  float-left">
              <ImFacebook2 className="ml-1 mt-0.5 text-md" />
              <ImInstagram className="ml-1 mt-0.5 text-md" />
            </div>

            <button className={` w-[18px] h-[21px]`} onClick={handleExpandClick}>
              <MdOutlineArrowDropDown className={`m-0 mt-1 text-lg ${expanded ? "hidden" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="font-inter_regular text-xs p-1.5">
        <p>
          “Hello, my name is Jack and I've been a plumber for over 10 years. I started my career as
          an apprentice, learning the ropes from experienced plumbers and gradually building up my
          skills and knowledge.”
        </p>
        <span className="flex mt-2">
          <p className="font-inter text-md mr-1">Other trades: </p> Home appliance technician
        </span>
        <div className="flex justify-around text-3xl p-4	">
          <TbWashMachine />
          <TbFridge />
          <BiDrink />
          <TbAirConditioning />
          <img src="" alt="" />
        </div>
      </div>
      <div
        onClick={() => navigate("/professional/detail/")}
        className="cursor-pointer max-w-[140px] ml-5"
      >
        <div className="">
          <p className="border-2 border-solid text-xs px-5 font-normal rounded-[32px] text-center py-2 transition hover:bg-gray-300 border-orange-500 text-orange-500">
            Show more
          </p>
        </div>
      </div>
      <button className="flex justify-end mb-2" onClick={handleExpandClick}>
        <MdOutlineArrowDropUp className="mr-2 -mt-5 text-lg" />
      </button>
    </div>
  );
};
