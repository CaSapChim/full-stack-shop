import DefaultLayout from "../layout/DefaultLayout";
import AuthLayout from "../layout/AuthLayout";
import { Home } from "../page/Home";
import { Products } from "../page/Products";
import { Support } from "../page/Support";
import { BonKoBon } from "../page/404";
import { Login } from "../page/auth/Login";
import { Reg } from "../page/auth/Reg";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/products", component: Products, layout: DefaultLayout },
  { path: "/support", component: Support, layout: DefaultLayout },
  { path: "/auth/login", component: Login, layout: AuthLayout },
  { path: "/auth/reg", component: Reg, layout: AuthLayout },
  { path: "*", component: BonKoBon, layout: DefaultLayout },
];
export const privateRoutes: string[] = [];
