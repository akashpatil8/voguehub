import { useMutation } from "@tanstack/react-query";
import { addToWishlist } from "../services/apiItems";
import toast from "react-hot-toast";

export function useAddToWishlist() {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => toast.success("Item added to wishlist"),
    onError: (error) => toast.error(error.message),
  });

  return { mutate, isPending, isError };
}
