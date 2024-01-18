// file: ~/server/api/auth/[...].ts
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import { NuxtAuthHandler } from "#auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// @ts-ignore
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error
    GoogleProvider.default({
      clientId: useRuntimeConfig().googleId,
      clientSecret: useRuntimeConfig().googleSecret,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { type: "password", label: "password" },
      },
      async authorize(credentials: any) {
      try{
        console.log(credentials.email, credentials.password);
        if (!credentials?.email || !credentials?.password) {
          throw createError({
            statusCode: 500,
            statusMessage: "Missing Info",
          });
        } else {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user || !user.hashedPassword) {
            throw createError({
              statusCode: 401,
              statusMessage: "Invalid Credentials",
            });
          }

          const correctPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );
          console.log(correctPassword);
          if (!correctPassword) {
            throw createError({
              statusCode: 401,
              statusMessage: "Invalid Credentials",
            });
          }
          return user;
        }
        }catch(error){
        console.error(error)
       } 
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...token,
        ...session.user,
      };
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if(account?.provider==='google'){
      try {
        const userExists = await prisma.user.findUnique({
          where: {
            email: profile?.email,
          },
        });
        if (userExists === null) {
          await prisma.user.create({
            data: {
              email: profile?.email,
              name: profile?.name?.replace(/\s+/g, "").toLowerCase(),
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return true;
    },
  },
});
