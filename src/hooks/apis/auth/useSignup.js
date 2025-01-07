import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";

export const useSignup = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onError: (error) => {
      console.log("Failed to signup ", error);
      toast({
        title: "Failed to signup",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      console.log("successfully signed up ", data);
      toast({
        title: "Successfully signup",
        message: "You will be redirected to  the login page in few second",
        type: "success",
      });
    },
  });
  return { isPending, isSuccess, error, signupMutation };
};
