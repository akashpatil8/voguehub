import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItems } from "../services/apiItems";
import toast from "react-hot-toast";

export function useDeleteItems(query) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (itemId) => deleteItems({ itemId, query }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [query] });
      toast.success("Item deleted from " + query);
    },
    onError: () => toast.error("Something went wrong"),
  });
  // console.log(query);

  return { mutate, isPending, isError };
}
