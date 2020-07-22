import React from "react";
import "./styles.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default function App() {
  return (
    <div className="App">
      <ClickCounter type="ClickCounter" />
      <HoverCounter />
    </div>
  );
}
