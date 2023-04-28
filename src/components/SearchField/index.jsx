import "./style.scss";
import { BiSearch } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";

export const SearchField = () => {
  return (
    <form id="search" onSubmit={(e) => e.preventDefault()}>
      <BiSearch />
      <input type="text" placeholder="Search" />
      <button>
        <IoMdOptions className="search-options" />
      </button>
    </form>
  );
};
