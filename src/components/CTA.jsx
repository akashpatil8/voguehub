import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";

import Button from "../ui/Button";

import { useGetUser } from "../hooks/useGetUser";
import H1 from "../ui/H1";
import P from "../ui/P";

const varients = {
  initial: { translateY: 80, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: time },
  }),
};

export default function CTA() {
  const navigate = useNavigate();

  const { isAuthenticated, popup } = useGetUser();

  return (
    <main className="mx-[8%] my-[6rem] text-center">
      <H1 varients={varients} className="mb-2">
        Subscribe to our newsletter to get updates
        <br /> to our latest collections
      </H1>
      <P
        varients={varients}
        custom={0.2}
        className="mb-4 font-light text-stone-500"
      >
        Get 20% on your first order just by subscribing to our newsletter
      </P>
      <motion.div
        variants={varients}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
        custom={0.4}
        className="flex justify-center gap-2"
      >
        <div className="flex w-[25%] items-center gap-2 rounded-md border-[1px] bg-white px-4 py-2 ">
          <LuUser2 size={20} className="text-slate-400" />
          <input
            id="email"
            type="email"
            placeholder="Name"
            className="h-8 text-slate-600 placeholder:text-base placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <Button
          onClick={() => {
            isAuthenticated ? navigate("/shop") : popup(<LuUser2 />);
          }}
        >
          Subscribe
        </Button>
      </motion.div>
      <P varients={varients} custom={0.4} size="sm" className="mt-4">
        You will be able to unsubscribe at anytime.
        <br />
        Read our privecy policy,
        <span className="font-medium text-stone-500 underline hover:cursor-pointer">
          here
        </span>
      </P>
    </main>
  );
}
