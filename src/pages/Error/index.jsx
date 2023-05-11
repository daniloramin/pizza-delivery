import "./style.scss";

import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div id="error-page">
      <header>Ops, ocorreu um erro!</header>

      <p>Essa página ainda não existe.</p>

      <Link to="/">Voltar para Homepage</Link>
    </div>
  );
};
