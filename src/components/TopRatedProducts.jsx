import { motion } from "framer-motion";
import H1 from "../ui/H1";
import Loader from "../ui/Loader";
import ProductCard from "./ProductsCard";
import Divider from "../ui/Divider";

import { useGetItems } from "../hooks/useGetItems";
import P from "../ui/P";

const varients = {
  initial: { translateY: 30, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: time },
  }),
};

const productVarients = {
  initial: { translateY: -10, translateX: -10, opacity: 0 },
  final: {
    translateY: 0,
    translateX: 0,
    opacity: 1,
  },
};

export default function TopRatedProducts() {
  const { data: topRatedItems, isLoading: isTopRatedLoading } =
    useGetItems("topRated");

  if (isTopRatedLoading) return <Loader />;

  return (
    <main className="mx-[12%] text-center">
      <H1 varients={varients} className="mb-1">
        Top rated products
      </H1>
      <P varients={varients} custom={0.3} className="mb-12">
        Here are the most liked products by our customers, have a look at it
      </P>
      <motion.div
        initial="initial"
        whileInView="final"
        transition={{ staggerChildren: 0.3 }}
        className="flex justify-center gap-12"
      >
        {topRatedItems?.map((item) => (
          <ProductCard varients={productVarients} key={item.id} item={item} />
        ))}
      </motion.div>
      <div className="mx-auto w-[80%]">
        <Divider />
      </div>
    </main>
  );
}
