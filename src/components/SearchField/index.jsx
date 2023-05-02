import { useRef } from "react";
import "./style.scss";
import { BiSearch } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";

export const SearchField = ({ onSetSearch }) => {
  const text = useRef();

  return (
    <form
      id="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSetSearch(text.current.value);
      }}
    >
      <BiSearch />
      <input type="text" placeholder="Search" ref={text} />
      <button>
        <IoMdOptions className="search-options" />
      </button>
    </form>
  );
};
