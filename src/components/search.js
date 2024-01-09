import React from "react";
import arrow from "../images/icon-arrow.svg";

const Search = () => {
  return (
    <div>
      <div className=" mx-auto flex justify-center pt-8">
        <input
          type="search"
          className=" w-96 rounded-l-md pl-5 pr-5"
          placeholder="Search for any IP address or admin"
        />
        <div className=" bg-black p-4 rounded-r-md">
          <img src={arrow} alt="arrow" className="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
