import { motion } from "framer-motion";

const varients = {
  initial: { translateY: -20, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: time },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      variants={varients}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
      className="flex h-16 items-center justify-between bg-slate-200 px-[8%] text-slate-800"
    >
      <p className="mx-auto text-sm tracking-wide text-stone-500">
        Copyright©2024 VogueHub. All rights reserved.
      </p>
    </motion.footer>
  );
}
