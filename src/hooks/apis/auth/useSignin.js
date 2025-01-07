import { useMutation } from "@tanstack/react-query";

import { signInRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";

export const useSignin = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log("Successfully signed in", data);
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
