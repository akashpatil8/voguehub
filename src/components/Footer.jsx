import { motion } from "framer-motion";
import visa from "../../public/assets/visa.png";
import mastercard from "../../public/assets/mastercard.png";
import gpay from "../../public/assets/gpay.png";

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
      className="flex h-20 items-center justify-between bg-slate-200 px-[8%] text-slate-800"
    >
      {/* <h2 className="w-[33%] text-start text-xl font-bold tracking-wider sm:text-2xl md:text-2xl">
        VogueHub
      </h2> */}

      <p className="mx-auto text-sm tracking-wide text-stone-500">
        Copyright©2024 VogueHub. All rights reserved.
      </p>

      {/* <div className="flex w-[33%] items-end justify-end gap-4">
        <img src={visa} alt="visa-icon" className="h-10 object-cover" />
        <img src={mastercard} alt="visa-icon" className="h-10 object-cover" />
        <img src={gpay} alt="visa-icon" className="h-10 object-cover" />
      </div> */}
    </motion.footer>
  );
}
