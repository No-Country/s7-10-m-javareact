import { BiUserCircle } from "react-icons/bi";
import { Table } from "../../components/Home/Table";
import { Header } from "../../components/Home/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container m-auto">
        <Table />
      </div>
      
    </>
  );
}
