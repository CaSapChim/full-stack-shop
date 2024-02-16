import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home/Home";
// import { Products } from "./Page/Products/Components/Products";
// import { Support } from "./Page/Support/Components/Support";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/products" element={<Products/>} /> */}
      {/* <Route path="/support" element={<Support/>} /> */}
    </Routes>
  );
};
