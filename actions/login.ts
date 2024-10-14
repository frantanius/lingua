"use server";

import { AuthError } from "next-auth";
import * as z from "zod";
import { signIn } from "@/auth";
import { getUserByEmail } from "@/db/queries-user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/lib/z-validations";

export const loginAction = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password)
    return { error: "Email does not exist." };

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }

    throw error;
  }
};
