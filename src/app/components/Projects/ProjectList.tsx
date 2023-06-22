import React from "react";
import Image from "next/image";
import Display from "./Display";

type displayProps = {
  Title: string;
  Description: string;
  Role: string;
  ImageURL: string;
  Stack: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  changeCard: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ProjectList({
  Title,
  Description,
  ImageURL,
  Role,
  Stack,
  onClick,
  changeCard,
}: displayProps) {
  return (
    <div>
      <button role="button" value={Title} onClick={changeCard}>
        <span className="text-3xl">{Title}</span>
      </button>
    </div>
  );
}
