import "./style.scss";

export const Title = ({ type, children }) => {
  return (
    <>
      {type === "h1" && <h1 className="title">{children}</h1>}
      {type === "h2" && <h2 className="title">{children}</h2>}
      {type === "h3" && <h3 className="title">{children}</h3>}
    </>
  );
};
