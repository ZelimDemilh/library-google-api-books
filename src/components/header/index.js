import React from "react";
import SearchAria from "./SearchAria";
import Categories from "./Categories";
import Sorting from "./Sorting";
import cl from "./Header.module.css"

const Header = () => {
  return (
      <div className={`${cl.backgroundImg} p-4 text-center`}>
        <div className="mb-5">
          <h1 className="text-white ">Search for books</h1>
        </div>
        <div className="mb-5">
            <SearchAria />
        </div>
        <div className="d-flex justify-content-center">
          <Categories />
          <Sorting />
        </div>
      </div>
  );
};

export default Header;
