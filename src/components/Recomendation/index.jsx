import { useState } from "react";
import { ScrollBarFilters } from "../ScrollBarFilters";
import { RecommendationResults } from "./RecommendationResults";

const data = [
  { id: 1, filter: "All Food", checked: false },
  { id: 2, filter: "Pizza", checked: true },
  { id: 3, filter: "Burger", checked: false },
  { id: 4, filter: "Snack", checked: false },
  { id: 5, filter: "Sushi", checked: false },
  { id: 6, filter: "Breakfast", checked: false },
  { id: 7, filter: "Dessert", checked: false },
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
      <ScrollBarFilters filterItems={filterItems} checkItem={checkItem} />
      <RecommendationResults />
    </>
  );
};
