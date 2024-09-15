// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     if (req.nextUrl.pathname.startsWith("/dashboard")) {
//       return NextResponse.rewrite(new URL("/", req.url));
//     }
//     // if(req.nextUrl.pathname.startsWith('/doctor')&& (req.nextauth.token?.role != "doctor" || req.nextauth.token?.role != "admin")){
//     //     return NextResponse.redirect('http://localhost:3000/')
//     // }
//   },
//   {
//     callbacks: {
//       authorized: async ({ req, token }) => {
//         // if(req.nextUrl.pathname.startsWith('/doctor')){
//         //     return token?.role === "DOCTOR"}
//         // if(req.nextUrl.pathname.startsWith('/patient')){
//         //     return token?.role === "PATIENT"}
//         // return !!token;
//         return !!token;
//       },
//     },
//     pages: {
//       signIn: "/auth/log-in",
//       signOut: "/auth/sign-out",
//       error: "/auth/error",
//     },
//   },
// );

// export const config = {
//   matcher: ["/discover", "/dashboard"],
// };
