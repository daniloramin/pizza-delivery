import "./style.scss";

import { BsFillStarFill } from "react-icons/bs";

const starsStyle = { color: "#ff9540" };

export const Evaluation = ({ value }) => {
  return (
    <p className="evaluation">
      {value >= 0.5 ? (
        <BsFillStarFill style={starsStyle} />
      ) : (
        <BsFillStarFill />
      )}

      {value >= 1.5 ? (
        <BsFillStarFill style={starsStyle} />
      ) : (
        <BsFillStarFill />
      )}

      {value >= 2.5 ? (
        <BsFillStarFill style={starsStyle} />
      ) : (
        <BsFillStarFill />
      )}

      {value >= 3.5 ? (
        <BsFillStarFill style={starsStyle} />
      ) : (
        <BsFillStarFill />
      )}

      {value >= 4.5 ? (
        <BsFillStarFill style={starsStyle} />
      ) : (
        <BsFillStarFill />
      )}

      {value}
    </p>
  );
};
