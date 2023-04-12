import React from "react";
import data from "./data.json";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { HiChatAlt2 } from "react-icons/hi";
import HireHeader from "./HireHeader";
import { IoSaveOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-row mx-3 justify-around">
            <div className="flex-col">
              <img src={data.picture} className="w-24 h-24 justify-start rounded-lg" />
            </div>
            <div className="flex-col py-2">
              <div className="py-2">{data.name}</div>
              <div className="py-2 text-xs opacity-70">
                <ol>
                  <li>
                    <span>{data.serviceCategories[0].role}</span>
                  </li>
                </ol>
              </div>
              <div className="py-2 text-xs opacity-70">
                <ol>
                  <li>
                    <span>{data.experience} experience</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <div className="py-2">{data.stars}</div>
              <div className="py-2 text-xs opacity-70">
                <ol>
                  <li>
                    <span>{data.country}</span>
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
