import combineContext from "@/utils/CombineContext";

import { AuthContextProvider } from "./AuthContext";

export const AppContextProvider = combineContext(AuthContextProvider);
