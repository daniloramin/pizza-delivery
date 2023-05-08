import "./style.scss";

import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router-dom";

import { useStores } from "../../reducers/stores";

export const Root = () => {
  const { stores, getOne } = useStores();

  return (
    <div id="page-content">
      <main>
        <Outlet context={{ stores, getOne }} />
      </main>
      <NavBar />
    </div>
  );
};
