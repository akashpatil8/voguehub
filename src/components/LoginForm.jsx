import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuLock, LuMail } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Button from "../ui/Button";
import Spinner from "../ui/Loader";

import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending } = useLogin();
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    login(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 flex w-[65%] flex-col items-center"
    >
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
        <div className="ml-auto cursor-pointer duration-300 hover:scale-110">
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
      <Button type="simple">Forgot password?</Button>
      <Button btnType="submit">{isPending ? <Spinner /> : "Login"}</Button>
    </form>
  );
}
