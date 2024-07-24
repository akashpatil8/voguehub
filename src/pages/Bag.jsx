import { motion } from "framer-motion";

import H1 from "../ui/H1";
import Loader from "../ui/Loader";
import NavigationBar from "../components/NavigationBar";
import BagItemListTile from "../components/BagItemListTile";
import BillingCard from "../ui/BillingCard";
import emptyBag from "../../public/assets/empty-bag.webp";
import CouponComponent from "../components/CouponComponent";

import { usePriceCalculation } from "../hooks/usePriceCalculation";
import { useGetItems } from "../hooks/useGetItems";

const variants = {
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
    <main className="flex min-h-[calc(100vh-5rem)] flex-col px-[5%] pt-4 lg:min-h-[calc(100vh-8rem)] lg:px-[8%]">
      {isBagLoading && <Loader />}
      {!isBagLoading && bagItems.length === 0 && (
        <>
          <NavigationBar itemCount={bagLength} to="/shop" name="shop" />

          <H1 variants={variants} custom={0.2} className="uppercase lg:mb-4">
            Your Bag
          </H1>
          <motion.img
            variants={variants}
            initial="initial"
            animate="final"
            custom={0.4}
            src={emptyBag}
            alt="empty-bag-img"
            className="object-cover lg:h-[40%] lg:w-[40%]"
          />
        </>
      )}
      {!isBagLoading && bagItems.length !== 0 && (
        <>
          <NavigationBar itemCount={bagLength} to="/shop" name="shop" />

          <H1 variants={variants} custom={0.2} className="uppercase lg:mb-4">
            Your Bag
          </H1>
          <div className="lg:flex">
            <aside className="lg:mr-auto lg:w-[55%]">
              <motion.ul
                variants={variants}
                initial="initial"
                animate="final"
                custom={0.4}
                className="scrollbar my-4 h-[280px] overflow-y-auto lg:my-0 lg:pr-4"
              >
                {bagItems.map((item) => (
                  <BagItemListTile
                    variants={variants}
                    key={item.id}
                    item={item}
                  />
                ))}
              </motion.ul>

              <CouponComponent variants={variants} />
            </aside>
            <div className="mr-8 hidden w-[1px] bg-slate-300 lg:block"></div>

            <BillingCard
              shipping={shipping}
              tax={tax}
              subtotal={subtotal}
              total={total}
            />
          </div>
        </>
      )}
    </main>
  );
}
