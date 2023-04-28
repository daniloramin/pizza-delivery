import "./style.scss";
import { Header } from "../../components/Header";
import { SearchField } from "../../components/SearchField";
import { Recomendation } from "../../components/Recomendation";

export const Home = () => {
  return (
    <div id="home">
      <Header />
      <div id="welcome">
        <h2 className="title">Hi Victoria West</h2>
        <span>
          Find the most delicious pizza and have it deliverid to your door
        </span>
      </div>
      <SearchField />
      <Recomendation />
    </div>
  );
};
