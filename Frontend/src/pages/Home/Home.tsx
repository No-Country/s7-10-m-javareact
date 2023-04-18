import { Table } from "../../components/Home/Table";
import { Header } from "../../components/Home/Header";
import StartNow from "../../components/Home/StartNow";
import SearchForm from "../../components/Home/Search";
import Spinner from "../../components/Spinner/Spinner";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container m-auto max-w-7xl">
        <SearchForm />
        <h1 className="text-lg font-georama px-4 py-4">
          With just a few clicks, you can connect with top-rated professionals in your area who are
          ready to help you get your home back in shape
        </h1>
        <Table />
        <StartNow  />
      </div>
    </>
  );
}
