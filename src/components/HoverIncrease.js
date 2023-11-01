import React, { useState } from "react";
import withCounter from "./withCounter";

function HoverIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;

  return (
    <div>

      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on Hover
      </button>
      <p style={{ fontSize }}>Size of font in onMouseOver func: {fontSize}</p>
      <p> Val;use of 'name' in HoverIncrease: {props.name}</p>
      <button onMouseOver={() => incrementCounter()}>Increment Counter</button>
      <p>Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
}

export default withCounter(HoverIncrease);