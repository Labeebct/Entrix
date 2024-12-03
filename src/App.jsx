import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

//Importing all pages
import Community from "./pages/Community";
import Courses from "./pages/Courses";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
};

export default App;
