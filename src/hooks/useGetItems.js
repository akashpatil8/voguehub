import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/apiItems";

export function useGetItems(query) {
  const { data, isLoading, error } = useQuery({
    queryKey: [query],
    queryFn: () => getItems(query),
  });

  return { data, isLoading, error };
}
