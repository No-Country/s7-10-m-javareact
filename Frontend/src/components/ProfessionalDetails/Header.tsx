import React from "react";
import data from "./data.json";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import HireHeader from "./HireHeader";
import { IoSaveOutline } from "react-icons/io5";
import { useAppSelector } from "../../app/hooks";
import { selectProviderHeader } from "../../app/state/providerSlice";

const Header = () => {
  let select = useAppSelector(selectProviderHeader);
  return (
    <>
      <div>
        <div>
          <div className="flex flex-row mx-3 justify-around">
            <div className="flex-col">
              <img
                src={select.profilePhoto ? select.profilePhoto : data.picture}
                className="w-24 h-24 justify-start rounded-lg"
              />
            </div>
            <div className="flex-col py-2">
              <div className="py-2">{select.fullName}</div>
              <div className="py-2 text-xs opacity-70">
                <ol>
                  <li>
                    <span>{select.categories[0]?.name}</span>
                  </li>
                </ol>
              </div>
              <div className="py-2 text-xs opacity-70">
                <ol>
                  <li>
                    <span>{select.experienceYears} experience</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2">{select.score}</div>
              <div className="py-2 text-xs opacity-70">
                <ol>
                  <li>
                    <span>{select.country}</span>
                  </li>
                </ol>
              </div>
              <div className="flex justify-around py-2">
                <GrFacebook />
                <GrInstagram />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2">
                <IoSaveOutline className="text-2xl" />
              </div>
            </div>
          </div>
          <HireHeader />
        </div>
      </div>
    </>
  );
};

export default Header;
