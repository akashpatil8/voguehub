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
    <main className="flex min-h-[calc(100vh-5rem)] flex-col px-[5%] pt-4 lg:min-h-[calc(100vh-8rem)] lg:justify-center lg:px-[8%]">
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
                className="my-4 h-[280px] overflow-y-auto lg:my-0 lg:pr-4"
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
                <P varients={varients} custom={0.6} className="mb-2">
                  Have a coupon? Enter your code here,
                </P>

                <motion.div
                  variants={varients}
                  initial="initial"
                  animate="final"
                  custom={0.8}
                  className="mb-8 flex gap-1 lg:mb-0 lg:gap-2"
                >
                  <div className="flex items-center gap-2 rounded-sm border-[1px] bg-white px-2 lg:w-80 lg:rounded-md lg:px-4 lg:py-2 ">
                    <RiCoupon3Line className="text-sm text-slate-400 lg:text-xl" />
                    <input
                      id="coupon"
                      type="text"
                      placeholder="Enter coupon code"
                      className="text-sm text-slate-600 placeholder:text-xs placeholder:text-slate-400 focus:outline-none lg:text-base lg:placeholder:text-base"
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
                <div className="mr-8 hidden w-[1px] bg-slate-300 lg:block"></div>

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
