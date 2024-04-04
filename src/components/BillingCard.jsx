import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import toast from "react-hot-toast";

import H2 from "../ui/H2";
import Button from "../ui/Button";
import BillingCardListTile from "../ui/BillingCardListTile";

const varients = {
  initial: { translateY: -30, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: time },
  }),
};

export default function BillingCard({ shipping, tax, subtotal, total }) {
  return (
    <aside className="w-[35%] p-4">
      <H2 varients={varients} custom={0.2}>
        Cart Total
      </H2>
      <motion.hr
        variants={varients}
        initial="initial"
        whileInView="final"
        custom={0.3}
        className="my-4"
      />
      <BillingCardListTile
        varients={varients}
        custom={0.4}
        title="shipping"
        value={shipping}
      />
      <BillingCardListTile
        varients={varients}
        custom={0.5}
        title="TAX (GST - 12%)"
        value={tax}
      />
      <BillingCardListTile
        varients={varients}
        custom={0.6}
        title="subtotal"
        value={subtotal.toFixed(2)}
      />

      <motion.hr
        variants={varients}
        initial="initial"
        whileInView="final"
        custom={0.3}
      />
      <BillingCardListTile
        varients={varients}
        custom={0.8}
        type="total"
        value={total.toFixed(2)}
        title="total"
      />

      <Button
        onClick={() => {
          toast("Checkout functionality is not yet implemeted");
          console.log("clicke");
        }}
        type="large"
        variants={varients}
        custom={0.9}
      >
        Proceed to Checkout
        <GoArrowRight size={28} />
      </Button>
    </aside>
  );
}
