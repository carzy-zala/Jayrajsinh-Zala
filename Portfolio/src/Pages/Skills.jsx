import React from "react";
import { FloatingCard } from "../Components";

function Skills() {
  const skillsImageAndName = [
    {
      name: "C++",
      image: "/Skills/C++.png",
    },
    {
      name: "C#",
      image: "/Skills/C_Sharp.png",
    },
    {
      name: "JavaScript",
      image: "/Skills/JS.png",
    },
    {
      name: "Python",
      image: "/Skills/Python.png",
    },
    {
      name: "MongoDb",
      image: "/Skills/Mongodb.jpg",
    },
    {
      name: "SQL",
      image: "/Skills/SQL.png",
    },

    {
      name: "Express JS",
      image: "/Skills/Express.jpg",
    },
    {
      name: "Node JS",
      image: "/Skills/Node.png",
    },
    {
      name: "React JS",
      image: "/Skills/React.png",
    },
    {
      name: "Selenium",
      image: "/Skills/Selenium.png",
    },

    {
      name: "Tailwind CSS",
      image: "/Skills/tailwind.png",
    },
    {
      name: "Bootstrap",
      image: "/Skills/Bootstrap.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-4 justify-center items-center pt-6 pb-6  gap-16 px-[10%] ">
      {skillsImageAndName.map((skills) => (
        <FloatingCard name={skills.name}>
          <img src={skills.image} />
        </FloatingCard>
      ))}
    </div>
  );
}

export default Skills;
