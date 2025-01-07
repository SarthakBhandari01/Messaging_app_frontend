import { LucideLoader2, TriangleAlert } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const SigninCard = ({
  signinForm,
  setSigninForm,
  error,
  isPending,
  isSuccess,
  onSigninFormSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>
        {error && (
          <div className=" flex items-center gap-x-2 p-4 bg-destructive/15 rounded-md text-destructive text-sm font-semibold ">
            <TriangleAlert className="size-5" />
            <p>{error.message}</p>
          </div>
        )}
        {isSuccess && (
          <div className="bg-primary/20 text-primary flex  rounded-md p-4 gap-x-2 font-semibold text-sm ">
            <FaCheck className="size-5" />
            <p>
              Successfully signed in . You will be redirected to the home page
              in a few seconds.
              <LucideLoader2 className="animate-spin mt-2 ml-2" />
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={onSigninFormSubmit}>
          <Input
            placeholder="Email"
            type="email"
            required
            value={signinForm.email}
            disabled={isPending}
            onChange={(e) =>
              setSigninForm({ ...signinForm, email: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            type="password"
            required
            disabled={isPending}
            onChange={(e) =>
              setSigninForm({ ...signinForm, password: e.target.value })
            }
            value={signinForm.password}
          />
          <Button size="lg" type="submit" disabled={false} className="w-full">
            Continue
          </Button>
          <Separator className="my-5" />
          <p className="text-s text-muted-foreground mt-4">
            Do not have an account ?{" "}
            <span
              className="text-sky-600 hover:underline cursor-pointer"
              onClick={() => navigate("/auth/signup")}
            >
              Sign up
            </span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
