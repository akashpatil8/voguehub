import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../ui/Loader";

import { useGetUser } from "../hooks/useGetUser";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();

  // if (!isAuthenticated && !isLoading) return <Navigate to="login" />;

  // console.log(isAuthenticated, isLoading);

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // console.log(isAuthenticated, isLoading);

  if (isLoading) return <Loader />;

  if (isAuthenticated) return children;
}
