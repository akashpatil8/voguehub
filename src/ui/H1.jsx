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
      className={`text-3xl font-bold tracking-wider ${theme === "light" ? "text-slate-50" : "text-slate-800"} ${className}`}
    >
      {children}
    </motion.h1>
  );
}
