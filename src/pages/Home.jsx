import React from "react";
import LeftBar from "../components/shared/LeftBar";
import Header from "../components/shared/Header";

const Home = () => {
  
  return (
    <div className="flex w-full h-screen">
      <LeftBar />
      <div className="bg-[#fcf4f1] h-full flex-1">
        <Header />
      </div>
    </div>
  );
};

export default Home;
