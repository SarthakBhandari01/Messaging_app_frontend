import { Route, Routes } from "react-router-dom";

import { SigninContainer } from "@/components/organisms/auth/SigninContainer";
import { SignupContainer } from "@/components/organisms/auth/SignupContainer";
import { Auth } from "@/pages/Auth/Auth";
import { NotFound } from "@/pages/NotFound/Notfound";

import { ProtectedRoute } from "./components/molecules/ProtectedRoute/protectedRoute";
import { Home } from "./pages/Home/Home";
import { JoinPage } from "./pages/Workspace/joinPage";
import { WorkspaceLayout } from "./pages/Workspace/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupContainer />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SigninContainer />
          </Auth>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workspaces/:workspaceId"
        element={
          <ProtectedRoute>
            <WorkspaceLayout>Workspace</WorkspaceLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/workspaces/:workspaceId/channels/:channelId"
        element={<ProtectedRoute>Channel</ProtectedRoute>}
      />
      <Route path="/workspaces/join/:workspaceId" element={<JoinPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
