import "./style.scss";
import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div id="page-content">
      <main>
        <Outlet />
      </main>
      <NavBar />
    </div>
  );
};
