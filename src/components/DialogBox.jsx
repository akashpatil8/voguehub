import { motion } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";

import Button from "../ui/Button";

import { useLogout } from "../hooks/useLogout";

export default function DialogBox({ setShowDialog }) {
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(["user"]);
  const name = userData?.identities[0]?.identity_data?.name;

  const { mutate: logout } = useLogout();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      style={{ translateX: "50%" }}
      className="absolute right-1/2 top-8 z-10 w-32 items-start rounded-md bg-slate-100 px-3 py-2 text-center shadow-[3px_3px_15px_0_rgba(0,0,0,0.3)] lg:w-auto lg:px-6 lg:py-4 lg:text-left "
    >
      <div className="absolute left-0 right-0 bg-transparent lg:-top-2 lg:h-2"></div>

      <p className="pt-2 text-sm font-light text-slate-600 lg:text-lg">
        Hello, <span className="font-bold capitalize">{name}</span>
      </p>
      <hr className="mb-2 mt-1 w-full border-slate-300" />
      <p className="my-1 cursor-pointer rounded-md p-2 text-sm font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800 lg:text-base">
        Account
      </p>
      <p className="my-1 cursor-pointer rounded-md p-2 text-sm font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800 lg:text-base">
        Wishlist
      </p>
      <p className="my-1 cursor-pointer rounded-md p-2 text-sm font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800 lg:text-base">
        Bag
      </p>
      <p className="my-1 cursor-pointer rounded-md p-2 text-sm font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800 lg:text-base">
        Settings
      </p>
      <hr className="my-2 w-full border-slate-300" />
      <Button
        type="small"
        onClick={() => {
          logout();
          setShowDialog(false);
        }}
      >
        Logout
      </Button>
    </motion.div>
  );
}
