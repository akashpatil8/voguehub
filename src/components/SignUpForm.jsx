import { LuLock, LuMail, LuUser2 } from "react-icons/lu";
import { useForm } from "react-hook-form";

import { useSignUp } from "../hooks/useSignUp";

import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: signUp, isPending } = useSignUp();

  function onSubmit(data) {
    signUp(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 flex w-[60%] flex-col items-center"
    >
      <div className="my-2 flex w-full items-center gap-2 rounded-md bg-white px-4 py-2 ">
        <LuUser2 size={20} className="text-slate-500" />
        <input
          id="name"
          type="text"
          placeholder="Name"
          disabled={isPending}
          {...register("name", { required: "This field is required" })}
          className="h-8 text-slate-600 placeholder:text-base placeholder:text-slate-400 focus:outline-none"
        />
        {errors?.name?.message && (
          <p className=" ml-auto text-xs text-red-400">
            {errors?.email?.message}
          </p>
        )}
      </div>
      <div className="my-2 flex w-full items-center gap-2 rounded-md bg-white px-4 py-2 ">
        <LuMail size={20} className="text-slate-500" />
        <input
          id="email"
          type="text"
          placeholder="Email"
          disabled={isPending}
          {...register("email", { required: "This field is required" })}
          className="h-8 text-slate-600 placeholder:text-base placeholder:text-slate-400 focus:outline-none"
        />
        {errors?.email?.message && (
          <p className=" ml-auto text-xs text-red-400">
            {errors?.email?.message}
          </p>
        )}
      </div>

      <div className="my-2 flex w-full items-center gap-2 rounded-md bg-white px-4 py-2 ">
        <LuLock size={20} className="text-slate-500" />
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          disabled={isPending}
          {...register("password", { required: "This field is required" })}
          className="h-8 text-slate-600 placeholder:text-base placeholder:text-slate-400 focus:outline-none"
        />
        <div className="ml-auto">
          {errors?.password?.message ? (
            <p className="ml-auto text-xs text-red-400">
              {errors?.password?.message}
            </p>
          ) : showPassword ? (
            <FaRegEyeSlash
              onClick={() => setShowPassword(false)}
              size={20}
              className="text-slate-500"
            />
          ) : (
            <FaRegEye
              onClick={() => setShowPassword(true)}
              size={20}
              className="text-slate-500"
            />
          )}
        </div>
      </div>
      <Button btnType="submit">{isPending ? <Spinner /> : "Sign Up"}</Button>
    </form>
  );
}
