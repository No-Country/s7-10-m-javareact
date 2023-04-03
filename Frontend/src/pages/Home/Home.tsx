import { BiUserCircle } from "react-icons/bi";
import { Table } from "../../components/Home/Table";
import { Header } from "../../components/Home/Header";

export default function Home() {
  return (
    <div className="sm:container m-auto sm:p-12">
      <Header />
      <Table />
    </div>
  );
}
