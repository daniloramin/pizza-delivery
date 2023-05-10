import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { HeaderSearchBar } from "./HeaderSearchBar";

export const Header = () => {
  const { search } = useOutletContext();
  const [showSearchBar, setShow] = useState(false);

  return (
    <header>
      <AiOutlineMenu />
      <h1>Home</h1>
      {search.length === 0 && <FiShoppingBag />}
      {search.length > 0 && <FiSearch onClick={() => setShow(true)} />}

      {showSearchBar && (
        <HeaderSearchBar closeSearchBar={() => setShow(false)} />
      )}
    </header>
  );
};
