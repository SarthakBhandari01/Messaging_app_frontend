import { createContext, useState } from "react";
import { io } from "socket.io-client";

import { useChannelMessages } from "@/hooks/context/useChannelMessages";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const socket = io(import.meta.env.VITE_API_URL);
  const [currentChannel, setCurrentChannel] = useState(null);
  const { messageList, setMessageList } = useChannelMessages();

  socket.on("NewMessageReceived", (data) => {
    console.log("new message received ", data);
    setMessageList([...messageList, data]);
  });
  async function joinChannel(channelId) {
    socket.emit("JoinChannel", { channelId }, (data) => {
      console.log("Successfully joined channel", data);
      setCurrentChannel(data?.data);
    });
  }

  return (
    <SocketContext.Provider value={{ socket, joinChannel, currentChannel }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
