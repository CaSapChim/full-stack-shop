import DefaultLayout from "../layout/DefaultLayout";
import { Home } from "../page/Home";
import { Products } from "../page/Products";
import { BonKoBon } from "../page/404";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/products", component: Products, layout: DefaultLayout },
  { path: "*", component: BonKoBon, layout: DefaultLayout },
];
export const privateRoutes: string[] = [];
