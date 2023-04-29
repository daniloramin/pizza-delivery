import { useState } from "react";
import "./style.scss";

import { FaHeart } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";

import { Title } from "../../Title";
import { SubInfo } from "../../SubInfo";
import { Price } from "../../Price";
import { Evaluation } from "../../Evaluation";

const data = [
  {
    favorite: false,
    id: 1,
    name: "Margherita Pizza",
    cookingTime: "30 min",
    price: "12.50",
    evaluation: 4.8,
  },
  {
    favorite: true,
    id: 2,
    name: "Four Cheese Pizza",
    cookingTime: "45 min",
    price: "16.90",
    evaluation: 4.9,
  },
  {
    favorite: true,
    id: 3,
    name: "Mediterranean Pizza",
    cookingTime: "30 min",
    price: "24.50",
    evaluation: 4.9,
  },
  {
    favorite: false,
    id: 4,
    name: "Chicken Pizza",
    cookingTime: "40 min",
    price: "16.85",
    evaluation: 4.4,
  },
];

export const RecommendationResults = () => {
  const [pizzas, setPizzas] = useState(data);

  return (
    <div id="recommendation-results">
      {pizzas.map((pizza) => {
        return (
          <a href="#" key={pizza.id}>
            <div className="recommendation-results-items">
              <FaHeart
                className="heart"
                style={{ color: pizza.favorite && "#ff4f4f" }}
              />

              <div className="result-image"></div>

              <Title type="h3">{pizza.name}</Title>

              <SubInfo>
                <BsFillClockFill
                  style={{ fontSize: "14px", color: "#DAD1D1" }}
                />
                {pizza.cookingTime}
              </SubInfo>

              <Price>${pizza.price}</Price>

              <Evaluation value={pizza.evaluation} />
            </div>
          </a>
        );
      })}
    </div>
  );
};
