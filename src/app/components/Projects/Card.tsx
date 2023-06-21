import React from "react";
import Image from "next/image";

type projectProps = {
  Title: string;
  Description: string;
  Role: string;
  ImageURL: string;
  Stack: string;
};

export default function Card({
  Title,
  Description,
  ImageURL,
  Role,
  Stack,
}: projectProps) {
  return (
    <div>
      <p>{Title}</p>
      <p>{Role}</p>
      <p>{Description}</p>
      <p>{Stack}</p>
    </div>
  );
}
