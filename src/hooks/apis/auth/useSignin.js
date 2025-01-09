import { useMutation } from "@tanstack/react-query";

import { signInRequest } from "@/api/auth";
import { useAuth } from "@/hooks/context/useAuth";
import { useToast } from "@/hooks/use-toast";

export const useSignin = () => {
  const { toast } = useToast();
  const { setAuth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
      console.log("Successfully signed in", response);

      const userObject = JSON.stringify(response.data);

      localStorage.setItem("user", userObject);
      localStorage.setItem("token", response.data.token);

      setAuth({
        user: userObject,
        token: response.data.token,
        isLoading: false,
      });

      toast({
        title: "Successfully signed in",
        message: "You will be redirected to the home page in a few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.error(error.message);
      toast({
        title: "Failed to sign in",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    },
  });
  return {
    isSuccess,
    isPending,
    error,
    signinMutation,
  };
};
