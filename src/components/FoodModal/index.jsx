import { SubInfo } from "../SubInfo";
import { Title } from "../Title";
import "./style.scss";

import { FaHeart } from "react-icons/fa";
import { FiArrowLeft, FiHeart } from "react-icons/fi";
import { BsFillClockFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { Evaluation } from "../Evaluation";
import { Price } from "../Price";

export const FoodModal = ({ closeModal, food }) => {
  return (
    <div id="food-modal">
      <header className="food-header">
        <button className="close-modal" onClick={closeModal}>
          <FiArrowLeft />
        </button>
        <span>{food.category}</span>

        {food.favorite && <FaHeart />}
        {!food.favorite && <FiHeart />}
      </header>

      <div className="food-content">
        <div className="food-image"></div>

        <div className="food-infos">
          <Title type="h2">{food.name}</Title>

          <SubInfo>{food.category}</SubInfo>

          <SubInfo>
            <BsFillClockFill /> {food.category} {<BsFillHandThumbsUpFill />}{" "}
            {food.kcal}
          </SubInfo>

          <Evaluation value={food.evaluation} />
        </div>

        <div className="food-description">
          <Title type="h3">Description</Title>
          <SubInfo>{food.description}</SubInfo>
        </div>

        <div className="food-ingredients">
          <Title type="h3">Ingredients</Title>

          <div className="ingredient-items">
            {food.ingredients.map((ingredient) => {
              return (
                <div key={ingredient} className="ingredient-item">
                  {ingredient}
                </div>
              );
            })}
          </div>
        </div>

        <div className="price-cart">
          <Price>${food.price}</Price>

          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
