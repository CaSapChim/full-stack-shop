import DefaultLayout from "../components/layout/DefaultLayout";
import { Home } from "../components/page/Home";
import { Products } from "../components/page/Products";
import { Support } from "../components/page/Support";
import { BonKoBon } from "../components/page/404";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/products", component: Products, layout: DefaultLayout },
  { path: "/support", component: Support, layout: DefaultLayout },
  { path: "*", component: BonKoBon, layout: DefaultLayout },
];
export const privateRoutes: string[] = [];
