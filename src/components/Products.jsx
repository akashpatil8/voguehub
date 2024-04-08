import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";

import H1 from "../ui/H1";
import P from "../ui/P";
import Divider from "../ui/Divider";
import Loader from "../ui/Loader";
import TabButton from "../ui/TabButton";
import ProductsContainer from "./ProductContainer";

import { useGetUser } from "../hooks/useGetUser";
import { useGetItems } from "../hooks/useGetItems";

const varients = {
  initial: { translateY: 30, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: time },
  }),
};

export default function Products() {
  const [selected, setSelected] = useState("new");
  const { isAuthenticated, popup } = useGetUser();
  const navigate = useNavigate();

  const { data: newItems, isLoading: isNewLoading } = useGetItems("new");
  const { data: featuredItems, isLoading: isFeaturedLoading } =
    useGetItems("featured");
  const { data: trendingItems, isLoading: isTrendingLoading } =
    useGetItems("trending");

  return (
    <main className="relative mt-12 lg:mt-24 lg:px-[12%]">
      <H1 varients={varients} className="mb-1 text-center">
        Discover our favourites
      </H1>
      <P
        varients={varients}
        custom={0.3}
        className="mx-auto w-[70%] text-center lg:w-[50%]"
      >
        Delve into our curated selection and uncover the styles we love most,
        handpicked just for you
      </P>
      <motion.div
        variants={varients}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
        className="mx-auto my-4 flex w-[70%] justify-center rounded-md bg-slate-200 lg:my-8"
      >
        <TabButton
          onClick={() => setSelected("new")}
          selected={selected}
          tabName="new"
        >
          New Arrivals
        </TabButton>
        <TabButton
          onClick={() => setSelected("featured")}
          selected={selected}
          tabName="featured"
        >
          Featured Items
        </TabButton>
        <TabButton
          onClick={() => setSelected("trending")}
          selected={selected}
          tabName="trending"
        >
          Trending Ones
        </TabButton>
      </motion.div>
      <div className="pb-10">
        {isNewLoading || isFeaturedLoading || isTrendingLoading ? (
          <Loader />
        ) : (
          <>
            {selected === "new" && <ProductsContainer items={newItems} />}
            {selected === "featured" && (
              <ProductsContainer items={featuredItems} />
            )}
            {selected === "trending" && (
              <ProductsContainer items={trendingItems} />
            )}
          </>
        )}
      </div>
      <motion.div
        variants={varients}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <button
          onClick={() => {
            isAuthenticated ? navigate("/shop") : popup(<LuUser2 />);
          }}
          className="absolute bottom-[-22px] left-0 right-0 mx-auto w-32 rounded-md border-[1.5px] border-stone-400 bg-white py-2 transition-colors duration-300 hover:border-slate-800 hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:ring-offset-0"
        >
          Shop more
        </button>
        <Divider />
      </motion.div>
    </main>
  );
}
