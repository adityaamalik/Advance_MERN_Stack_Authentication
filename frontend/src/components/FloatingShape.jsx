import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute ${size} ${color} rounded-full animate-float opacity-20 blur-xl`}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: ["0deg", "360deg"],
      }}
      style={{ top, left }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay: delay,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;