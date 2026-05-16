import { createBrowserRouter } from "react-router-dom";
import { cardsRouter } from "../features/cards/pages/router";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>HOME画面</div>,
  },
  ...cardsRouter,
]);
