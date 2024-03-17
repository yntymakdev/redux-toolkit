import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import Header from "../components/Header/Header";
import Home from "../components/Header/Home";
import Card from "../components/Header/Card";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/menu",
      element: <Card />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
