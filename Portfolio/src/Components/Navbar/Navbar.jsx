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
    <nav className="grid grid-cols-6 px-16 py-3 items-center justify-center ">
      <NavLink to="/" className="col-span-2 text-2xl">
        <span className="text-2xl font-semibold text-green-btn">J</span>Zala.
      </NavLink>
      <div className=" col-start-3 col-span-3 grid grid-cols-4 items-center justify-items-center">
        <NavLink to="/" className={" text-xl"}>
          {location.pathname === "/" ? `{ Home }` : `  Home  `}
        </NavLink>
        <NavLink to="/services" className={" text-xl"}>
          {location.pathname === "/services" ? `{ Services }` : `  Services  `}
        </NavLink>
        <NavLink to="/projects" className={" text-xl"}>
          {location.pathname === "/projects" ? `{ Projects }` : `  Projects  `}
        </NavLink>
        <NavLink to="/contact" className={" text-xl"}>
          {location.pathname === "/contact" ? `{ Contact }` : " Contact "}
        </NavLink>
      </div>
      <div>
        <Button
          children="Download cv"
          className="px-6 text-xl tracking-wider align-middle rounded-md py-2 text-white m-2 bg-green-btn"
          onClick={handleDownloadResume}
        />
      </div>
    </nav>
  );
}

export default Navbar;
