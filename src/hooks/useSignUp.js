import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { signUp as signUpApi } from "../services/apiAuth";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      navigate("/", { replace: true });
      toast.success("Account added successfully");
    },
    onError: (error) => toast.error(error),
  });

  return { mutate, isPending };
}
