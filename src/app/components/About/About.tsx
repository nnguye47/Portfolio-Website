import React from "react";
import Hobbies from "./Hobbies";
import Stack from "./Stack";
import Values from "./Values";

export default function About() {
  return (
    <div id="About" className="h-screen w-screen flex flex-row justify-evenly">
      <Stack />
      <Values />
      <Hobbies />
    </div>
  );
}
