import "./style.scss";
import { Header } from "../../components/Header";
import { SearchField } from "../../components/SearchField";
import { Recomendation } from "../../components/Recomendation";
import { SearchResult } from "../../components/SearchResult";
import { useState } from "react";

export const Home = () => {
  const [search, setSearch] = useState("");

  function onSetSearch(text) {
    setSearch(text);
  }

  return (
    <div id="home">
      <Header />
      <div id="welcome">
        <h2 className="title">Hi Victoria West</h2>
        <span>
          Find the most delicious pizza and have it deliverid to your door
        </span>
      </div>
      <SearchField onSetSearch={onSetSearch} />
      {search.length === 0 && <Recomendation />}
      {search.length > 0 && <SearchResult />}
    </div>
  );
};
