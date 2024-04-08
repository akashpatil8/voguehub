import { motion } from "framer-motion";
import { BiSolidStar } from "react-icons/bi";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";

import P from "../ui/P";
import Spinner from "../ui/Spinner";

import { useDeleteItems } from "../hooks/useDeleteItems";
import { useAddItem } from "../hooks/useAddItem";
import { useGetItems } from "../hooks/useGetItems";

export default function ProductCard({ item, varients, i }) {
  const {
    id: itemId,
    name,
    brand,
    price,
    discountedPrice,
    rating,
    imageUrl,
  } = item;
  const discount = Math.round(((price - discountedPrice) / price) * 100);

  const { mutate: addToBag, isPending: isAddingToBag } = useAddItem("bag");
  const { mutate: addToWishlist, isPending: isAddingToWishlist } =
    useAddItem("wishlist");
  const { data: bagItems } = useGetItems("bag");
  const { data: wishlistItems } = useGetItems("wishlist");
  const {
    mutate: deleteItemFromWishlist,
    isPending: isDeletingItemFromWishlist,
  } = useDeleteItems("wishlist");

  let isItemInBag = false;
  let isItemInWishlist = false;

  bagItems?.forEach((item) => {
    if (item.id === itemId) isItemInBag = true;
  });
  wishlistItems?.forEach((item) => {
    if (item.id === itemId) isItemInWishlist = true;
  });

  return (
    <motion.div
      variants={varients}
      initial="initial"
      animate="final"
      custom={0.2 * i}
      className="relative w-40 lg:w-56"
    >
      <img
        src={imageUrl}
        alt="product-img"
        className="mb-2 h-52 w-full rounded-md bg-stone-400 object-cover lg:h-80"
      />
      <div className="absolute bottom-36 left-3 h-6 w-12 rounded-sm bg-slate-800 opacity-60"></div>
      <div className="absolute bottom-36 left-3 flex h-6 w-12 items-center justify-center gap-1 rounded-sm text-xs  font-bold text-slate-100">
        <BiSolidStar />
        {rating}
      </div>

      <h2 className="overflow-hidden text-ellipsis text-xs font-medium tracking-wider lg:text-sm ">
        {name}
      </h2>
      <P size="sm" className="text-left">
        {brand}
      </P>

      <div className="mt-2 flex items-center gap-2">
        <p className="text-xs font-bold lg:text-sm">
          ${discountedPrice > 0 ? discountedPrice : price}
        </p>
        {discountedPrice > 0 && (
          <>
            <p className="text-left text-xs text-stone-400 line-through">
              ${price}
            </p>
            <p className="text-xs font-light text-red-600 lg:text-sm">
              ({discount}%)
            </p>
          </>
        )}
      </div>
      <div className="mt-5 flex justify-between gap-2">
        <button
          onClick={() => addToBag(item)}
          disabled={isItemInBag}
          className="flex h-8 w-[80%] items-center justify-center gap-1 rounded-md bg-slate-800 text-xs font-medium text-slate-100 duration-200 hover:bg-slate-600 focus:outline-none focus:ring-[1px] focus:ring-slate-800 disabled:cursor-not-allowed lg:h-10 lg:text-sm"
        >
          {isAddingToBag ? (
            <Spinner type="dark" />
          ) : (
            <>
              <LiaShoppingBagSolid className="text-base lg:text-xl" />
              {isItemInBag ? "Added" : "Add to bag"}
            </>
          )}
        </button>
        <button
          onClick={() =>
            isItemInWishlist
              ? deleteItemFromWishlist(itemId)
              : addToWishlist(item)
          }
          className="flex w-[20%] items-center justify-center gap-1 rounded-md bg-slate-200 text-sm font-medium text-slate-800 duration-200 hover:bg-slate-300 focus:outline-none focus:ring-[1px] focus:ring-slate-400 disabled:cursor-not-allowed lg:h-10"
        >
          {isAddingToWishlist || isDeletingItemFromWishlist ? (
            <Spinner type="dark" />
          ) : (
            <>
              {isItemInWishlist ? (
                <IoHeart className="text-base lg:text-xl" />
              ) : (
                <IoHeartOutline className="text-base lg:text-xl" />
              )}
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
