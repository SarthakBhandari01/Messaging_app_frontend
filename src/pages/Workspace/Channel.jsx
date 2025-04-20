import { useQueryClient } from "@tanstack/react-query";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ChannelHeader } from "@/components/molecules/Channels/ChannelHeader";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { Message } from "@/components/molecules/Messages/Message";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages";
import { useChannelMessages } from "@/hooks/context/useChannelMessages";
import { useSocket } from "@/hooks/context/useSocket";

export const Channel = () => {
  const { channelId } = useParams();
  const { isFetching, isError, channelDetails } = useGetChannelById(channelId);
  const { joinChannel } = useSocket();
  const { messageList, setMessageList } = useChannelMessages();
  const { isSuccess, messages } = useGetChannelMessages(channelId);
  const queryClient = useQueryClient();

  console.log("Messages => ", messages);

  useEffect(() => {
    queryClient.invalidateQueries("getPaginatedMessages");
  }, [channelId, queryClient]);

  useEffect(() => {
    if (!isFetching && !isError) {
      joinChannel(channelId);
    }
  }, [channelId, isFetching, isError, joinChannel]);

  useEffect(() => {
    if (isSuccess) {
      setMessageList(messages);
    }
  }, [setMessageList, isSuccess, messages, channelId]);

  if (isFetching) {
    return (
      <div className="h-full flex-1 flex items-center justify-center">
        <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-full flex flex-1 flex-col items-center justify-center gap-y-2">
        <TriangleAlertIcon className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Channel not found</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full">
      <ChannelHeader name={channelDetails?.name} />
      <div className="flex-5 overflow-y-auto p-5 gap-y-2">
        {messageList?.map((message) => {
          const formatedDate = new Date(message.createdAt).toLocaleString(
            "en-IN",
            {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }
          );
          return (
            <Message
              key={message._id}
              body={message.body}
              authorImage={message.senderId?.avatar}
              authorName={message.senderId?.username}
              createdAt={formatedDate}
            />
          );
        })}
      </div>
      <div className="flex-1" />
      <ChatInput />
    </div>
  );
};
