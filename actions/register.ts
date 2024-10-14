"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/lib/z-validations";
import db from "@/db/drizzle";
import { users } from "@/db/schema";
import { getUserByEmail } from "@/db/queries-user";

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid field!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  /*
    Check existing user by an email
  */
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  /*
    if user not exist create new user
  */
  await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  });

  return { success: "Register success!" };
};
