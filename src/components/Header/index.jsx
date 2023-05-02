import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

export const Header = ({ search, onSetSearch }) => {
  return (
    <header>
      <AiOutlineMenu />
      <h1>Home</h1>
      {search.length === 0 && <FiShoppingBag />}
      {search.length > 0 && <FiSearch />}
    </header>
  );
};
