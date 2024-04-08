import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";

import H1 from "../ui/H1";
import P from "../ui/P";
import Button from "../ui/Button";

import { useGetUser } from "../hooks/useGetUser";

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
    <main className="mx-[5%] my-12 text-center lg:mx-[8%] lg:my-24">
      <div className="mx-auto w-[80%]">
        <H1 varients={varients} className="mb-2">
          Subscribe to our newsletter to get updates to our latest collections
        </H1>
        <P
          varients={varients}
          custom={0.2}
          className="mb-4 font-light text-stone-500"
        >
          Get 20% on your first order just by subscribing to our newsletter
        </P>
      </div>
      <motion.div
        variants={varients}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
        custom={0.4}
        className="mx-auto flex h-10 w-[70%] items-center justify-center gap-1 lg:h-14 lg:gap-2"
      >
        <div className="my-2 flex h-full items-center gap-2 rounded-sm bg-slate-100 px-2 lg:rounded-md lg:px-4">
          <LuUser2 className="text-slate-500 lg:text-xl" />
          <input
            id="email"
            type="email"
            placeholder="Name"
            className="h-6 bg-slate-100 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none lg:h-8 lg:text-base lg:placeholder:text-base"
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
      <P varients={varients} custom={0.4} size="sm" className="mt-2 lg:mt-4">
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
