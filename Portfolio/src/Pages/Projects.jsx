import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components";
import projects from "../assets/ProjectArray";

function Projects() {
  const [category, setCategory] = useState("all");

  return (
    <div className="px-[10%] py-2 pb-12 grid grid-rows-[0fr_1fr] gap-3 ">
      <div className="grid grid-cols-1 gap-2 w-[200px] md:w-[300px] md:grid-cols-3 p-2 bg-green-btn text-white rounded justify-self-center ">
        <Button
          className={`${
            category === "all"
              ? "bg-white text-green-btn rounded-sm px-3"
              : "text-white"
          }`}
          onClick={() => {
            setCategory("all");
          }}
          children="All"
        />
        <Button
          className={`${
            category === "MERN"
              ? "bg-white text-green-btn rounded-sm px-3"
              : "text-white"
          }`}
          onClick={() => {
            setCategory("MERN");
          }}
          children="MERN"
        />
        <Button
          className={`${
            category === "React"
              ? "bg-white text-green-btn rounded-sm px-3"
              : "text-white"
          }`}
          onClick={() => {
            setCategory("React");
          }}
          children="React"
        />
        {/* <Button
          className={`${
            category === "selenium"
              ? "bg-white text-green-btn rounded-sm px-3"
              : "text-white"
          }`}
          onClick={() => {
            setCategory("selenium");
          }}
          children="Selenium"
        /> */}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 place-items-center ">
        {projects.map(
          (project) =>
            (category === "all" || category === project.category) && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative shadow-lg border rounded-lg border-1 h-[490px] w-[300px] bg-green-btn grid grid-rows-[1.3fr_1fr] pt-6 px-3 group">
                  <div className="justify-self-center h-[250px] w-[250px]">
                    <img src={project.img_src} className="rounded-lg" />
                  </div>

                  <div className="grid grid-rows-[0fr_0fr_0fr] gap-2 text-white p-3">
                    <div className="grid grid-cols-[1.2fr_1fr]">
                      <span className="font-bold tracking-wider">
                        Project Name:{" "}
                      </span>
                      <p>{project.project_name}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_3fr]">
                      <span className="font-bold tracking-wider">Skills: </span>
                      <p>{project.skills}</p>
                    </div>
                    <div className="text-justify">{project.description}</div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <span className="text-green-btn font-bold text-lg flex items-center gap-2">
                      Explore <span className="text-2xl">&rarr;</span>
                    </span>
                  </div>
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
}

export default Projects;
