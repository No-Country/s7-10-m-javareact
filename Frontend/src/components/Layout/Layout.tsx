import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar/>
      {children}
      <div>Footer</div>
    </>
  );
}
