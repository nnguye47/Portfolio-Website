"use client";
import { StringLike } from "@firebase/util";
import { title } from "process";
import React, { useEffect, useState } from "react";
import handler from "../../api";
import ProjectList from "./ProjectList";
import Display from "./Display";

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
  const [displayedProject, setDisplayedProject] = useState<projectProps>({});

  useEffect(() => {
    handler().then((data: object[]) => {
      setProjectsList(data);
      setDisplayedProject(data[0]);
    });
  }, []);

  const changeCard = (e: any) => {
    e.preventDefault();
    let newTitle = e.target.value;

    let toDisplay = projectsList.filter(
      (project) => project.Title === newTitle
    );

    setDisplayedProject(toDisplay[0]);
  };

  return (
    <div>
      <p className="text-8xl font-bold mb-[25px]">Projects</p>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-center items-center w-[35%]">
          {projectsList.map((project, index) => (
            <ProjectList
              Title={project.Title}
              ImageURL={project.ImageURL}
              Role={project.Role}
              Description={project.Description}
              Stack={project.Stack}
              key={index + 1}
              changeCard={changeCard}
              onClick={function (
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </div>
        <Display
          Title={displayedProject.Title}
          ImageURL={displayedProject.ImageURL}
          Role={displayedProject.Role}
          Description={displayedProject.Description}
          Stack={displayedProject.Stack}
        />
      </div>
    </div>
  );
}
