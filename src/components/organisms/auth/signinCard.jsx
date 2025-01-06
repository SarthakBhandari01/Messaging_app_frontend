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

export const SigninCard = () => {
  const navigate = useNavigate();

  const [SigninForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          <Input
            placeholder="Email"
            type="email"
            required
            value={SigninForm.email}
            disabled={false}
            onChange={(e) =>
              setSigninForm({ ...SigninForm, email: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            type="password"
            required
            disabled={false}
            onChange={(e) =>
              setSigninForm({ ...SigninForm, password: e.target.value })
            }
            value={SigninForm.password}
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
