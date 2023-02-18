import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./button";
import Div from "./div";

export function App() {
  return (
    <Div>
      <Button>Click Me</Button>
      <Button>Click You</Button>
      <Button>Click Us</Button>
    </Div>
  );
}
