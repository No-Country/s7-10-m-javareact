import Navbar from "../Navbar/Navbar";
import { Footer } from "./Footer";
// import Client from "../OnBoarding/Client";
// import Provider from "../OnBoarding/Provider";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {/* <Client />
      <Provider /> */}
      {children}
      <Footer />
    </>
  );
}
