import { useQuery } from "@tanstack/react-query";

import { getChannelById } from "@/api/channels";
import { useAuth } from "@/hooks/context/useAuth";

export const useGetChannelById = (channelId) => {
  const { auth } = useAuth();
  const {
    isFetching,
    isError,
    error,
    data: channelDetails,
  } = useQuery({
    queryFn: () => getChannelById({ channelId, token: auth?.token }),
    queryKey: [`get-channel-${channelId}`],
  });
  return {
    isFetching,
    isError,
    error,
    channelDetails,
  };
};
