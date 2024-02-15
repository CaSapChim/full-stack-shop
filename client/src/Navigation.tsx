import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home/Home";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};
