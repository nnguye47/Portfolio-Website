"use client";
import { StringLike } from "@firebase/util";
import { title } from "process";
import React, { useEffect, useState } from "react";
import handler from "../../api";
import Card from "./Card";

interface projectProps {
  Title: string;
  Description: string;
  ImageURL: string;
  Role: string;
  Stack: string;
}

var example = [{ title: "1", description: "2", image: "3", role: "4" }];
export default function Projects() {
  const [projectsList, setProjectsList] = useState<Array<projectProps>>([]);

  useEffect(() => {
    handler().then((data: object[]) => {
      console.log("my data", data);
      setProjectsList(data);
    });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projectsList.map((project, index) => (
        <Card
          Title={project.Title}
          ImageURL={project.ImageURL}
          Role={project.Role}
          Description={project.Description}
          Stack={project.Stack}
          key={index + 1}
        />
      ))}
    </div>
  );
}
