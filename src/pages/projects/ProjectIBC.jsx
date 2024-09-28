import { motion } from "framer-motion";
import { TbBrandFigma } from "react-icons/tb";
import SidenavIBC from "../../components/projects/ibc/Sidenav-ibc";
import CarenetIBC from "../../components/projects/ibc/Carenet-ibc";
import GreetingsIBC from "../../components/projects/ibc/Greetings-ibc";
import EventsIBC from "../../components/projects/ibc/Events-ibc";
import UpdatesIBC from "../../components/projects/ibc/Updates-ibc";
import data from "../../data/projects/ibc.json";

export default function ProjectIBC() {
  return (
    <main className="flex relative h-screen bg-blue-700 p-4">
      <div className="w-1/5">
        <SidenavIBC />
      </div>
      <section className="relative flex w-full bg-[#E0F0FF] rounded-3xl p-8 gap-8 flex-1 overflow-hidden">
        <div className="w-2/3 space-y-8 overflow-y-auto no-scrollbar">
          {" "}
          {/* Agregar overflow-y-auto */}
          <GreetingsIBC data={data.greetings} />
          <EventsIBC />
          <UpdatesIBC data={data.updates} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: "sticky", top: 0 }}
          className="w-1/3"
        >
          <CarenetIBC data={data.carenet} />
        </motion.div>
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
    </main>
  );
}
