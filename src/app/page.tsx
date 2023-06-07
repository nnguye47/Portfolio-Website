import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center w-screen h-screen gap-[50px]">
        <h1 className="text-5xl font-bold underline ">Welcome To My Website</h1>
        <a href="/home">Continue</a>
      </div>
    </main>
  );
}
