import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header";
import HomePage from "./components/pages/homePage/HomePage";
import OneBook from "./components/pages/OneBook";

const App = () => {
  return (
    <div className="container-md">
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/book/:id" element={<OneBook/>}/>
        </Routes>
    </div>
  );
};

export default App;
