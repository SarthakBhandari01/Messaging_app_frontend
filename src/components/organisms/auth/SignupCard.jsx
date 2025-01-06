import { useState } from "react";
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

export const SignupCard = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    password: "",
    username: "",
    confirmPassword: "",
    email: "",
  });

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          <Input
            type="text"
            placeholder="Username"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
            value={signupForm.username}
            disabled={false}
          />
          <Input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.target.value })
            }
            value={signupForm.email}
            disabled={false}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.target.value })
            }
            value={signupForm.password}
            disabled={false}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, confirmPassword: e.target.value })
            }
            value={signupForm.confirmPassword}
            disabled={false}
          />
          <Button size="lg" className="w-full" type="submit">
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
