import React from "react";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();

let greeting = " ";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning !!";
  cssStyle.color = "Green";
} else if (curDate >= 12 && curDate < 20) {
  greeting = "Good Afternoon !!";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night !!";
  cssStyle.color = "Silver";
}

function Heading() {
  return (
    <div>
      <h1>
        Hello Sir,<span style={cssStyle}> {greeting}</span>
      </h1>
    </div>
  );
}

export default Heading;
