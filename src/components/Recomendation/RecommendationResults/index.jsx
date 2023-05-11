import "./style.scss";

import { FaHeart } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";

import { Title } from "../../Title";
import { SubInfo } from "../../SubInfo";
import { Price } from "../../Price";
import { Evaluation } from "../../Evaluation";
import { FoodModal } from "../../FoodModal";

import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export const RecommendationResults = () => {
  const { stores } = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [foodClicked, setFoodClicked] = useState(null);

  return (
    <div id="recommendation-results">
      {stores.map((store) => {
        return store.products.map((product) => {
          return product.foods.map((pizza) => {
            return (
              <button
                onClick={() => {
                  setFoodClicked(pizza);
                  setShowModal(true);
                }}
                key={pizza.id}
              >
                <div className="recommendation-results-items">
                  <FaHeart
                    className="heart"
                    style={{ color: pizza.favorite && "#ff4f4f" }}
                  />
                  <div className="result-image"></div>
                  <div className="principal">
                    <Title type="h3">{pizza.name}</Title>

                    <SubInfo>
                      <BsFillClockFill
                        style={{ fontSize: "14px", color: "#DAD1D1" }}
                      />
                      {pizza.cookingTime}
                    </SubInfo>

                    <Price>${pizza.price}</Price>
                  </div>
                  <Evaluation value={pizza.evaluation} />
                </div>
              </button>
            );
          });
        });
      })}

      {showModal && (
        <FoodModal closeModal={() => setShowModal(false)} food={foodClicked} />
      )}
    </div>
  );
};
