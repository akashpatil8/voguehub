export function usePriceCalculation(bagItems) {
  const bagLength = bagItems?.length;
  const shipping = 5 * bagLength;
  const subtotal = bagItems?.reduce(function (acc, curr) {
    if (curr.discountedPrice > 0)
      return acc + curr.quantity * curr.discountedPrice;
    return acc + curr.quantity * curr.price;
  }, 0);
  const tax = Math.round(subtotal * 0.12);
  const total = shipping + tax + subtotal;

  return { total, bagLength, shipping, subtotal, tax };
}
