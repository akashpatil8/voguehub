import { motion } from "framer-motion";

import Divider from "../ui/Divider";
import ServiceCard from "../ui/ServiceCard";
import H1 from "../ui/H1";
import P from "../ui/P";

import { servicesData as data } from "../../public/data/servicesData";

const varients = {
  initial: { translateY: 50, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: time },
  }),
};

export default function Services() {
  return (
    <main className="mt-24 px-[8%]">
      <div className="mb-20 flex items-center justify-between">
        <H1 varients={varients}>
          We provide best <br />
          customer experience.
        </H1>
        <div className="flex items-center gap-10">
          <motion.div
            variants={varients}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
            custom={0.4}
            className="h-16 w-[2px] bg-slate-800 "
          ></motion.div>
          <P varients={varients} custom={0.7}>
            We ensure our customers have best shopping experience.
          </P>
        </div>
      </div>
      <div className="flex justify-between">
        {data.map((item, i) => (
          <ServiceCard key={item.title} item={item} varients={varients} i={i} />
        ))}
      </div>
      <Divider />
    </main>
  );
}
