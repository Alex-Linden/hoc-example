import React, { useState } from "react";
import withCounter from "./withCounter";

function ClickIncrease() {
  const [fontSize, setFontSize] = useState(10);

  return (
    <div>

      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with Click
      </button>
      <p style={{ fontSize }}>Size of font in onClick fund: {fontSize}</p>
    </div>
  );
}

export default withCounter(ClickIncrease);