import { useQuery } from "@tanstack/react-query";

import { fetchWorkspaceDetailsRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";

export const useGetWorkspaceById = (id) => {
  const { auth } = useAuth();
  const {
    isFetching,
    isSuccess,
    data: workspace,
    isError,
    error,
  } = useQuery({
    queryFn: () => {
      return fetchWorkspaceDetailsRequest({
        workspaceId: id,
        token: auth?.token,
      });
    },
    queryKey: [`fetchWorkspaceById-${id}`],
    staleTime: 10000,
  });
  return {
    isFetching,
    isSuccess,
    error,
    workspace,
    isError,
  };
};
