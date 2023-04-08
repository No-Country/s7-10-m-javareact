import React from "react";
import data from "./data.json";
import { GrFacebook, GrInstagram } from "react-icons/gr";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div className="row mx-3">
            <div className="relative col border-red-400 border border-dashed">
              {/* <div className="absolute">
                <img src={data.picture} className="w-24 h-24 justify-start" />
              </div> */}
              <div className="row flex justify-around py-4 mx-4">
                <div className="col">
                  <h2>{data.name}</h2>
                </div>
                <div className="col">
                  <h2>{data.stars}</h2>
                </div>
                <div className="col"></div>
              </div>
              <div className="row flex justify-around">
                <div className="col">
                  <ol className="list-disc">
                    <li>{data.serviceCategories[0].role}</li>
                  </ol>
                </div>
                <div className="col">
                  <ol className="list-disc">
                    <li>{data.state}</li>
                  </ol>
                </div>
              </div>
              <div className="row flex justify-around py-4 mx-4">
                <div className="col">
                  <ol className="list-disc">
                    <li>{data.experience} experience</li>
                  </ol>
                </div>
                <div className="col flex py-4 mx-4 justify-between">
                  <span>
                    <GrFacebook className="" />
                  </span>
                  <span>
                    <GrInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="row border-red-400 border-dashed border">
              <span className="">button</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
