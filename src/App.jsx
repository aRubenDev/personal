// import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import Portfolio from "./pages/Portfolio";
import Projects from "./pages/projects";

import "./App.css";
import "@fontsource/poppins";
import ProjectsLayout from "./layouts/ProjectsLayout";

export default function App() {
  return (
    <>
      <Helmet>
        <title>aRubenDev | Portfolio</title>
        <meta name="description" content="A portfolio of A. Ruben Guerra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://arubendev.com" />
      </Helmet>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Portfolio />} />
    
    <Route path="/projects" element={<ProjectsLayout />}>
      <Route index element={<Projects />} />
      <Route path=":project" element={<Projects />} />
      <Route path=":project/:page" element={<Projects />} />
    </Route>

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</BrowserRouter>
    </>
  );
}
