import React, { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export const Options = () => {
  let status = useState(true);
  return (
    <div className="flex flex-col px-6 font-inter gap-6 mt-12">
      <div className="flex flex-col px-6 font-inter gap-6 mb-6">
        <p className="font-semibold font-inter text-[#004E98]/70">My Profile</p>
        <p> Edit your profile</p>
        <p> Change password</p>
        {status && <p> Edit schedule</p>}
        <p className="font-semibold font-inter text-[#004E98]/70">My contracted services</p>
        <p> Appointments</p>
        <p> Track history</p>
        {status && (
          <>
            <p>Pending requests</p>
            <p>Approved request</p>
            <p>Works Done</p>
          </>
        )}
      </div>
      <div className="flex justify-between">
        <p>Notifications</p>
        <BsToggleOff className="text-2xl" />
      </div>
      <div className="flex justify-between">
        <p>Synchronize calendar</p>
        <BsToggleOn className="text-2xl" />
      </div>
      <p>Terms and Conditions</p>
      <p>Delete account</p>
      <p>Log out</p>
    </div>
  );
};
