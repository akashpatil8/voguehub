import { motion } from "framer-motion";

export default function Button({
  type = "primary",
  onClick,
  children,
  btnType = "button",
  variants,
  custom = null,
}) {
  if (type === "secondary")
    return (
      <button
        onClick={onClick}
        className="rounded-md border-[1.5px] border-slate-100 bg-transparent px-16 py-3 font-medium tracking-wide text-slate-100 duration-300 hover:bg-slate-200 hover:text-slate-800 focus:border-none focus:outline-none focus:ring-2 focus:ring-slate-100"
      >
        {children}
      </button>
    );

  if (type === "light")
    return (
      <motion.button
        variants={variants}
        initial="initial"
        whileInView="final"
        custom={custom}
        onClick={onClick}
        className="mt-4 flex items-center justify-center gap-3 rounded-md bg-slate-100 px-6 py-2 text-xs font-medium duration-300 hover:bg-slate-300 focus:outline-none focus:ring-[1px] focus:ring-slate-400 sm:text-sm md:py-3 md:text-lg lg:text-lg"
      >
        {children}
      </motion.button>
    );

  if (type === "simple")
    return (
      <button className="mb-4 mt-2 cursor-pointer text-sm text-slate-400 underline underline-offset-4 ring-offset-slate-100 focus:rounded-[1px] focus:outline-none focus:ring-[1px] focus:ring-slate-400 focus:ring-offset-2">
        {children}
      </button>
    );

  if (type === "large")
    return (
      <motion.button
        variants={variants}
        initial="initial"
        whileInView="final"
        custom={custom}
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md bg-slate-800 px-16 py-4 font-medium tracking-wide text-slate-100 duration-300 hover:bg-slate-700 hover:text-slate-100 focus:border-none focus:outline-none focus:ring-[1px] focus:ring-slate-800 "
      >
        {children}
      </motion.button>
    );

  if (type === "round")
    return (
      <button className="grid h-12 w-12 place-content-center rounded-full border-[1px] border-slate-700 text-slate-700 duration-300 hover:bg-slate-700 hover:text-slate-100  focus:outline-none focus:ring-[1px] focus:ring-slate-800">
        {children}
      </button>
    );

  if (type === "small")
    return (
      <button
        type={btnType}
        onClick={onClick}
        className="flex w-[7.5rem] cursor-pointer items-center justify-center gap-2 rounded-md bg-slate-800 py-3 text-sm tracking-wide text-slate-100 duration-300 hover:bg-slate-700 hover:text-slate-100 focus:border-none focus:outline-none focus:ring-[1px] focus:ring-slate-800"
      >
        {children}
      </button>
    );
  return (
    <button
      type={btnType}
      onClick={onClick}
      className="cursor-pointer rounded-md bg-slate-800 px-16 py-3 font-medium tracking-wide text-slate-100 duration-300 hover:bg-slate-700 hover:text-slate-100 focus:border-none focus:outline-none focus:ring-[1px] focus:ring-slate-800 "
    >
      {children}
    </button>
  );
}
