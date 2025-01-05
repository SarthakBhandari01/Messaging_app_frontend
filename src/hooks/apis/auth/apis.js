import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/api/auth";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutate: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onError: (error) => {
      console.log("Failed to signup ", error);
    },
    onSuccess: (data) => {
      console.log("successfully signed up ", data);
    },
  });
  return { isPending, isSuccess, error, signupMutation };
};
