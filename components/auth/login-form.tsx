"use client";

import * as z from "zod";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/z-validations";
import { loginAction } from "@/actions/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "@/components/auth/form-error";
import FormSuccess from "@/components/auth/form-success";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string;
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  const [loginMessages, setLoginMessages] = useState<{
    errorMessage: string | undefined;
    successMessage: string | undefined;
  }>({
    errorMessage: "",
    successMessage: "",
  });
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setLoginMessages({ errorMessage: "", successMessage: "" });

    setTransition(() => {
      console.log(values);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loginAction(values, callbackUrl).then((data: any) => {
        if (data?.error) {
          form.resetField("password");
          setLoginMessages((prevState) => ({
            ...prevState,
            errorMessage: data.error,
          }));
        }

        if (data?.success) {
          form.resetField("password");
          setLoginMessages((prevState) => ({
            ...prevState,
            successMessage: data.success,
          }));
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormDescription>admin@example.com</FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormDescription>123456</FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={loginMessages.errorMessage || urlError} />
          <FormSuccess message={loginMessages.successMessage} />
          <Button
            type="submit"
            variant="secondary"
            className="w-full"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
