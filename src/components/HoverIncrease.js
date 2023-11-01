import React, { useState } from "react";
import withCounter from "./withCounter";

function HoverIncrease() {
  const [fontSize, setFontSize] = useState(10);

  return (
    <div>

      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on Hover
      </button>
      <p style={{ fontSize }}>Size of font in onMouseOver func: {fontSize}</p>
    </div>
  );
}

export default withCounter(HoverIncrease);