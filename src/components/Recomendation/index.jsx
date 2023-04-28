import { useState } from "react";
import { RecommendationFilter } from "./RecommendationFilter";
import { RecommendationResults } from "./RecommendationResults";

const data = [
  { id: 1, name: "All Food", checked: false },
  { id: 2, name: "Pizza", checked: true },
  { id: 3, name: "Burger", checked: false },
  { id: 4, name: "Snack", checked: false },
  { id: 5, name: "Sushi", checked: false },
  { id: 6, name: "Breakfast", checked: false },
  { id: 7, name: "Dessert", checked: false },
];

export const Recomendation = () => {
  const [filterItems, setFilterItems] = useState(data);

  function checkItem(filterItem) {
    const newItems = filterItems.map((item) =>
      item.id === filterItem.id
        ? { ...item, checked: true }
        : { ...item, checked: false }
    );

    setFilterItems(newItems);
  }

  return (
    <>
      <RecommendationFilter filterItems={filterItems} checkItem={checkItem} />
      <RecommendationResults />
    </>
  );
};
