import { motion } from "framer-motion";

export default function BillingCardListTile({
  title,
  value,
  type,
  varients,
  custom = null,
}) {
  if (type === "total")
    return (
      <motion.div
        variants={varients}
        initial="initial"
        whileInView="final"
        custom={custom}
        className=" mb-8 mt-6 flex justify-between"
      >
        <h4 className="text-lg font-semibold capitalize text-slate-800">
          {title}
        </h4>
        <h4 className="text-xl font-bold">${value}</h4>
      </motion.div>
    );
  return (
    <motion.div
      variants={varients}
      initial="initial"
      whileInView="final"
      custom={custom}
      className="mb-4 flex justify-between"
    >
      <h4 className="text-sm font-light capitalize text-slate-500">{title}</h4>
      <h4 className="font-semibold">${value}</h4>
    </motion.div>
  );
}
