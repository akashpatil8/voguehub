import CTA from "../components/CTA";
import AddBanner from "../components/AddBanner";
import Products from "../components/Products";
import Services from "../components/Services";
import Carousal from "../components/Carousal";
import TopRatedProducts from "../components/TopRatedProducts";

export default function Home() {
  return (
    <>
      <Carousal />
      <Services />
      <Products />
      <AddBanner />
      <TopRatedProducts />
      <CTA />
    </>
  );
}
