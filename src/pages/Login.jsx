import { useState } from "react";
import { GrFacebookOption, GrGooglePlus, GrTwitter } from "react-icons/gr";

import Button from "../ui/Button";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import H1 from "../ui/H1";
import P from "../ui/P";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="mt-10 grid place-items-center lg:h-screen">
      <div className="mx-auto flex h-[30rem] w-[80%] lg:px-20">
        <aside className="relative hidden h-full lg:block lg:w-[40%]">
          <img
            src="https://img.freepik.com/free-photo/outdoor-hight-fashion-portrait-stylish-casual-woman-black-hat-pink-suit-white-blouse-posing-old-street_273443-1186.jpg?w=1380&t=st=1711475738~exp=1711476338~hmac=ca91cea97e0a9fe4a33ae4a14af4dbb2223d88204b352760adbde65121b9654d"
            alt="login-img"
            className="h-full rounded-l-xl object-cover"
          />
          <div className="absolute top-0 h-full w-full rounded-l-xl bg-black opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
            <H1 theme="light" className="mb-8">
              Welcome back!
            </H1>
            <P fontColor="light" className="mb-16 w-[70%] text-center">
              To connect with us please login with your personal info
            </P>
            <P size="sm" className="mb-2">
              {showLogin ? "Don't" : "Already"} have an account?
            </P>
            {showLogin ? (
              <Button onClick={() => setShowLogin(false)} type="secondary">
                Sign Up
              </Button>
            ) : (
              <Button onClick={() => setShowLogin(true)} type="secondary">
                Log in
              </Button>
            )}
          </div>
        </aside>
        <aside className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-100 p-4 lg:w-[60%] lg:rounded-r-xl">
          <H1>{showLogin ? "Login to VogueHub" : "Sign in to VogueHub"}</H1>
          <div className="my-3 flex gap-4 text-xs lg:my-6">
            <Button type="round">
              <GrGooglePlus className="text-xs lg:text-xl" />
            </Button>
            <Button type="round">
              <GrFacebookOption className="text-xs lg:text-xl" />
            </Button>
            <Button type="round">
              <GrTwitter className="text-xs lg:text-xl" />
            </Button>
          </div>
          <P size="sm">or use your email account</P>
          {showLogin ? <LoginForm /> : <SignUpForm />}
          {showLogin ? (
            <Button
              onClick={() => setShowLogin(false)}
              type="simple"
              className="lg:hidden"
            >
              Sign Up
            </Button>
          ) : (
            <Button
              onClick={() => setShowLogin(true)}
              type="simple"
              className="lg:hidden"
            >
              Log in
            </Button>
          )}
        </aside>
      </div>
    </main>
  );
}
