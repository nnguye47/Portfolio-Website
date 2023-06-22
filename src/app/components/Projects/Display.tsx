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
  return <div> My Display of {Title}</div>;
}