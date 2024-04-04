import { useQuery } from "@tanstack/react-query";
import { user as userApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useGetUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: userApi,
  });

  const isAuthenticated = user?.role === "authenticated";

  const popup = (icon) => toast("You need to login first", { icon: icon });

  return { isAuthenticated, isLoading, popup };
}
