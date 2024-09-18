import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prismaDb";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: "Invalid or missing data" },
        { status: 400 },
      );
    }

    const blink = await prisma.blink.create({
      data: {
        data,
        userId: session.user.id,
      },
    });

    return NextResponse.json(blink, { status: 201 });
  } catch (error) {
    console.error("Error creating blink:", error);
    return NextResponse.json(
      { error: "Failed to create blink" },
      { status: 500 },
    );
  }
}
