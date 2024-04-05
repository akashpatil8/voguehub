import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../ui/Button";
import logo from "../../public/assets/logo.png";

import { useGetUser } from "../hooks/useGetUser";
import { useGetItems } from "../hooks/useGetItems";
import { useLogout } from "../hooks/useLogout";

const varients = {
  initial: { translateY: -50, opacity: 0 },
  final: (time) => ({
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 + time },
  }),
};

export default function Header() {
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(["user"]);
  const name = userData?.identities[0]?.identity_data?.name;

  const { data: bagItems } = useGetItems("bag");

  const { isAuthenticated, popup } = useGetUser();
  const { mutate: logout } = useLogout();

  return (
    <header className="grid h-16 bg-white px-[8%] shadow-[1px_1px_10px_0_rgba(0,0,0,0.3)]">
      <nav className="flex items-center justify-between">
        <motion.button
          variants={varients}
          initial="initial"
          animate="final"
          viewport={{ once: true }}
          onClick={() => navigate("/home")}
          className="cursor-pointer "
        >
          <img
            src={logo}
            alt=""
            className="h-11 transition-transform duration-200 hover:scale-110"
          />
        </motion.button>
        <div className="flex w-[33%] items-center justify-end gap-2 text-end sm:gap-3 md:gap-5">
          <div
            className="relative text-center"
            onMouseEnter={() => setShowDialog(true)}
            onMouseLeave={() => setShowDialog(false)}
          >
            <motion.div
              variants={varients}
              initial="initial"
              animate="final"
              viewport={{ once: true }}
              custom={0.2}
            >
              <GoPerson
                size={24}
                className=" cursor-pointer duration-150 hover:scale-110"
              />
            </motion.div>
            <AnimatePresence>
              {showDialog && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: "50%" }}
                  className="absolute right-1/2 top-8 z-10 items-start rounded-md bg-slate-100 px-6 py-4 text-left shadow-[3px_3px_15px_0_rgba(0,0,0,0.3)] "
                >
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                  {isAuthenticated ? (
                    <>
                      <p className="pt-2 text-lg font-light text-slate-600">
                        Hello,{" "}
                        <span className="font-bold capitalize">{name}</span>
                      </p>
                      <hr className="mb-2 mt-1 w-full border-slate-300" />
                      <p className="my-1 cursor-pointer rounded-md p-2 font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800">
                        Account
                      </p>
                      <p className="my-1 cursor-pointer rounded-md p-2 font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800">
                        Wishlist
                      </p>
                      <p className="my-1 cursor-pointer rounded-md p-2 font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800">
                        Bag
                      </p>
                      <p className="my-1 cursor-pointer rounded-md p-2 font-light text-slate-600 duration-300 hover:bg-slate-200 hover:font-medium hover:text-slate-800">
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
                    </>
                  ) : (
                    <Button type="small" onClick={() => navigate("/login")}>
                      <IoLogInOutline size={20} />
                      Login
                    </Button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-5 w-[1.5px] bg-slate-300"></div>

          <motion.div
            variants={varients}
            initial="initial"
            animate="final"
            viewport={{ once: true }}
            custom={0.3}
            className=" bg-transparent"
          >
            <IoMdHeartEmpty
              onClick={() => {
                isAuthenticated ? navigate("/wishlist") : popup(<LuUser2 />);
              }}
              size={24}
              className="cursor-pointer text-slate-800 duration-150 hover:scale-110"
            />
          </motion.div>

          <div className="h-5 w-[1.5px] bg-slate-300"></div>

          <motion.div
            variants={varients}
            initial="initial"
            animate="final"
            viewport={{ once: true }}
            custom={0.4}
            className="relative"
          >
            <HiOutlineShoppingBag
              onClick={() => {
                isAuthenticated ? navigate("/bag") : popup(<LuUser2 />);
              }}
              size={24}
              className="cursor-pointer duration-150 hover:scale-110"
            />

            {bagItems?.length > 0 && (
              <div className="absolute right-[-6px] top-[-6px] grid h-4 w-4 place-items-center rounded-full bg-slate-800 text-xs text-slate-100">
                {bagItems?.length}
              </div>
            )}
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
