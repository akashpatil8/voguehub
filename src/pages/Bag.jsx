import { motion } from "framer-motion";
import { RiCoupon3Line } from "react-icons/ri";
import toast from "react-hot-toast";

import Button from "../ui/Button";
import Loader from "../ui/Loader";
import NavigationBar from "../components/NavigationBar";
import BagItemListTile from "../components/BagItemListTile";
import BillingCard from "../ui/BillingCard";
import H1 from "../ui/H1";
import P from "../ui/P";

import { usePriceCalculation } from "../hooks/usePriceCalculation";
import { useGetItems } from "../hooks/useGetItems";

const varients = {
  initial: { translateY: -30, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: time },
  }),
};

export default function Bag() {
  const { data: bagItems, isLoading: isBagLoading } = useGetItems("bag");

  const { total, tax, shipping, subtotal, bagLength } =
    usePriceCalculation(bagItems);

  return (
    <main className="flex flex-col justify-center px-[5%] lg:min-h-[calc(100vh-8rem)] lg:px-[8%]">
      {isBagLoading ? (
        <Loader />
      ) : (
        <>
          <NavigationBar itemCount={bagLength} to="/shop" name="shop" />

          <H1 varients={varients} custom={0.2} className="uppercase lg:mb-6">
            Your Bag
          </H1>
          <div className="lg:flex">
            <aside className="lg:mr-auto lg:w-[55%]">
              <motion.ul
                variants={varients}
                initial="initial"
                animate="final"
                custom={0.4}
                className="my-4 max-h-[280px] overflow-y-auto lg:h-[280px] lg:pr-4"
              >
                {bagItems.length === 0 ? (
                  <P>No items in your bag</P>
                ) : (
                  bagItems.map((item) => (
                    <BagItemListTile
                      varients={varients}
                      key={item.id}
                      item={item}
                    />
                  ))
                )}
              </motion.ul>
              <div className="lg:mt-12">
                <P varients={varients} custom={0.6} className="mb-2 lg:mb-4">
                  Have a coupon? Enter your code here,
                </P>

                <motion.div
                  variants={varients}
                  initial="initial"
                  animate="final"
                  custom={0.8}
                  className="flex gap-2"
                >
                  <div className="flex items-center gap-2 rounded-md border-[1px] bg-white lg:w-80 lg:px-4 lg:py-2 ">
                    <RiCoupon3Line className="text-slate-400 lg:text-xl" />
                    <input
                      id="coupon"
                      type="text"
                      placeholder="Enter coupon code"
                      className="h-8 text-sm text-slate-600 placeholder:text-sm placeholder:text-slate-400 focus:outline-none lg:text-base lg:placeholder:text-base"
                    />
                  </div>
                  <Button onClick={() => toast.error("Coupon code invalid")}>
                    Apply
                  </Button>
                </motion.div>
              </div>
            </aside>
            {bagItems.length > 0 && (
              <>
                <div className="mr-8 w-[1px] bg-slate-300"></div>

                <BillingCard
                  shipping={shipping}
                  tax={tax}
                  subtotal={subtotal}
                  total={total}
                />
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}
