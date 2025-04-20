import combineContext from "@/utils/CombineContext";

import { AuthContextProvider } from "./AuthContext";
import { ChannelMessagesProvider } from "./ChannelMessages";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { SocketContextProvider } from "./SocketContext";
import { WorkspaceContextProvider } from "./WorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";

export const AppContextProvider = combineContext(
  ChannelMessagesProvider,
  SocketContextProvider,
  AuthContextProvider,
  WorkspaceContextProvider,
  CreateWorkspaceContextProvider,
  WorkspacePreferencesModalContextProvider,
  CreateChannelContextProvider
);
