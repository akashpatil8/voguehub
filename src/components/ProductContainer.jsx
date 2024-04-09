import ProductCard from "./ProductsCard";
import { motion } from "framer-motion";

const varients = {
  initial: { translateY: -10, translateX: -10, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: time },
  }),
};

export default function ProductsContainer({ items }) {
  return (
    <motion.div
      variants={varients}
      className="grid grid-cols-2 flex-wrap place-items-center gap-4 lg:grid-cols-4 lg:gap-y-16 "
    >
      {items?.map((item, i) => (
        <ProductCard varients={varients} key={item.id} item={item} i={i} />
      ))}
    </motion.div>
  );
}
