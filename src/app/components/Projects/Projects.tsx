"use client";
import React, { useEffect, useState } from "react";
import handler from "../../api";

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    handler().then((data) => {
      console.log("my data", data);
    });

    // setProjectsList(list);
  }, []);

  return <div>hello projects</div>;
}
