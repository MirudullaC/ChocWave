import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
