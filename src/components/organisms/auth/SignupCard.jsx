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

export const SignupCard = ({
  signupForm,
  setSignupForm,
  validationError,
  onSignupFormSubmit,
  error,
  isSuccess,
  isPending,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create account</CardDescription>

        {validationError && (
          <div className="bg-destructive/15 p-4 flex  items-center  rounded-md gap-x-2 text-sm text-destructive font-semibold ">
            <TriangleAlert className="size-5" />
            <p> {validationError.message} </p>
          </div>
        )}

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
              Successfully signed up . You will be redirected to the login page
              in a few seconds.
              <LucideLoader2 className="animate-spin mt-2 ml-2" />
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={onSignupFormSubmit}>
          <Input
            type="text"
            placeholder="Username"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
            value={signupForm.username}
            disabled={isPending}
          />
          <Input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.target.value })
            }
            value={signupForm.email}
            disabled={isPending}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.target.value })
            }
            value={signupForm.password}
            disabled={isPending}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, confirmPassword: e.target.value })
            }
            value={signupForm.confirmPassword}
            disabled={isPending}
          />
          <Button
            size="lg"
            className="w-full"
            type="submit"
            disabled={isPending}
          >
            Continue
          </Button>
        </form>
        <Separator className="my-5" />
        <p className="text-s text-muted-foreground mt-4">
          {" "}
          Already have an account ?{" "}
          <span
            className="text-sky-600 hover:underline cursor-pointer "
            onClick={() => navigate("/auth/signin")}
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
