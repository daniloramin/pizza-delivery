import "./style.scss";
import { BsFillClockFill, BsFillStarFill } from "react-icons/bs";

import { FaHeart } from "react-icons/fa";

export const RecommendationResults = () => {
  return (
    <div id="recommendation-results">
      <a href="#">
        <div className="recommendation-results-items">
          <FaHeart className="heart" />
          <div className="result-image"></div>
          <h3 className="result-title">Margherita Pizza</h3>
          <span className="result-time">
            <BsFillClockFill className="clock" /> 30 min
          </span>
          <p className="price">$12.50</p>
          <p className="evaluation">
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill /> 4.8
          </p>
        </div>
      </a>

      <a href="#">
        <div className="recommendation-results-items">
          <FaHeart className="heart" />
          <div className="result-image"></div>
          <h3 className="result-title">Four Cheese Pizza</h3>
          <span className="result-time">
            <BsFillClockFill className="clock" /> 45 min
          </span>
          <p className="price">$16.90</p>
          <p className="evaluation">
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill /> 4.9
          </p>
        </div>
      </a>

      <a href="#">
        <div className="recommendation-results-items">
          <FaHeart className="heart" />
          <div className="result-image"></div>
          <h3 className="result-title">Mediterranean Pizza</h3>
          <span className="result-time">
            <BsFillClockFill className="clock" /> 30 min
          </span>
          <p className="price">$24.50</p>
          <p className="evaluation">
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill /> 4.9
          </p>
        </div>
      </a>

      <a href="#">
        <div className="recommendation-results-items">
          <FaHeart className="heart" />
          <div className="result-image"></div>
          <h3 className="result-title">Chicken Pizza</h3>
          <span className="result-time">
            <BsFillClockFill className="clock" /> 40 min
          </span>
          <p className="price">$16.85</p>
          <p className="evaluation">
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill /> 4.7
          </p>
        </div>
      </a>
    </div>
  );
};
