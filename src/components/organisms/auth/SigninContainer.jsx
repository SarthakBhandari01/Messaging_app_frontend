import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignin } from "@/hooks/apis/auth/useSignin";

import { SigninCard } from "./signinCard";

export const SigninContainer = () => {
  const navigate = useNavigate();
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const { error, isPending, isSuccess, signinMutation } = useSignin();

  async function onSigninFormSubmit(e) {
    e.preventDefault();

    await signinMutation({
      email: signinForm.email,
      password: signinForm.password,
    });
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }, [isSuccess, navigate]);
  return (
    <SigninCard
      signinForm={signinForm}
      setSigninForm={setSigninForm}
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      onSigninFormSubmit={onSigninFormSubmit}
    />
  );
};
