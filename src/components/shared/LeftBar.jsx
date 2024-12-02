import React, { useState } from "react";
import { Link } from "react-router-dom";

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";

//Li icons
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import LanguageIcon from "@mui/icons-material/Language";

const navBarList = [
  { name: "Recipes", icon: ImportContactsIcon, path: "/recipes" },
  { name: "Favorites", icon: FavoriteIcon, path: "/favorites" },
  { name: "Courses", icon: WorkIcon, path: "/courses" },
  { name: "Community", icon: LanguageIcon, path: "/community" },
];

const LeftBAr = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`h-full flex flex-col justify-around ${
        isNavOpen ? "w-[200px]" : "w-[60px]"
      } overflow-hidden absolute z-50 transition-all min-w-[60px] border border-r ease-linear duration-200 `}
    >
      {/* Logo section */}
      <div className="flex justify-between py-8 items-center px-2 w-full h-[120px] overflow-hidden">
        <img
          src="/assets/foodoo-logo.png"
          alt="connect logo"
          className={`h-10 -translate-x-2 w-auto m-auto ${
            !isNavOpen && "hidden"
          } `}
        />
        <MenuIcon
          onClick={() => setNavOpen(!isNavOpen)}
          className="text-gray-400 ml-3  duration-200 ease-in-out transition-all active:scale-[.95] cursor-pointer"
        />
      </div>

      {/* Profile Image Section */}

      <div className="flex flex-col my-3 gap-2 items-center">
        <div
          className={`${
            isNavOpen ? "p-2" : "p-1"
          } rounded-full outline outline-3 outline-gray-300`}
        >
          <div
            className={`flex justify-center items-center bg-rose-400 ${
              isNavOpen ? "w-14 h-14" : "w-8 h-8"
            } p-1 overflow-hidden rounded-full`}
          >
            <img src="/assets/profile.png" alt="profile pic" />
          </div>
        </div>
        <h3
          className={`font-bold font-playfair ${
            isNavOpen ? "text-[1.2rem]" : "text-[.7rem]"
          } text-center`}
        >
          Kristin watson
        </h3>
        <p
          className={`font-inter text-gray-500 ${
            isNavOpen ? "text-[.8rem]" : "text-[.4rem]"
          }`}
        >
          Chat de Prtie
        </p>
        <div className="flex items-center gap-1 px-2 rounded-full bg-white border py-[.2rem] shadow-box">
          <WorkIcon
            className="text-red-500"
            sx={{ fontSize: isNavOpen ? 15 : 12 }}
          />
          <p className={`${isNavOpen ? "text-[.8rem]" : "text-[.6rem]"}`}>27</p>
        </div>
      </div>

      {/* List section */}
      <div className="w-full h-[calc(100vh-120px)] flex flex-col justify-between">
        <ul
          className={` ${
            isNavOpen ? "pl-7" : "pl-2"
          } mt-3 flex flex-col gap-1 overflow-hidden`}
        >
          {navBarList.map((list, index) => (
            <li key={index}>
              <Link
                className="group p-4 flex items-center font-inter text-[.9rem] text-[#000000a2] hover:bg-[#e7e7e7] hover:text-black cursor-pointer rounded-tl-lg rounded-bl-lg transition-all duration-300 ease-out gap-4"
                to={list.path}
              >
                <list.icon
                  sx={{ fontSize: 19 }}
                  className="text-current group-hover:text-red-500"
                />
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[200px] py-9">
        {/* Bottom section */}

        {isNavOpen ? (
          <div
            className={`flex flex-col ${
              !isNavOpen && "hidden"
            } gap-4 justify-center items-center`}
          >
            {/* Bottom people section */}
            <div className="flex">
              <div className="flex items-center -space-x-2">
                <img
                  src="/assets/p1.png"
                  alt="Avatar 1"
                  className="w-7 h-7 rounded-full border-2 border-gray-200 bg-rose-100"
                />
                <img
                  src="/assets/p2.png"
                  alt="Avatar 2"
                  className="w-9 h-9 rounded-full border-2 border-gray-200 bg-green-100"
                />
                <div className="w-7 h-7 m-auto rounded-full border-2 border-gray-200 bg-red-500 flex items-center justify-center text-white font-medium">
                  +
                </div>
              </div>
            </div>

            <h5 className="font-sans text-[.8rem] whitespace-nowrap font-medium text-center ">
              Create a team and <br /> take part in{" "}
              <span className="p-1 border border-b-black">TV show!</span>
            </h5>
          </div>
        ) : (
          <div className="flex w-full h-auto">
            <InfoIcon className="text-gray-500 mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftBAr;
