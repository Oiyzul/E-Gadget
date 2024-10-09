import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

import dbConnect from "./dbConnect";
import User from "./models/userModel";

export const config = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        if (credentials == null) return null;

        const user = await User.findOne({ email: credentials.email });

        if (user) {
          const isPasswordMatched = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (isPasswordMatched) return user;
        }
        return null;
      },
    }),
    Google,
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [
        /\/checkout/,
        /\/order\/(.*)/,
        /\/dashboard\/(.*)/,
      ];

      const { pathname } = request.nextUrl;
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth;
      return true;
    },
    async jwt({ user, trigger, session, token }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          role: user.role,
          name: user.name,
          isAdmin: user.isAdmin,
        };
      }
      if (trigger === "update" && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
    async signIn({ user, account }) {
      // console.log(user, account, profile);
      // if (account?.provider === "google") {
      //   await dbConnect();
      //   const existingUser = await User.findOne({ email: user.email });
      //   if (existingUser) return true;
      //   if (!existingUser) {
      //     await User.create({
      //       email: user.email,
      //       name: user.name,
      //       imgUrl: user.image,
      //     });
      //   }
      // }
      if (account?.provider === "google") {
        const { name, email, image } = user;
        await dbConnect();
        try {
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                imgUrl: image,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  },
} as NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
