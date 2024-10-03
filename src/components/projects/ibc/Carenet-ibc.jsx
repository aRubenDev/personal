import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function CarenetIBC({ data }) {
  return (
    <div className="p-4 bg-white h-max w-full rounded-3xl text-center">
      <h1 className="text-2xl font-extrabold mb-5">ibc {data.title}</h1>
      {data.elements.map((element, index) => (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="w-full bg-green-800 shadow-lg my-3 rounded-lg text-white p-4 text-left text-xs" key={index}>
            <h1 className="font-extrabold mb-2">{element.day}</h1>
            {element.sites.map((site, index) => (
                <p key={index}>{site}</p>
            ))}
        </motion.div>
      ))}
    </div>
  );
}

CarenetIBC.propTypes = {
  data: PropTypes.object
};
