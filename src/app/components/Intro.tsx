import React from "react";

export default function Intro() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center h-[100%] w-[80%] gap-5">
        <span className="text-3xl">Welcome, my name is </span>
        <span className="text-8xl font-bold">Nam Nguyen</span>
        <div className="w-[60%] text-2xl">
          <p>
            and i&apos;m a Full Stack Engineer with a passion for building pixel
            perfect UI.
          </p>
          <br></br>
          <p>
            My curisosity in how things worked combined with my interest in
            photography and art developed my interest in web development.
          </p>
        </div>
      </div>
    </div>
  );
}
