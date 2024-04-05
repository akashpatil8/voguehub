import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";

import H1 from "../ui/H1";
import Button from "../ui/Button";

import { useGetUser } from "../hooks/useGetUser";

const varients = {
  initial: { translateY: 80, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: time },
  }),
};

export default function AddBanner() {
  const navigate = useNavigate();
  const { isAuthenticated, popup } = useGetUser();

  return (
    <motion.main
      variants={varients}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
      className="mx-[15%] my-[6rem] flex"
    >
      <aside className="w-[45%] rounded-bl-xl rounded-tl-xl bg-slate-300">
        <img
          src="https://i.pinimg.com/736x/0a/6f/0f/0a6f0f60727318bea29f19ce96040b53.jpg"
          alt="banner-img"
          className="w-full rounded-bl-xl rounded-tl-xl object-cover"
        />
      </aside>
      <aside className="w-[55%] rounded-br-xl rounded-tr-xl bg-slate-900 p-8">
        <h3 className="mb-2 text-sm font-medium capitalize text-slate-400 ">
          LIMITED OFFER
        </h3>
        <H1 theme="light" className="mb-12">
          35% off only on this friday and get special gift
        </H1>
        <Button
          onClick={() => {
            isAuthenticated ? navigate("/shop") : popup(<LuUser2 />);
          }}
          type="light"
        >
          <span>Grab it Now</span>
          <GoArrowRight size={30} />
        </Button>
      </aside>
    </motion.main>
  );
}
