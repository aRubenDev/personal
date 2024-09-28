import { motion } from "framer-motion";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import HeroPortfolio from "../components/portfolio/HeroPortfolio";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";
import SeparatorSections from "../components/widgets/SeparatorSections";

export default function Portfolio() {
  return (
    <>
      <section className="flex flex-col items-center min-h-screen p-1 cursor-default bg-[#F5F5F5]">
        <HeroPortfolio />
        <SeparatorSections />
        <Skills />
        <SeparatorSections />
        <Contact />
      </section>
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
