import React from "react";

interface projOption {
  num: number;
  title: string;
}

export default function ProjectCard(props: {
  project: projOption;
  key: number;
}) {
  const { num, title } = props.project;

  return (
    <div>
      this is Card number #{num} for project {title}
    </div>
  );
}
