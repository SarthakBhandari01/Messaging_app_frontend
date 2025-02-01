import { useMutation } from "@tanstack/react-query";

import { deleteWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";

export const useUpdateWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: updateWorkspaceMutation,
  } = useMutation({
    mutationFn: (name) =>
      deleteWorkspaceRequest({ workspaceId, token: auth?.token, name }),
    onSuccess: () => {
      console.log("Workspace updated successfully");
    },
    onError: (error) => {
      console.log("Error in updating workspace ", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    updateWorkspaceMutation,
  };
};
