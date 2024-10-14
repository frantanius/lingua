"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

interface IAuthButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  type: "login" | "register";
  asChild?: boolean;
}

export default function AuthButton({
  children,
  mode = "redirect",
  type = "login",
  asChild,
}: IAuthButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogTitle /> {/* Fix bug require dialog title */}
        <DialogContent className="w-auto border-none bg-transparent p-0">
          <Suspense>
            {type === "login" ? <LoginForm /> : <RegisterForm />}
          </Suspense>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
