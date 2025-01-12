import combineContext from "@/utils/CombineContext";

import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";

export const AppContextProvider = combineContext(
  AuthContextProvider,
  CreateWorkspaceContextProvider
);
