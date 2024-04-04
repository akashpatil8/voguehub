import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItem } from "../services/apiItems";
import toast from "react-hot-toast";

export function useAddItem(query) {
  const queryClient = useQueryClient();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (item) => addItem({ item, query }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [query] });
      toast.success("Item successfully added to " + query);
    },
    onError: () => toast.error("Item is already present in " + query),
  });

  return { mutate, isError, isPending };
}
