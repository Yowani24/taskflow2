import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import pagenotFoundImage from "../assets/pagenotfound.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const divStyle = {
  backgroundImage: `url(${pagenotFoundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function PageNotFound() {
  return (
    <div
      className="flex items-start justify-center h-screen w-full relative"
      style={divStyle}
    >
      <Link to="/home" className="absolute top-20">
        <Button className="bg-white text-black font-semibold">
          Go to Home
        </Button>
      </Link>
    </div>
  );
}

//
