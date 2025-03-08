import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0, 1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center -z-50"
    >
      <div className="absolute border border-red-200 dark:border-slate-700 rounded-full h-[100px] w-[100px] md:h-[200px] md:w-[200px]  mt-52  animate-ping " />
      <div className="absolute border border-red-200 dark:border-slate-700 rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] mt-52 animate-ping " />
      <div className="absolute border border-red-200 dark:border-slate-700 rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px] mt-52 animate-ping " />
      <div className="absolute border border-orange-200 dark:border-slate-600 rounded-full h-[325px] w-[325px] md:h-[650px] md:w-[650px] mt-52 animate-pulse " />
      <div className="absolute border border-red-200 dark:border-slate-700 rounded-full h-[400px] w-[400px] md:h-[800px] md:w-[800px] mt-52 " />
    </motion.div>
  );
}

export default BackgroundCircles;
