import React from "react";
import MapContext from "./contextApi";

import arrow from "../images/icon-arrow.svg";
import { useContext } from "react";

const Search = () => {
  const { address, setAddress, mapData, fetchMapDetails } =
    useContext(MapContext);

  const handleSearch = async () => {
    await fetchMapDetails(address);
  };

  return (
    <div>
      <div className=" mx-auto flex justify-center pt-8">
        <input
          type="type"
          value={address}
          id={mapData.ip}
          className=" w-96 rounded-l-md pl-5 pr-5"
          placeholder="Search for any IP address or admin"
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className=" bg-black p-4 rounded-r-md" onClick={handleSearch}>
          <img src={arrow} alt="arrow" className="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
