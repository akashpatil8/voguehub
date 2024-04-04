import { motion } from "framer-motion";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

import CarousalCard from "./CarousalCard";

import { carousalData as data } from "../../public/data/carousalData";

export default function Carousal() {
  const variants = {
    initial: { translateY: 50, opacity: 0 },
    final: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function nextSlide() {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <main>
      <div className="h-[calc(100vh-5rem)] overflow-hidden ">
        {data.map((item) => (
          <CarousalCard
            key={item.id}
            item={item}
            currentIndex={currentIndex}
            variants={variants}
          />
        ))}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-1 sm:bottom-6 sm:gap-2 md:bottom-8 md:gap-4 lg:bottom-10">
        {data.map((_, i) => (
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="final"
            key={i}
            className={`rounded-full ${currentIndex === i ? "h-3 w-3 bg-slate-200" : "h-2.5 w-2.5 bg-slate-400"}`}
          ></motion.div>
        ))}
      </div>

      <motion.button
        variants={variants}
        initial="initial"
        whileInView="final"
        onClick={prevSlide}
        className="absolute bottom-0 top-0 my-auto ml-8 grid h-[4.5rem] w-[4.5rem]
           place-items-center rounded-full bg-slate-300 opacity-70 duration-300 hover:bg-slate-50"
      >
        <GrPrevious size={34} />
      </motion.button>
      <motion.button
        variants={variants}
        initial="initial"
        whileInView="final"
        onClick={nextSlide}
        className="absolute bottom-0 right-0 top-0 my-auto mr-8 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-slate-300 opacity-70 hover:bg-slate-50"
      >
        <GrNext size={34} />
      </motion.button>
    </main>
  );
}
