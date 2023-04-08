import React from "react";
import data from "./data.json";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div className="row mx-3">
            <div className="col border-red-400 border border-dashed">
              <div className="absolute">img</div>
              <div className="row flex justify-around py-4">
                <div className="col">{data.name}</div>
                <div className="col">{data.stars}</div>
                <div className="col">icons</div>
              </div>
              <div className="row flex justify-around">
                <div className="col">
                  <ol className="list-disc">
                    <li>Plumber</li>
                  </ol>
                </div>
                <div className="col">
                  <ol className="list-disc">
                    <li>Buenos Aires</li>
                  </ol>
                </div>
              </div>
              <div className="row flex justify-around">
                <div className="col">
                  <ol className="list-disc">
                    <li>12 years experience</li>
                  </ol>
                </div>
                <div className="col">
                  <p>icons</p>
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
