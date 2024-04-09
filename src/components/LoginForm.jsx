import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuLock, LuMail } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

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
      className="mt-2 flex flex-col items-center lg:w-[65%]"
    >
      <div className="my-2 flex w-full items-center gap-2 rounded-sm bg-white px-2 py-2 lg:rounded-md lg:px-4">
        <LuMail className="text-slate-500 lg:text-xl" />
        <input
          id="email"
          type="text"
          placeholder="Email"
          disabled={isPending}
          {...register("email", { required: "This field is required" })}
          className="h-6 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none lg:h-8 lg:text-base lg:placeholder:text-base"
        />
        {errors?.email?.message && (
          <p className="ml-auto text-[0.6rem] text-red-400 lg:text-xs">
            {errors?.email?.message}
          </p>
        )}
      </div>

      <div className="my-2 flex w-full items-center gap-2 rounded-sm bg-white  px-2 py-2 lg:rounded-md lg:px-4">
        <LuLock className="text-slate-500 lg:text-xl" />
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          disabled={isPending}
          {...register("password", { required: "This field is required" })}
          className="h-6 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none lg:h-8 lg:text-base lg:placeholder:text-base"
        />
        <div className="ml-auto cursor-pointer duration-300 hover:scale-110">
          {errors?.password?.message ? (
            <p className="ml-auto text-[0.6rem] text-red-400 lg:text-xs">
              {errors?.password?.message}
            </p>
          ) : showPassword ? (
            <FaRegEyeSlash
              onClick={() => setShowPassword(false)}
              className="text-sm text-slate-500 lg:text-xl"
            />
          ) : (
            <FaRegEye
              onClick={() => setShowPassword(true)}
              className="text-sm text-slate-500 lg:text-xl"
            />
          )}
        </div>
      </div>
      <Button type="simple">Forgot password?</Button>
      <Button btnType="submit">{isPending ? <Spinner /> : "Login"}</Button>
    </form>
  );
}
