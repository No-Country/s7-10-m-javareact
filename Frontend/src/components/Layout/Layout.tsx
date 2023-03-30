import Navbar from "../Navbar/Navbar";
import Client from "../OnBoarding/Client";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {/* <Client/> */}
      {children}
      <div>Footer</div>
    </>
  );
}
