import "./style.scss";
import { NavLink, useMatch } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { ImMap2 } from "react-icons/im";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <VscHome className="icon" />
      </NavLink>
      <NavLink to="/products">
        <FiShoppingBag />
      </NavLink>
      <NavLink to="/track-delivery">
        <ImMap2 />
      </NavLink>
      <NavLink to="/user">
        <FiUser />
      </NavLink>
    </nav>
  );
};
