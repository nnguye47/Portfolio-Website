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
    <div className="w-[40%] h-[90%] flex-none rounded-lg shadow-inner shadow-cyan-500/50">
      <h1>My Display of {Title}</h1>
      <h2>{Role}</h2>
      <h3>{Description}</h3>
      <p>Made with {Stack} </p>
    </div>
  );
}
