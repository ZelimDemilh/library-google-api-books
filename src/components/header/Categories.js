import React from 'react';
import {useSelector} from "react-redux";

const Categories = ({handleSearchParams, searchParams}) => {

    const categories = useSelector(state => state.categories.categories)

    return (
        <div className="d-flex w-25 me-5">
            <span className="p-2 text-white fw-bolder">Categories:</span>
            <select className="form-select " onChange={(e)=>handleSearchParams.category(e.target.value)} aria-label="Default select example">
                <option onChange={(category)=> handleSearchParams.category(category)}>all</option>
                {categories.map((category, index) => {
                    return <option key={index}> {category} </option>;
                })}
            </select>
        </div>
    );
};

export default Categories;