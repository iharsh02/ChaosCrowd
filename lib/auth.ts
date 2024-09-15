import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { SessionStrategy } from "next-auth";
import prisma from "./prismaDb";
import type { Session } from "next-auth";

// Define the JWT token interface
interface JWTToken {
  accessToken?: string;
  sub?: string;
}

// Define the session interface
interface CustomSession extends Session {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
  accessToken?: string;
}

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId:
        "789137695369-8vu7be6f0gmd3t3vrj93htp9svvfvnb3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async jwt({ token }: { token: JWTToken }) {
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: JWTToken;
    }) {
      // Fetch the user from the database
      const user = await prisma.user.findUnique({
        where: {
          id: token.sub ?? "", // Provide a default value if sub is undefined
        },
      });

      // Add the user and token information to the session
      session.user.id = token.sub ?? "";
      session.accessToken = token.accessToken;

      return { ...session, user };
    },
  },
};
