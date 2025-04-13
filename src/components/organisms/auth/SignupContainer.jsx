import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignup } from "@/hooks/apis/auth/useSignup";

import { SignupCard } from "./SignupCard";

export const SignupContainer = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { isSuccess, isPending, error, signupMutation } = useSignup();
  const [validationError, setValidationError] = useState(null);
  async function onSignupFormSubmit(e) {
    e.preventDefault();

    if (
      !signupForm.email ||
      !signupForm.username ||
      !signupForm.confirmPassword ||
      !signupForm.password
    ) {
      setValidationError({ message: "All fields are required" });
      return;
    }
    if (signupForm.password !== signupForm.confirmPassword) {
      console.error("Password does not match");
      setValidationError({ message: "Password does not match" });
      return;
    }

    setValidationError(null);

    await signupMutation({
      email: signupForm.email,
      username: signupForm.username,
      password: signupForm.password,
    });
  }
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/auth/signin");
      }, 3000);
    }
  },[isSuccess, navigate]);
  return (
    <SignupCard
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      onSignupFormSubmit={onSignupFormSubmit}
      validationError={validationError}
      error={error}
      isSuccess={isSuccess}
      isPending={isPending}
    />
  );
};
