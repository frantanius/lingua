/* eslint-disable @typescript-eslint/no-unused-vars */

import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { users, accounts } from "@/db/schema";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    return user;
  } catch (_) {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  if (!id) return null;

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, id),
    });

    return user;
  } catch (_) {
    return null;
  }
};

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.query.accounts.findFirst({
      where: eq(accounts.userId, userId),
    });

    return account;
  } catch {
    return null;
  }
};
