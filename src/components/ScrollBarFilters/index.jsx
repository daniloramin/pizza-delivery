import "./style.scss";

export const ScrollBarFilters = ({ filterItems, checkItem }) => {
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
            {item.filter}
          </button>
        );
      })}
    </div>
  );
};
