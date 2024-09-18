"use server";

import db from "@/lib/prismaDb";

interface Blink {
  id: string;
  label: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  userId: string;
  username : string | null;
}

export const fetchUserData = async (userId: string): Promise<Blink[]> => {
  try {
    const response = await db.user.findUnique({
      where: { id: userId },
      include: { blinks: true },
    });

    if (!response) {
      throw new Error("User not found");
    }

    // @ts-ignore
    const formattedBlinks: Blink[] = response.blinks.map((blink: any) => ({
      id: blink.id,
      label: blink.data.label,
      title: blink.data.title,
      description: blink.data.description,
      imageUrl: blink.data.imageUrl,
      createdAt: blink.createdAt.toISOString(), // Ensure date format
      userId: blink.userId,
      username : response.name,
    }));

    return formattedBlinks;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching user data"
    );
  }
};

