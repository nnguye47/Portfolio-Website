"use client";
import { title } from "process";
import React, { useEffect, useState } from "react";
import handler from "../../api";
import Card from "./Card";

type projectProps = {
  title: string;
  description: string;
  image: string;
  role: string;
};

var example = [{ title: "1", description: "2", image: "3", role: "4" }];
export default function Projects() {
  const [projectsList, setProjectsList] = useState<object[] | null>(example);

  // useEffect(() => {
  //   handler().then((data) => {
  //     console.log("my data", data);
  //   });

  //   // setProjectsList(list);
  // }, []);

  return (
    <div>
      {projectsList.map((project, index) => (
        <Card
          title={project.title}
          image={project.image}
          role={project.role}
          description={project.description}
          key={index + 1}
        />
      ))}
    </div>
  );
}
