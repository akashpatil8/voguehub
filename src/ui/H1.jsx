import { motion } from "framer-motion";

export default function H1({
  children,
  theme = "dark",
  className = "",
  varients,
  custom = null,
}) {
  return (
    <motion.h1
      variants={varients}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
      custom={custom}
      className={`text-lg font-bold tracking-wider lg:text-3xl ${theme === "light" ? "text-slate-50" : "text-slate-800"} ${className}`}
    >
      {children}
    </motion.h1>
  );
}
