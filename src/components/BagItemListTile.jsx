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
      <li className="my-4 flex items-center">
        <img
          src={imageUrl}
          className="mr-4 h-16 w-12 object-cover"
          alt="product-img"
        />
        <div>
          <h3 className="mb-1">{name}</h3>
          <h4 className="text-sm text-slate-400">
            Size: <span className="font-bold text-slate-600">{size}</span>
          </h4>
        </div>
        <div className="ml-auto flex items-center">
          <CiSquareMinus
            size={24}
            className="hover:cursor-pointer"
            onClick={() => {
              if (currQuantity > 1)
                updateQuantity({ ...item, quantity: currQuantity - 1 });
            }}
          />
          <h4 className="mx-2 text-sm">{currQuantity}</h4>
          <CiSquarePlus
            size={24}
            className="hover:cursor-pointer"
            onClick={() => {
              if (currQuantity < 10)
                updateQuantity({ ...item, quantity: currQuantity + 1 });
            }}
          />
        </div>
        <div className="ml-20 mr-6 w-28 text-center">
          {currQuantity > 1 ? (
            <>
              <h2 className="text-xl font-bold ">
                $
                {discountedPrice > 0
                  ? currQuantity * discountedPrice
                  : currQuantity * price}
              </h2>
              <p className="text-sm text-slate-500">
                {currQuantity} x $
                {discountedPrice > 0 ? discountedPrice : price}
              </p>
            </>
          ) : (
            <h2 className="text-xl font-bold ">
              ${discountedPrice > 0 ? discountedPrice : price}
            </h2>
          )}
        </div>
        {isDeletingItem ? (
          <Spinner />
        ) : (
          <IoCloseOutline
            onClick={() => deleteItem(id)}
            size={24}
            className="hover:cursor-pointer"
          />
        )}
      </li>
      <hr />
    </motion.div>
  );
}
