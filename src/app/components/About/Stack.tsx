import React from "react";

export default function Stack() {
  return (
    <div className="w-[30%] h-[80%] bg-[#34bac2] text-[#031632] flex flex-col gap-4">
      <span className="text-5xl">My Stack</span>
      <div>
        <span className="text-3xl">Front End</span>
        <ul>
          <li>JavaScript</li>
          <li>React, React Native</li>
        </ul>
      </div>
      <div>
        <span className="text-3xl">Back End</span>
        <ul>
          <li>Node.js, Express</li>
          <li>MySQL, PostgreSQL</li>
          <li>MongoDB, Google Firebase</li>
        </ul>
      </div>
      <div>
        <span className="text-3xl">Other Technologies</span>
        <ul>
          <li>TailwindCSS, Styled Components, MaterialUI</li>
          <li>Figma</li>
          <li>Jest, Mocha, React Testing Library</li>
        </ul>
      </div>
    </div>
  );
}
