import React from "react";

type projectProps = {
  Title: string;
  Description: string;
  Role: string;
  ImageURL: string;
  Stack: string;
};

export default function Display({
  Title,
  Description,
  ImageURL,
  Role,
  Stack,
}: projectProps) {
  return (
    <div className="w-[40%] h-[90%] flex flex-col justify-start flex-none rounded-lg shadow-inner shadow-cyan-500/50">
      <span className="h-[40%]">image goes here</span>
      <div className="flex flex-col justify-start w-[90%] mx-auto">
        <div className="flex flex-col justify-evenly">
          <h1 className="text-3xl font-bold">My Display of {Title}</h1>
          <h2>{Role}</h2>
          <p>Made with {Stack} </p>
        </div>
        <span className="mt-[30px]">
          {Description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </div>
    </div>
  );
}
