import React from "react";
import MapContext from "./contextApi";
import { useContext } from "react";

const Card = () => {
  const { mapData } = useContext(MapContext);

  const country = mapData.location && mapData.location.country;

  return (
    <div className=" mt-6">
      <div
        className=" bg-white  max-w-[800px] m-auto rounded-[10px]"
        style={{ border: "2px solid white", width: "100%", padding: "35px" }}
      >
        <div className=" flex justify-between text-black">
          <div>
            <h3>Ip Address</h3>
            <h1>{mapData.ip}</h1>
          </div>
          <div>
            <h3>Location</h3>
            <h1>{country || "N/A"}</h1>
          </div>
          <div>
            <h3>TimeZone</h3>
            {/* <h1>{mapData.location.timezone || "N/A"}</h1> */}
          </div>
          <div>
            <h3>Isp</h3>
            <h1>{mapData.isp}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
