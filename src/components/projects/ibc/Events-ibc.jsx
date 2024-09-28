import { motion } from "framer-motion";

export default function EventsIBC() {
  function picsEvents() {
    let maxEventsCount = 10;
    return Array(maxEventsCount)
      .fill()
      .map(() => {
        const randomId = Math.floor(Math.random() * 10000);
        return (
          <div
            key={Math.random()}
            className="size-max shadow-lg rounded-lg"
          >
            <div key={randomId} className="rounded-lg overflow-hidden w-32">
              <img
                src={`https://picsum.photos/200?random=${randomId}`}
                alt=""
              />
            </div>
          </div>
        );
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden w-full bg-white justify-center p-8 rounded-3xl"
    >
      <h1 className="text-3xl text-center text-[#D48806] mb-8 font-[900]">Events</h1>

      <div className="flex gap-6 overflow-auto no-scrollbar">{picsEvents()}</div>
    </motion.div>
  );
}
