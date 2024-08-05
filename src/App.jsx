import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { TbArrowBadgeUpFilled } from "react-icons/tb";

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
        <link rel="canonical" href="https://arubendev.com" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      <motion.div
        className="fixed bottom-5 right-5"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        /* al hacer un hover que sea mas oscuro */
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <TbArrowBadgeUpFilled className="text-5xl text-[#8DA2B5]" />
      </motion.div>
    </>
  );
}
