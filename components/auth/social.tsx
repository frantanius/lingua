"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string;
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (provider: "google" | "github") => {
    setIsLoading(true);

    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        onClick={() => onClick("google")}
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        onClick={() => onClick("github")}
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}
