import "./style.scss";

export const RecommendationFilter = ({ filterItems, checkItem }) => {
  return (
    <div id="recommendation-filter">
      {filterItems.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              checkItem(item);
            }}
            className={`filter-item ${item.checked && "checked"}`}
            disabled={item.checked ? true : false}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
