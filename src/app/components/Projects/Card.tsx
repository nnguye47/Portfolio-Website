import React from "react";
import Image from "next/image";

type projectProps = {
  title: string;
  description: string;
  image: string;
  role: string;
};

export default function Card({
  title,
  description,
  image,
  role,
}: projectProps) {
  return (
    <div>
      <Image src="" alt="exImg" />
      <p>Project Name</p>
      <p>Role</p>
      <p>Description</p>
    </div>
  );
}
