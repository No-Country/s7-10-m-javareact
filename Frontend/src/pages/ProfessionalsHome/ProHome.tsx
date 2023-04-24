
import EditSchedule from "../../components/ProHome/EditSchedule";
import ReviewRequests from "../../components/ProHome/ReviewRequests";

type Props = {};

const ProHome = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center font-inter_regular">
        <div className="min-h-screen place-items-center text-center">
          <h1 className="text-lg m-5">Welcome to your dashboard</h1>
          <img src="https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/Home-repair-1_pt4wab.png" alt="" />
          <div>
          <p className=" w-[320px]">As a professional you can edit and manage your information,
             calendar, requests and other important information to offer your services.
              Here you can see your requests and your works in progress and edit your schedule </p>
          </div>
{/*            */}
          <EditSchedule />
          <ReviewRequests />
        </div>
      </div>
    </div>
  );
};

export default ProHome;
