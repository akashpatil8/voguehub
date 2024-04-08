import { motion } from "framer-motion";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import Spinner from "../ui/Spinner";

import { useUpdateBagItemQuantity } from "../hooks/useUpdateBagItemQuantity";
import { useDeleteItems } from "../hooks/useDeleteItems";

export default function BagItemListTile({ item, varients }) {
  const {
    id,
    name,
    imageUrl,
    size,
    price,
    discountedPrice,
    quantity: currQuantity,
  } = item;

  const { mutate: deleteItem, isPending: isDeletingItem } =
    useDeleteItems("bag");
  const { mutate: updateQuantity } = useUpdateBagItemQuantity();

  return (
    <motion.div
      variants={varients}
      initial="initial"
      whileInView="final"
      custom={0.3}
    >
      <li className="my-2 flex items-center lg:my-4">
        <img
          src={imageUrl}
          className="mr-2 h-14 w-10 object-cover lg:mr-4 lg:h-16 lg:w-12"
          alt="product-img"
        />
        <div>
          <h3 className="text-sm lg:mb-1 lg:text-base">{name}</h3>
          <h4 className="text-xs text-slate-400 lg:text-sm">
            Size: <span className="font-bold text-slate-600">{size}</span>
          </h4>
        </div>
        <div className="ml-auto mr-1 flex items-center">
          <CiSquareMinus
            className="hover:cursor-pointer lg:text-2xl"
            onClick={() => {
              if (currQuantity > 1)
                updateQuantity({ ...item, quantity: currQuantity - 1 });
            }}
          />
          <h4 className="mx-0.5 text-xs lg:mx-2 lg:text-sm">{currQuantity}</h4>
          <CiSquarePlus
            className="hover:cursor-pointer lg:text-2xl"
            onClick={() => {
              if (currQuantity < 10)
                updateQuantity({ ...item, quantity: currQuantity + 1 });
            }}
          />
        </div>
        <div className="w-20 text-center lg:ml-20 lg:mr-6 lg:w-28">
          {currQuantity > 1 ? (
            <>
              <h2 className=" font-bold lg:text-xl ">
                $
                {discountedPrice > 0
                  ? currQuantity * discountedPrice
                  : currQuantity * price}
              </h2>
              <p className="text-xs text-slate-500 lg:text-sm">
                {currQuantity} x $
                {discountedPrice > 0 ? discountedPrice : price}
              </p>
            </>
          ) : (
            <h2 className="font-bold lg:text-xl ">
              ${discountedPrice > 0 ? discountedPrice : price}
            </h2>
          )}
        </div>
        {isDeletingItem ? (
          <Spinner />
        ) : (
          <IoCloseOutline
            onClick={() => deleteItem(id)}
            className="hover:cursor-pointer lg:text-2xl"
          />
        )}
      </li>
      <hr />
    </motion.div>
  );
}
