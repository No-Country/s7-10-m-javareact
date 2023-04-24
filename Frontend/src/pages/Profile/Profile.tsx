import { ProfilePhoto } from "../../components/UI/ProfilePhoto";
import { SettingsHeader } from "../../components/UI/SettingsHeader";
import { ProfileForm } from "../../components/Profile/ProfileForm";
export default function Profile() {
  return (
    <div>
      <SettingsHeader>Profile</SettingsHeader>
      <div className="flex justify-center mt-12">
        <ProfilePhoto />
      </div>
      <ProfileForm />
    </div>
  );
}
