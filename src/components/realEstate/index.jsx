import React from "react";
import RealEstateCard from "./RealEstateCard";
import RealEstateNavBar from "./RealEstateNavBar";

export default function RealEstate() {
  return (
    <div className="p-2 pt-0 bg-[#f5f5f7] h-screen overflow-scroll">
      <RealEstateNavBar />
      <div className="p-0 md:px-10 py-5">
        <RealEstateCard />
      </div>
    </div>
  );
}
