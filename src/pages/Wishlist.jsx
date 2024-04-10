import { useGetItems } from "../hooks/useGetItems";

import H1 from "../ui/H1";
import P from "../ui/P";
import ProductsContainer from "../components/ProductContainer";
import Loader from "../ui/Loader";
import NavigationBar from "../components/NavigationBar";

const varients = {
  initial: { translateY: -30, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: time },
  }),
};

export default function Wishlist() {
  const { data: wishlistItems, isLoading: isWishlistLoading } =
    useGetItems("wishlist");

  return (
    <main className="m-2 min-h-[calc(100dvh-5rem)] rounded-md bg-slate-100 px-2 py-4 lg:m-4 lg:min-h-[calc(100vh-10rem)] lg:rounded-lg lg:p-8">
      {isWishlistLoading ? (
        <Loader />
      ) : (
        <>
          <NavigationBar
            to="/shop"
            name="Shop"
            itemCount={wishlistItems?.length}
          />
          <H1 varients={varients} custom={0.2} className="uppercase lg:mb-8">
            Your Wishlist
          </H1>
          {wishlistItems.length === 0 ? (
            <P>Your wishlist is empty</P>
          ) : (
            <ProductsContainer items={wishlistItems} />
          )}
        </>
      )}
    </main>
  );
}
