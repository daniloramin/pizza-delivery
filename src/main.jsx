import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { TrackDelivery } from "./pages/TrackDelivery";
import { Store } from "./pages/Store";
import { Error } from "./pages/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        { path: "track-delivery", element: <TrackDelivery /> },
        { path: "stores/:id", element: <Store /> },
      ],
    },
  ],
  {
    basename: "/pizza-delivery",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
