import { IoLocationSharp } from "react-icons/io5";

const SearchForm = () => {
  return (
    <div className="flex items-center px-4 py-4 ">
      <form className="flex items-center rounded-3x border-2 rounded-3xl border-gray-300 px-2 py-1 mb-5 mt-5 flex-1">
        <input
          type="text"
          placeholder="🔍︎  search"
          className="w-full py-1 px-2 font-georama rounded-md focus:outline-none focus:border-blue-500"
        />
      </form>
      <div className="ml-2">
        <IoLocationSharp className="text-[#004E98] text-2xl" />
      </div>
    </div>
  );
};

export default SearchForm;
