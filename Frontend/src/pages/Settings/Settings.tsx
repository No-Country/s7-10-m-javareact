import React from "react";
import { ProfileTitle } from "../../components/UI/ProfileTitle";
import { SettingsHeader } from "../../components/UI/SettingsHeader";
import { ProfilePhoto } from "../../components/UI/ProfilePhoto";
import { Options } from "../../components/Settings/Options";

export const Settings = () => {
  return (
    <div>
      <ProfilePhoto />
      <ProfileTitle />
      <Options />
    </div>
  );
};
