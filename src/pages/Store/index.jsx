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

const dataPizzeria = [
  {
    id: 1,
    filter: "Most Selling",
    checked: true,
    foods: [
      {
        id: 10001,
        category: "Pizza",
        name: "Greek Pizza",
        cookingTime: "25 min",
        kcal: "150 kcal",
        evaluation: 4.8,
        description: "Tasty and hot",
        ingredients: ["Tomatoes", "Sausage", "Garlic", "Cheese"],
        price: "14.90",
      },
      {
        id: 10002,
        category: "Pizza",
        name: "Bacon Pizza",
        cookingTime: "40 min",
        kcal: "172 kcal",
        evaluation: 5.0,
        description: "Hot and tasty",
        ingredients: ["Bacon", "Cheddar", "Onion", "Tomatoes"],
        price: "21.99",
      },
    ],
  },
  {
    id: 2,
    filter: "New Items",
    checked: false,
    foods: [
      // {
      //   category: "",
      //   name: "",
      //   cookingTime: "",
      //   kcal: "",
      //   evaluation: "",
      //   description: "",
      //   ingredients: [""],
      //   price: "",
      // },
    ],
  },
  {
    id: 3,
    filter: "Valuable Promotions",
    checked: false,
    foods: [
      {
        id: 10004,
        category: "Pizza",
        name: "Mediterranean Pizza",
        cookingTime: "30 min",
        kcal: "135 kcal",
        evaluation: 4.9,
        description: "Tasty",
        ingredients: ["Mushroom", "Sausage", "Cheese", "Onion"],
        price: "24.50",
      },
    ],
  },
];

export const Store = () => {
  const { id } = useParams();
  const { getOne } = useStores();
  const [store] = getOne(id);

  const [filters, setFilters] = useState(dataPizzeria);

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
              <div key={item.id} className="foods-category">
                {item.foods.length > 0 && (
                  <>
                    <Title type="h2">{item.filter}</Title>

                    <div className="food-category-items">
                      {item.foods.map((food) => {
                        return (
                          <div className="food-item" key={food.id}>
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
    </div>
  );
};
