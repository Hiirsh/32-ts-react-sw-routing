import React from "react";
import Home from "./Main/Home";
import AboutMe from "./Main/AboutMe";
import StarWars from "./Main/StarWars";
import Contact from "./Main/Contact";
import { navItems } from "../utils/constants";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Main/ErrorPage";

const Main = () => {
  return (
    <Routes>
      {["/", navItems[0].route].map((p) => (
        <Route key={p} path={p} element={<Home />} />
      ))}
      {[navItems[1].route, `${navItems[1].route}/:heroId`].map((p) => (
        <Route key={p} path={p} element={<AboutMe />} />
      ))}
      <Route path={navItems[2].route} element={<StarWars />} />
      <Route path={navItems[3].route} element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Main;
