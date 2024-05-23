import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sdata from "./Sdata";
import Card from "./Cards";
import "./index.css";

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top Netflix Series in 2024 </h1>

    {Sdata.map((val, index) => {
      console.log(index);
      return (
        <Card
          key={val.id}
          imgscr={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
