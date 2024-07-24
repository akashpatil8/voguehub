import { useState } from "react";

import ProductsContainer from "../components/ProductContainer";
import NavigationBar from "../components/NavigationBar";
import CatogoryListTile from "../ui/CaegoryListTile";
import Loader from "../ui/Loader";

import { categoryData } from "../../public/data/categoryData";
import { useGetItems } from "../hooks/useGetItems";

const categoryVariants = {
  initial: { translateY: -10, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: time },
  }),
};

export default function Shop() {
  const [category, setCategory] = useState("all");

  const { data: newItems, isLoading: isNewLoading } = useGetItems("new");
  const { data: featuredItems, isLoading: isFeaturedLoading } =
    useGetItems("featured");
  const { data: trendingItems, isLoading: isTrendingLoading } =
    useGetItems("trending");
  const { data: allItems, isAllLoading } = useGetItems("all");
  const { data: shirts, isShirtsLoading } = useGetItems("shirts");
  const { data: pants, isPantsLoading } = useGetItems("pants");
  const { data: sweaters, isSweatersLoading } = useGetItems("sweaters");

  function handleChange(e) {
    setCategory(e.target.id);
  }

  return (
    <main className="scrollbar flex min-h-[calc(100vh-8rem)]">
      <aside className="mx-8 my-4 hidden h-[42rem] w-[17%] rounded-lg bg-slate-100 p-8 lg:block">
        <form onChange={(e) => handleChange(e)}>
          <div className="flex flex-col">
            {categoryData?.map((data, i) => (
              <CatogoryListTile
                key={data}
                item={data}
                index={i}
                variants={categoryVariants}
              />
            ))}
          </div>
        </form>
      </aside>
      <aside className="scrollbar mx-auto my-4 h-full overflow-y-auto rounded-lg bg-slate-100 p-4 lg:mr-8 lg:w-[80%] lg:p-8">
        {category === "all" &&
          (isAllLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar itemCount={allItems?.length} to="/" name="home" />
              <ProductsContainer items={allItems} />
            </>
          ))}
        {category === "new" &&
          (isNewLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar itemCount={newItems?.length} to="/" name="home" />
              <ProductsContainer items={newItems} />
            </>
          ))}
        {category === "featured" &&
          (isFeaturedLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar
                itemCount={featuredItems?.length}
                to="/"
                name="home"
              />
              <ProductsContainer items={featuredItems} />
            </>
          ))}
        {category === "trending" &&
          (isTrendingLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar
                itemCount={trendingItems?.length}
                to="/"
                name="home"
              />
              <ProductsContainer items={trendingItems} />
            </>
          ))}
        {category === "shirts" &&
          (isShirtsLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar itemCount={shirts?.length} to="/" name="home" />
              <ProductsContainer items={shirts} />
            </>
          ))}
        {category === "pants" &&
          (isPantsLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar itemCount={pants?.length} to="/" name="home" />
              <ProductsContainer items={pants} />
            </>
          ))}
        {category === "sweaters" &&
          (isSweatersLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar itemCount={sweaters?.length} to="/" name="home" />
              <ProductsContainer items={sweaters} />
            </>
          ))}
      </aside>
    </main>
  );
}
