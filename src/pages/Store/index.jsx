import "./style.scss";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BsFillClockFill, BsEmojiSmileFill } from "react-icons/bs";

import { useStores } from "../../reducers/stores";

import { Title } from "../../components/Title";
import { SubInfo } from "../../components/SubInfo";
import { Evaluation } from "../../components/Evaluation";
import { ScrollBarFilters } from "../../components/ScrollBarFilters";
import { useState } from "react";
import { Price } from "../../components/Price";
import { FoodModal } from "../../components/FoodModal";

export const Store = () => {
  const { id } = useParams();
  const { getOne } = useStores();
  const [store] = getOne(id);

  const [filters, setFilters] = useState(store.products);
  const [showModal, setShowModal] = useState(false);
  const [foodClicked, setFoodClicked] = useState(null);

  function checkItem(item) {
    const newItems = filters.map((filter) =>
      filter.id === item.id
        ? { ...filter, checked: true }
        : { ...filter, checked: false }
    );

    setFilters(newItems);
  }

  return (
    <div id="store">
      <Link className="back-button" to={-1}>
        <FiArrowLeft />
      </Link>
      <div className="store-image"></div>

      <div className="content">
        <header>
          <div className="store-principal">
            <Title type="h2">{store.name}</Title>
            <SubInfo>{store.category}</SubInfo>
          </div>

          <Evaluation value={store.evaluation} />

          <div className="more-infos">
            <SubInfo>
              <BsFillClockFill /> Within 45 min
            </SubInfo>
            <SubInfo>
              <BsEmojiSmileFill /> Very Good (Based on 428 ratings)
            </SubInfo>
          </div>
        </header>

        <div>
          <ScrollBarFilters filterItems={filters} checkItem={checkItem} />
        </div>

        <div className="store-foods">
          {filters.map((item) => {
            return (
              <div
                key={item.id}
                id={`${item.filter}`}
                className="foods-category"
              >
                {item.foods.length > 0 && (
                  <>
                    <Title type="h2">{item.filter}</Title>

                    <div className="food-category-items">
                      {item.foods.map((food) => {
                        return (
                          <div
                            className="food-item"
                            key={food.id}
                            onClick={() => {
                              setShowModal(true);
                              setFoodClicked(food);
                            }}
                          >
                            <div className="food-image"></div>

                            <div className="food-content">
                              <Title type="h3">{food.name}</Title>

                              <SubInfo>{food.ingredients.join(", ")}</SubInfo>

                              <Price>${food.price}</Price>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showModal && (
        <FoodModal closeModal={() => setShowModal(false)} food={foodClicked} />
      )}
    </div>
  );
};
