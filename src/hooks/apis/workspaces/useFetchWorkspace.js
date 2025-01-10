import { useQuery } from "@tanstack/react-query";

import { fetchWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";

export const useFetchWorkspace = () => {
  const auth = useAuth();

  const {
    isFetching,
    isSuccess,
    error,
    data: workspaces,
  } = useQuery({
    queryFn: () => fetchWorkspaceRequest(auth?.token),
    queryKey: "fetchWorkspaces",
    staleTime: 30000,
  });

  return {
    isFetching,
    isSuccess,
    error,
    workspaces,
  };
};
