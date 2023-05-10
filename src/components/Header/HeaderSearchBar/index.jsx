import "./style.scss";

import { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const timeToLoad = 2.2;

export const HeaderSearchBar = ({ closeSearchBar }) => {
  const { search, setSearch } = useOutletContext();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = search;

    inputRef.current.focus();
  }, []);

  return (
    <form
      id="header-search-bar"
      onSubmit={(e) => {
        e.preventDefault();

        setSearch(inputRef.current.value);
        closeSearchBar();
      }}
    >
      <BiSearch /> <input type="text" ref={inputRef} />{" "}
      <MdClose
        onClick={() => {
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      />
    </form>
  );
};
