import React from "react";

export default function About() {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-3xl font-bold text-blue-600">
        This is the About page
      </h1>
      <p className="break-normal text-2xl text-yellow-600 w-[75%]">
        this is a test paragraph. this is a test paragraph. this is a test
        paragraph. this is a test paragraph. this is a test paragraph. this is a
        test paragraph.
      </p>
      <div>
        <ul className="flex flex-row gap-[50px]">
          <li>
            <a href="https://www.linkedin.com/in/nam-n-swe/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/nnguye47">Github</a>
          </li>
          <li>
            <a href="#">Link 31</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
