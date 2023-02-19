import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./button";
import SectionOne from "./sectionone";

export function App() {
  return (
    <SectionOne>
      <Button>Click Me</Button>
      <Button>Click You</Button>
      <Button>Click Us</Button>
    </SectionOne>
  );
}
