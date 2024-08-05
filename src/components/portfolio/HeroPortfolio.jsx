import image from "../../images/hero-portfolio-profile.jpeg";
import { TbCode, TbQuote } from "react-icons/tb";
import { useState } from "react";
import { motion, transform } from "framer-motion";
export default function HeroPortfolio() {
  return (
    <>
      <section className="flex flex-col w-full h-screen p-4 items-center justify-center">
        <div className="relative">
          <img
            src={image}
            alt="hero-portfolio-profile"
            className="mt-5 size-52 rounded-full border-4 border-[#B2DAB2]"
          />
          <span className="absolute bottom-0 flex items-center bg-white px-3 py-1 -translate-x-1/2 rounded-full mx-[50%] min-w-max shadow-lg">
            <TbCode className="text-3xl text-[#B2DAB2] -ml-1" />
            <p className="text-lg ml-1">Web Developer</p>
          </span>
        </div>
        <h1 className="relative flex text-5xl font-bold my-5 mb-16">
          A. Rubén García Guerra
          <span className="absolute -bottom-5 p-1 w-20 h-1 bg-[#B2DAB2] rounded-full"></span>
        </h1>

        <figure class="max-w-screen-md mx-auto text-center">
          <TbQuote className="size-16 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
          <blockquote>
            <p class="text-2xl italic font-medium">
              "La calidad de un software depende más de la habilidad del
              programador que de las herramientas utilizadas."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite class="pe-3 font-medium">Linus Torvalds</cite>
              <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Creador de Linux y Git
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
