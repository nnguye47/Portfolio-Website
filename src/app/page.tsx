import Image from "next/image";
import React from "react";
import Intro from "./components/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main className="relative w-[80%] mx-auto">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
