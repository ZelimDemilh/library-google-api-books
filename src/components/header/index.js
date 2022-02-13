import React, {useState} from "react";
import SearchAria from "./SearchAria";
import cl from "./Header.module.css";
import Categories from "./Categories";
import Sort from "./Sort";

const Header = () => {

    const[searchParams, setSearchParams] = useState({sort: "relevance", text: "", category: "all"})

    console.log(searchParams)

    const handleSearchParams = {
        sort: (sort) => {
            setSearchParams({ ...searchParams, sort })
        },
        category: (category) => {
            setSearchParams({ ...searchParams, category })
        },
        searchText: (text) => {
            setSearchParams({...searchParams, text })
        }

    }

  return (
    <div className={`${cl.backgroundImg} p-4 text-center`}>
      <div className="mb-5">
        <h1 className="text-white ">Search for books</h1>
      </div>
      <div className="mb-5">
        <SearchAria searchParams ={searchParams} handleSearchParams = {handleSearchParams}/>
      </div>
      <div className="d-flex justify-content-center">
          <Categories searchParams ={searchParams} handleSearchParams = {handleSearchParams}/>
          <Sort searchParams ={searchParams} handleSearchParams = {handleSearchParams}/>
      </div>
    </div>
  );
};

export default Header;
