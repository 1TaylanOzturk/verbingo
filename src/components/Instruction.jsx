import React from "react";
import { motion } from "framer-motion";

function Instruction({ children }) {
  return (
    <motion.div
      className="bg-[#00d2ff] from-[#00d2ff] to-[#3a7bd5] text-rose-500 py-2 px-5 mb-2 min-w-[250px] rounded font-josefin text-center"
      animate={{
        y: [-400, 0, -20, 5, 0],
        type: "spring",
        transition: { delay: 0.5 },
      }}
      transition={{ duration: 2 }}
    >
      <span>{children}</span>
    </motion.div>
  );
}

export default Instruction;
