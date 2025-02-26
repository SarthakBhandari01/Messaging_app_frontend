import { useMutation } from "@tanstack/react-query";

import { addChannelToWorkspace } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";

export const useAddChannelToWorkspace = () => {
  const { auth } = useAuth();
  const {
    mutateAsync: addChannelToWorkspaceMutation,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationFn: ({ channelName, workspaceId }) =>
      addChannelToWorkspace({ channelName, workspaceId, token: auth?.token }),
    onError: (error) => {
      console.log("Error in adding channel to workspace ", error);
    },
    onSuccess: (data) => {
      console.log("Channel added to workspace ", data);
    },
  });
  return {
    addChannelToWorkspaceMutation,
    isPending,
    error,
    isSuccess,
  };
};
