import "./style.scss";

import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router-dom";

import { useStores } from "../../reducers/stores";
import { useSearch } from "../../reducers/search";

export const Root = () => {
  const { stores, getOne } = useStores();
  const { search, setSearch } = useSearch();

  return (
    <div id="page-content">
      <main>
        <Outlet context={{ stores, getOne, search, setSearch }} />
      </main>
      <NavBar />
    </div>
  );
};
