import React from "react";
import Styles from "./style.module.css";
import Search from "./search";
import Card from "./Card";

const Header = () => {
  return (
    <div>
      <div className={Styles.bg_img}>
        <h2 className=" text-center text-3xl  text-white">
          IP Address Tracker
        </h2>
        <div>
          <Search />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Header;
