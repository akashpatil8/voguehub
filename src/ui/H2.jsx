import { motion } from "framer-motion";

export default function H2({
  children,
  className = "",
  varients,
  custom = null,
}) {
  return (
    <motion.h4
      variants={varients}
      initial="initial"
      whileInView="final"
      custom={custom}
      className={`text-xl font-semibold tracking-wider text-slate-700 ${className}`}
    >
      {children}
    </motion.h4>
  );
}
