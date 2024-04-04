import { useGetItems } from "../hooks/useGetItems";
import ProductsContainer from "../components/ProductContainer";
import Loader from "../ui/Loader";
import NavigationBar from "../components/NavigationBar";
import H1 from "../ui/H1";

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
    <main className="m-4 min-h-[calc(100vh-10rem)] rounded-lg bg-slate-100 p-8">
      <NavigationBar to="/shop" name="Shop" itemCount={wishlistItems?.length} />
      <H1 varients={varients} custom={0.2} className="mb-8 uppercase">
        Your Wishlist
      </H1>
      {isWishlistLoading ? (
        <Loader />
      ) : (
        <ProductsContainer items={wishlistItems} />
      )}
    </main>
  );
}
