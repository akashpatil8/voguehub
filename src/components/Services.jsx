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
    <main className="mt-8 px-[5%] text-center lg:mt-24 lg:px-[8%] lg:text-left">
      <div className="items-center justify-between lg:mb-20 lg:flex">
        <div className=" lg:w-[35%]">
          <H1 varients={varients}>We provide best customer experience.</H1>
        </div>
        <div className="mb-5 items-center gap-10 lg:flex">
          <motion.div
            variants={varients}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
            custom={0.4}
            className="mx-auto my-2 h-[1px] w-20 bg-slate-800 lg:my-0 lg:h-16 lg:w-[2px] "
          ></motion.div>
          <P varients={varients} custom={0.7}>
            We ensure our customers have best shopping experience.
          </P>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4  lg:flex lg:justify-between">
        {data.map((item, i) => (
          <ServiceCard key={item.title} item={item} varients={varients} i={i} />
        ))}
      </div>
      <Divider />
    </main>
  );
}
