import { motion } from "framer-motion";

import H2 from "./H2";
import P from "./P";

export default function ServiceCard({ item, varients, i }) {
  return (
    <motion.div
      variants={varients}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
      custom={i * 0.2}
      className="w-[22%]"
    >
      <div className="mb-4 grid h-14 w-14 place-content-center rounded-md bg-slate-100 transition-transform duration-150 hover:scale-125 ">
        <img src={item.icon} className="h-7" alt="product-img" />
      </div>
      <H2 className="mb-1">{item.title}</H2>
      <P>{item.subtitle}</P>
    </motion.div>
  );
}
