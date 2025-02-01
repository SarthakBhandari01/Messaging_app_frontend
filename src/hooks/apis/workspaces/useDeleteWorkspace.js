import { useMutation } from "@tanstack/react-query";

import { deleteWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";

export const useDeleteWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  console.log("Auth in useDeleteWorkspace", auth);
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: deleteWorkspaceMutation,
  } = useMutation({
    mutationFn: () =>
      deleteWorkspaceRequest({ workspaceId, token: auth?.token }),
    onSuccess: () => {
      console.log("Workspace deleted successfully");
    },
    onError: (error) => {
      console.log("Error in deleting workspace ", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    deleteWorkspaceMutation,
  };
};
