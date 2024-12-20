import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="grid place-items-center p-3 bg-green-btn w-full text-white">
      <div className="grid grid-cols-3 gap-5 items-center bg-white p-2 rounded-md">
        {/* <Link >
            <img src="/social/fb.png"/>
          </Link> */}
        <Link to="https://www.instagram.com/the_jayubha_zala/" target="_blank">
          <img src="/social/insta.png" />
        </Link>
        <Link to="https://www.linkedin.com/in/jayrajsinhzala/" target="_blank">
          <img src="/social/linkedin.png" />
        </Link>
        <Link to="https://github.com/carzy-zala" target="_blank">
          <img src="/social/github.png" />
        </Link>
        {/* <Link >
            <img src="/social/twitter.png"/>
          </Link> */}
      </div>

      <div className="pt-4">Copyright 2024 © Jayrajsinh Zala</div>
    </div>
  );
}

export default Footer;
