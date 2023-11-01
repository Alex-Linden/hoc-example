import React from 'react';
import TodoList from './TodoList';
import ClickIncrease from "./components/ClickIncrease";
import HoverIncrease from "./components/HoverIncrease";

function App() {
  return (
    <div>
      <TodoList />
      <ClickIncrease />
      <HoverIncrease />
    </div>
  );
}

export default App;
