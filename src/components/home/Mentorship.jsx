import React from "react";

const Mentorship = () => {
  return (
    <div className="relative mt-10 flex flex-col justify-around flex-1 min-w-72 h-[380px] shadow-box p-4 bg-[#7dbfa3] rounded-xl">
      <h4 className="bg-black w-16 rounded-lg shadow-box text-white flex justify-center items-center h-8">PRO</h4>
      <div>
        <h2 className="font-bold font-playfair text-[2rem] text-white">
          Mentorship Program
        </h2>
        <p className="font-poiretOne mt-4 font-semibold text-white">
          A mentor will track your <br /> progress and give <br /> you tips for
          faster culinary growth
        </p>
      </div>
    </div>
  );
};

export default Mentorship;
