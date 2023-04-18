import ButtonWithModal from "../Header/ButtonWithModal";
import Navbar from "../Navbar/Navbar";
import { Footer } from "./Footer";
import Client from "../OnBoarding/Client";
import Provider from "../OnBoarding/Provider";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
