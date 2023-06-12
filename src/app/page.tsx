import Image from "next/image";
import React from "react";
import Intro from "./components/Intro";
import About from "./components/About/About";

export default function Home() {
  return (
    <main className="relative">
      <Intro />
      <About />
    </main>
  );
}
