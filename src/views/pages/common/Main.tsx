import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../home/Home";
// const Home = lazy(() => import("../home/Home"));
const Home = React.lazy(() => import("../home/Home"));
const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Main;
