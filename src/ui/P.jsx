import { motion } from "framer-motion";

export default function P({
  children,
  size = "md",
  className = "",
  fontColor = "dark",
  varients,
  custom = null,
}) {
  return (
    <motion.p
      variants={varients}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
      custom={custom}
      className={`font-light ${size === "sm" ? "text-sm font-normal" : ""} tracking-wide ${fontColor === "light" ? "text-slate-200" : "text-stone-400"} ${className}`}
    >
      {children}
    </motion.p>
  );
}
