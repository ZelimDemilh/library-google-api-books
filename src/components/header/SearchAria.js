import React, {useState} from "react";

const SearchAria = () => {

    const [search, setSearch] = useState("")

    const handleSearch = (text) => {
        setSearch(text)
    }

  return (
    <div>
      <input type="text" className='w-50' onChange={(e)=> handleSearch(e.target.value)} value={search}/>
        <i className="bi bi-search"/>
    </div>
  );
};

export default SearchAria;
