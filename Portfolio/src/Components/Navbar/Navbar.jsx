import React from "react";
import { NavLink, useLocation } from "react-router";
import Button from "../Button/Button";

function Navbar() {
  const location = useLocation();

  const handleDownloadResume = () => {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Jayrajsinh_Zala_Resume.pdf"; // Name of the file to save
    link.click();
  };

  return (
    <nav className="z-50 grid lg:grid-cols-[1.5fr_2.5fr_1fr] lg:px-[10%] py-3 sticky top-0 bg-[#F8F7F1] place-items-center gap-2 p-2 text-sm mobile:text-md">
      <NavLink to="/" className="text-3xl font-montserrat font-semibold">
        <span className="text-green-btn">J</span>Zala.
      </NavLink>
      <div className="  grid grid-cols-[1.3fr_1.2fr_1.5fr_1.5fr]  gap-1 w-full place-items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-green-btn font-medium" : "text-black"} lg:text-lg `
          }
        >
          {location.pathname === "/" ? `{ Home }` : `  Home  `}
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `${isActive ? "text-green-btn font-medium" : "text-black"} lg:text-lg`
          }
        >
          {location.pathname === "/skills" ? `{ Skills }` : `  Skills  `}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "text-green-btn font-medium" : "text-black"} lg:text-lg`
          }
        >
          {location.pathname === "/projects" ? `{ Projects }` : `  Projects  `}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-green-btn font-medium" : "text-black"} lg:text-lg`
          }
        >
          {location.pathname === "/contact" ? `{ Contact }` : " Contact "}
        </NavLink>
      </div>
      <div className="justify-self-center lg:justify-self-end">
        <Button
          children="Download cv"
          className="px-3 outline-none tracking-wider align-middle rounded-md py-2 text-white m-2 bg-green-btn"
          onClick={handleDownloadResume}
        />
      </div>
    </nav>
  );
}

export default Navbar;
