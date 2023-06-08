import React from "react";
import ProjectCard from "./ProjectCard";
const example = [
  { title: "project1", num: 1 },
  { title: "project2", num: 2 },
  { title: "project3", num: 3 },
];

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-red-600">This is the home page</h1>
      <div>
        {example.map((project, index) => (
          <ProjectCard project={project} key={index + 1} />
        ))}
      </div>
    </main>
  );
}
