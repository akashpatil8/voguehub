import { useState } from "react";

import ProductsContainer from "../components/ProductContainer";
import NavigationBar from "../components/NavigationBar";
import CatogoryListTile from "../components/CaegoryListTile";
import Loader from "../ui/Loader";

import { useGetItems } from "../hooks/useGetItems";
import { useQueryClient } from "@tanstack/react-query";

const categoryData = [
  "all",
  "new",
  "featured",
  "trending",
  "shirts",
  "pants",
  "sweaters",
];

const categoryVarients = {
  initial: { translateY: -10, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: time },
  }),
};

export default function Shop() {
  const [category, setCategory] = useState("all");
  const queryClient = useQueryClient();

  const newItems = queryClient.getQueryData(["new"]);
  const featuredItems = queryClient.getQueryData(["featured"]);
  const trendingItems = queryClient.getQueryData(["trending"]);

  // const { data: newItems, isLoading: isNewLoading } = useGetItems("new");
  // const { data: featuredItems, isLoading: isFeaturedLoading } =
  //   useGetItems("featured");
  // const { data: trendingItems, isLoading: isTrendingLoading } =
  //   useGetItems("trending");
  const { data: allItems, isAllLoading } = useGetItems("all");
  const { data: shirts, isShirtsLoading } = useGetItems("shirts");
  const { data: pants, isPantsLoading } = useGetItems("pants");
  const { data: sweaters, isSweatersLoading } = useGetItems("sweaters");

  function handleChange(e) {
    setCategory(e.target.id);
  }

  return (
    <main className="flex min-h-[calc(100vh-8rem)]">
      <aside className="mx-8 my-4 h-[42rem] w-[17%] rounded-lg bg-slate-100 p-8">
        <form onChange={(e) => handleChange(e)}>
          <div className="flex flex-col">
            {categoryData?.map((data, i) => (
              <CatogoryListTile
                key={data}
                item={data}
                index={i}
                variants={categoryVarients}
              />
            ))}
          </div>
        </form>
      </aside>
      <aside className="my-4 mr-8 h-full w-[80%] overflow-y-auto rounded-lg bg-slate-100 p-8">
        {category === "all" &&
          (isAllLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationBar itemCount={allItems?.length} to="/" name="home" />
              <ProductsContainer items={allItems} />
            </>
          ))}
        {category === "new" && (
          <>
            <NavigationBar itemCount={newItems?.length} to="/" name="home" />
            <ProductsContainer items={newItems} />
          </>
        )}
        {category === "featured" && (
          <>
            <NavigationBar
              itemCount={featuredItems?.length}
              to="/"
              name="home"
            />
            <ProductsContainer items={featuredItems} />
          </>
        )}
        {category === "trending" && (
          <>
            <NavigationBar
              itemCount={trendingItems?.length}
              to="/"
              name="home"
            />
            <ProductsContainer items={trendingItems} />
          </>
        )}
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
