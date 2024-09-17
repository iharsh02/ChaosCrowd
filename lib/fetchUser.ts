"use server";

import db from "@/lib/prismaDb";

export default async function fetchUserById(userId: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        blinks: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch user data");
  }
}
