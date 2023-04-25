import { useState } from "react";
import { BsStarHalf } from "react-icons/bs";
import { ImFacebook2, ImFloppyDisk, ImInstagram } from "react-icons/im";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Profile from "../../assets/profile.png";
import { TbWashMachine, TbFridge, TbAirConditioning } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
/* import { useImageStackWithIcon } from "../../hooks/useImageStack"; */
import { Category } from "../../app/state/providersSlice";

import { useRound } from "../../hooks/useRound";
import { IconWrapper } from "../Professionals/IconWrapper";

export const RequestCard = ({ provider }: any) => {
  const [expanded, setExpanded] = useState(false);
  const { fullName, date, hour, address, since, profileUrl, description, photos } = provider;
  console.log(since);
  let navigate = useNavigate();
  /*  let professions = useImageStackWithIcon(); */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`overflow-hidden transform bg-gray-100 w-[300px] rounded-md m-auto border-solid border-2 border-orange-500 duration-100 ease-out transition hover:animate-none flex flex-col justify-between mt-2 p-1 ${
        expanded ? "h-auto w-[300px]" : "h-20 w-[300px] "
      }`}
    >
      <div className="flex">
        <img className="p-2 w-16 h-16" src={profileUrl ? profileUrl : Profile} />
        <div className="align-middle content-center p-1 justify-between">
          <div className="flex font-inter m-auto text-sm">
            <p className="w-28">{fullName}</p>
            <p className="ml-10">{since}</p>
          </div>
          <div className="flex center font-inter_regular text-xs m-auto">
            <p className="w-full mt-3 ">
              • {date} • {hour}
            </p>
            <div className="flex font-inter_regular justify-end m-auto text-xs p-1">
              <button className={` w-[18px] h-[21px]`} onClick={handleExpandClick}>
                <MdOutlineArrowDropDown
                  className={`ml-3 mt-6 text-lg ${expanded ? "hidden" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="font-inter_regular text-xs p-1.5">
        <p>{/* {profileDescription} */}</p>

        <p className="font-inter text-md mr-1">{description} </p>

        <div className="flex justify-around text-3xl p-4	">
          {/* Aca esta como seria conectado a backend */}
          {/*           {categories.map((category: Category) => {
            const profession = professions.find(p => p.id === category.id);
            const icon = profession?.icon;
            
            if (icon) {
              return <IconWrapper key={profession?.id} icon={icon} />;
            }
          })} */}
          {photos.map((image: string) => (
            <img className="w-16 h-16" src={image} alt="" />
          ))}
        </div>
      </div>
      <button className="flex justify-end mb-2" onClick={handleExpandClick}>
        <MdOutlineArrowDropUp className="mr-2 -mt-5 text-lg" />
      </button>
    </div>
  );
};
