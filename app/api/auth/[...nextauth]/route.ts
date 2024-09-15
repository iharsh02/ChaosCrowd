import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";
// @ts-ignore
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
