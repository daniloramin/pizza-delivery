import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

export const Header = () => {
  return (
    <header>
      <AiOutlineMenu />
      <h1>Home</h1>
      <FiShoppingBag />
    </header>
  );
};
