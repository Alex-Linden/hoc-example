import React, { useState } from "react";
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    //render OriginalComponent and pass on its props.
    const [counter, setCounter] = useState(10);
    return <OriginalComponent
      name="LR"
      counter={counter}
      incrementCounter={() => setCounter((counter) => counter + 1)}
    />;
  }
  return NewComponent;
};
export default UpdatedComponent;