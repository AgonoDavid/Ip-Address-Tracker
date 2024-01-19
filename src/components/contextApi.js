import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MapContext = createContext([]);

export const MapDataProvider = ({ children }) => {
  const [address, setAddress] = useState("");

  const API_URL = `https://geo.ipify.org/api/v2/country?apiKey=at_oW1TLOC33qs0owhlgH7TUrg8m4v0k&ipAddress=${address}`;

  const [mapData, setMapData] = useState([]);

  const fetchMapDetails = async () => {
    try {
      const result = await axios.get(API_URL);
      setMapData(result.data);
      console.log(result.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchMapDetails();
  }, []);

  return (
    <MapContext.Provider
      value={{ mapData, address, setAddress, fetchMapDetails }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContext;
