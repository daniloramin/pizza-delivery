import { useRef, useState } from "react";
import "./style.scss";

import { MdLocationPin } from "react-icons/md";
import { FiChevronDown, FiGift } from "react-icons/fi";
import { GiPaperBagOpen } from "react-icons/gi";
import { TbPizza, TbFlower, TbDiscount2 } from "react-icons/tb";
import { BsFillClockFill, BsFillStarFill } from "react-icons/bs";

import { Title } from "../Title";
import { SubInfo } from "../SubInfo";

const filtersData = [
  {
    id: 1,
    name: "Grocery",
    checked: false,
  },
  {
    id: 2,
    name: "Food",
    checked: true,
  },
  {
    id: 3,
    name: "Gift",
    checked: false,
  },
  {
    id: 4,
    name: "Flower",
    checked: false,
  },
];

const storesData = [
  {
    id: 1,
    name: "Pizza Planet",
    evaluation: 4.9,
    category: "Pizza & Fastfood Restaurant",
    coockingTIme: "30 min",
    discount: "15% off",
  },
  {
    id: 2,
    name: "Dough Master's Pizza",
    evaluation: 4.9,
    category: "Pizza & Fastfood Restaurant",
    coockingTIme: "45 min",
    discount: "10% off",
  },
];

export const SearchResult = () => {
  const [filters, setFilters] = useState(filtersData);
  const stores = useRef(storesData);
  console.log(stores);

  function selectFilter(filter) {
    const newFilters = filters.map((f) => {
      return f.id === filter.id
        ? { ...f, checked: true }
        : { ...f, checked: false };
    });

    setFilters(newFilters);
  }

  return (
    <div id="search-result">
      <address>
        <div className="location-icon">
          <MdLocationPin />
        </div>
        <div className="address-content">
          <h3>hutchinson 300</h3> <FiChevronDown />
          <p>Ave Mount Vernon NY 38273-1816 USA</p>
        </div>
      </address>

      <div className="order-filter">
        <h2>What would you like to order?</h2>
        <div className="order-filter-items">
          {filters.map((filter) => {
            return (
              <div
                key={filter.id}
                className={`${filter.checked && "checked"}`}
                onClick={() => {
                  selectFilter(filter);
                }}
              >
                {filter.name === "Grocery" && <GiPaperBagOpen />}
                {filter.name === "Food" && <TbPizza />}
                {filter.name === "Gift" && <FiGift />}
                {filter.name === "Flower" && <TbFlower />}
                <span>{filter.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="store-recommendation">
        <div className="store-logo"></div>
        <div className="info">
          <h3>Meat Lover's Pizza</h3>
          <p>With special hot sauce</p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="result-stores">
        <div className="result-stores-title">
          <Title type="h2">All Stores Near You</Title>
          <span>See More</span>
        </div>

        {stores.current.map((store) => {
          return (
            <div key={store.id} className="result-stores-item">
              <div className="store-logo"></div>

              <div className="store-info">
                <div className="store-title">
                  <Title type="h2">{store.name}</Title>

                  <span className="result-store-score">
                    {store.evaluation} <BsFillStarFill />
                  </span>
                </div>

                <p>
                  <SubInfo>{store.category}</SubInfo>
                </p>

                <div className="store-order-infos">
                  <SubInfo>
                    <BsFillClockFill
                      style={{ fontSize: "14px", color: "#DAD1D1" }}
                    />{" "}
                    Within {store.coockingTIme}
                  </SubInfo>

                  <SubInfo>
                    <TbDiscount2
                      style={{ fontSize: "18px", color: "#DAD1D1" }}
                    />{" "}
                    {store.discount}
                  </SubInfo>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
