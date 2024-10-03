import { motion } from "framer-motion";
import { TbBrandFigma } from "react-icons/tb";
import CarenetIBC from "../../../components/projects/ibc/Carenet-ibc";
import GreetingsIBC from "../../../components/projects/ibc/Greetings-ibc";
import EventsIBC from "../../../components/projects/ibc/Events-ibc";
import UpdatesIBC from "../../../components/projects/ibc/Updates-ibc";
import data from "../../../data/projects/ibc.json";

export default function HomeIBC() {
  return (
    <>
      <section className="relative flex lg:flex-row flex-col w-full bg-[#E0F0FF] rounded-3xl p-8 gap-8 overflow-hidden">
        <div className="lg:w-2/3 space-y-8 overflow-y-auto no-scrollbar h-full w-full">
          {" "}
          {/* Agregar overflow-y-auto */}
          <GreetingsIBC data={data.greetings} />
          <EventsIBC />
          <UpdatesIBC data={data.updates} />
          <div className="lg:hidden block">
            <CarenetIBC data={data.carenet} />
          </div>
        </div>
        <div className="lg:w-1/3 lg:block hidden">
            <CarenetIBC data={data.carenet} />
        </div>
      </section>
      <motion.div
        whileHover={{ paddingBottom: "10px" }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed transform -translate-x-1/2 left-1/2 bottom-0 px-4 py-1 rounded-tl-3xl rounded-tr-3xl bg-gray-200 shadow-lg"
      >
        <a
          href="https://github.com/arubendev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <TbBrandFigma className="text-2xl text-[#B2DAB2]" />
          <span className="text-[#B2DAB2]">Lily</span>
        </a>
      </motion.div>
    </>
  );
}
