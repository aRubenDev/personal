import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import Portfolio from "./pages/Portfolio";

import "./App.css";
import "@fontsource/poppins";

export default function App() {
  return (
    <>
      <Helmet>
        <title>aRubenDev | Portfolio</title>
        <meta name="description" content="A portfolio of A. Ruben Guerra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://arubendev.com" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
