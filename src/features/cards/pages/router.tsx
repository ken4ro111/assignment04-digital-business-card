import { CardDetail } from "./CardDetail";

export const cardsRouter = [
  {
    path: "/cards",
    element: <div>カード一覧画面</div>,
  },
  {
    path: "/cards/:id",
    element: <CardDetail />,
  },
];
