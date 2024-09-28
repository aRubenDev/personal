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
          {/* Ruta sin layout para la página principal de "Projects" */}
          <Route path="/projects" element={<Projects />} />

          {/* Ruta con layout solo cuando hay parámetros */}
          <Route path="/projects/:project" element={<ProjectsLayout />}>
            <Route path="" element={<Projects />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
