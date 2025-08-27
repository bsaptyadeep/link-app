"use client"

import type React from "react";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";;
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserService from "../../../lib/services/user";
import { isValidEmail } from "@/lib/email.util";
import { useSearchParams } from 'next/navigation'
import { AlertBox } from "@/components/ui/alert-box";
import WelcomeScreen from "./WelcomeScreen";

export default function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const profileName = searchParams.get('profileName') // example: ?name=John
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState<string>(profileName || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const UserServiceInstance = UserService.getInstance();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError(null);

    if (!username || !email || !password) {
      setRegisterError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setRegisterError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }

    // Check if profile name is available
    const isProfileNameAvailable = await UserServiceInstance.checkProfileNameAvailable(username);
    if (!isProfileNameAvailable) {
      setRegisterError("Profile name is already taken.");
      return;
    }

    try {
      setIsLoading(true);
      const registerUserPayload = {
        profileName: username,
        email,
        password
      };
      await UserServiceInstance.registerUser(registerUserPayload);
      setIsRegistrationSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 5000);

    } catch (err) {
      setRegisterError((err as Error).message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (registerError) {
      setTimeout(() => {
        setRegisterError(null);
      }, 20000);
    }
  }, [registerError])

  if(isRegistrationSuccess) {
    return <WelcomeScreen />
  }

  return (
    <Suspense>
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
        <Link
          href="/"
          className="absolute left-8 top-8 flex items-center text-sm font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {registerError && (
                <AlertBox variant="error" description={registerError} hideLabel />
              )}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="your-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Suspense>
  );
}
