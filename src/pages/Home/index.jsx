import "./style.scss";
import { Header } from "../../components/Header";
import { SearchField } from "../../components/SearchField";
import { Recomendation } from "../../components/Recomendation";
import { SearchResult } from "../../components/SearchResult";

import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const { search, setSearch } = useOutletContext();

  return (
    <div id="home">
      <Header />
      {search.length === 0 && (
        <>
          <div id="welcome">
            <h2 className="title">Hi Victoria West</h2>
            <span>
              Find the most delicious pizza and have it deliverid to your door
            </span>
          </div>
          <SearchField onSetSearch={(text) => setSearch(text)} />
          <Recomendation />
        </>
      )}
      {search.length > 0 && <SearchResult />}
    </div>
  );
};
