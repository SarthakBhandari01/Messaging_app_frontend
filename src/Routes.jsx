import { Route, Routes } from "react-router-dom";

import { SigninContainer } from "@/components/organisms/auth/SigninContainer";
import { SignupContainer } from "@/components/organisms/auth/SignupContainer";
import { Auth } from "@/pages/Auth/Auth";
import { NotFound } from "@/pages/NotFound/Notfound";

import { ProtectedRoute } from "./components/molecules/ProtectedRoute/protectedRoute";

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
            <Auth>
              <h1 className="font-bold text-4xl">Home</h1>
            </Auth>
          </ProtectedRoute>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
