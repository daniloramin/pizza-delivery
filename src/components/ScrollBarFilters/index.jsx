import "./style.scss";

export const ScrollBarFilters = ({ filterItems, checkItem }) => {
  return (
    <div id="recommendation-filter">
      {filterItems.map((item) => {
        return (
          <a
            key={item.id}
            href={`#${item.filter}`}
            onClick={() => {
              checkItem(item);
            }}
            className={`filter-item ${item.checked && "checked"}`}
            disabled={item.checked ? true : false}
          >
            {item.filter}
          </a>
        );
      })}
    </div>
  );
};
