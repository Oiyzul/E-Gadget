import { DefaultSession } from "next-auth";

export {};

declare global {
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

declare module "next-auth" {
  interface Session {
    user: {
      _id: string | null;
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
}

export interface User extends DefaultUser {
  _id: string | null;
  isAdmin?: boolean;
}
