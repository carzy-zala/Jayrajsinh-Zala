import React from "react";

const FloatingCard = ({ name, children }) => {
  return (
    <div className=" group md:w-48 md:h-48  bg-white rounded-lg shadow-lg flex items-center justify-center text-center animate-floating overflow-hidden h-25 w-25 p-4 md:p-6 lg:p-10 ">
      {/* Children content */}
      {children}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default FloatingCard;
