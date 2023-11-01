import React, { useState } from "react";
import withCounter from "./withCounter";

function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;
  return (
    <div>

      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with Click
      </button>
      <p style={{ fontSize }}>Size of font in onClick fund: {fontSize}</p>
      <p> Value of 'name' in ClickIncrease: {props.name}</p>
      <button onClick={() => incrementCounter()}>Increment Counter</button>
      <p>Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
}

export default withCounter(ClickIncrease);