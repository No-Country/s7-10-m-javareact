
import { RequestCard } from "../../components/Requests/RequestCard";
import { RequestMenu } from "../../components/Requests/RequestMenu";
import { SettingsHeader } from "../../components/UI/SettingsHeader";
import { ProfilePhoto } from "../../components/UI/ProfilePhoto";

const provider = [
  {
    fullName: "Lautaro Matilla",
    date: "24/04",
    hour: "19:00",
    address: "Colon 1775",
    since: "5hr ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus perferendis, obcaecati officia quod odit illum asperiores perspiciatis deleniti dignissimos reprehenderit magnam, corporis earum sapiente distinctio, dolor porro doloremque voluptates!",
    profileUrl:
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
    photos: [
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png"
    ]
  },
  {
    fullName: "Lautaro Matilla",
    date: "24/04",
    hour: "19:00",
    address: "Colon 1775",
    since: "5hr ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus perferendis, obcaecati officia quod odit illum asperiores perspiciatis deleniti dignissimos reprehenderit magnam, corporis earum sapiente distinctio, dolor porro doloremque voluptates!",
    profileUrl:
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
    photos: [
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png"
    ]
  },
  {
    fullName: "Lautaro Matilla",
    date: "24/04",
    hour: "19:00",
    address: "Colon 1775",
    since: "5hr ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus perferendis, obcaecati officia quod odit illum asperiores perspiciatis deleniti dignissimos reprehenderit magnam, corporis earum sapiente distinctio, dolor porro doloremque voluptates!",
    profileUrl:
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
    photos: [
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png",
      "https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png"
    ]
  }
];
export const Requests = () => {
  return (
    <div>
      <SettingsHeader>Request</SettingsHeader>
      <ProfilePhoto />
      <RequestMenu />
      <div className="mt-10">
        {provider.map((value, index) => (
          <RequestCard key={index} provider={value} />
        ))}
      </div>
    </div>
  );
};
