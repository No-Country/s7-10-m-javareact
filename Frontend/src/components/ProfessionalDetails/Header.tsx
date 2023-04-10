import React from "react";
import data from "./data.json";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { HiChatAlt2 } from "react-icons/hi";

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
              <div className="py-2">save</div>
            </div>
          </div>
          <div className="flex justify-around py-4">
            <div className="bg-blue-700 rounded-full mr-12 px-8 py-2 text-center align-content-center">
              <span className="mx-6 text-white font-light text-center">Hire</span>
            </div>
            <div className="flex justify-end text-2xl mx-10">
              <HiChatAlt2 className="text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
