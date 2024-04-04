import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBagItemQuantity } from "../services/apiItems";
import toast from "react-hot-toast";

export function useUpdateBagItemQuantity() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newItem) => updateBagItemQuantity(newItem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bag"] });
      toast.success("Item quantity updated");
    },
    onError: () => toast.error("Something went wrong"),
  });

  return { mutate, isPending };
}
