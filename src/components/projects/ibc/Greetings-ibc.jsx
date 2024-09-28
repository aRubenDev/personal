import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function GreetingsIBC({ data }) {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(date.getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setHour(date.getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, [date, hour]);

  let greetings = "";

  if (hour < 12) {
    greetings = "Good Morning";
  } else if (hour < 18) {
    greetings = "Good Afternoon";
  } else {
    greetings = "Good Evening";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden w-full bg-white justify-center p-8 rounded-3xl"
    >
      <h1 className="text-3xl font-extrabold">
        {greetings}, {data.name}!
      </h1>
      <div className="flex mt-4 gap-8">
        {/* fecha en formato mes dia, año. ej: September 23, 2022 */}
        <p className="text-xs">
          {date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        {/* hora en formato 12 con hora y minutos con el am/pm y el gmt */}
        <p className="text-xs">
          {date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
          &nbsp;(GMT+2)
        </p>
      </div>
      <motion.span
      initial={{ opacity: 0, x: 500, y: 40, }}
      animate={{ opacity: 1, x: 40, y: 40 }}
      transition={{ duration: .8, ease: "easeInOut" }}
      className="absolute bottom-1/2 right-0 flex items-center bg-orange-400 rounded-full size-20 shadow-lg"></motion.span>
    </motion.div>
  );
}

GreetingsIBC.propTypes = {
  data: PropTypes.object
};
