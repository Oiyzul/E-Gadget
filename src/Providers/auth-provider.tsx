import { SessionProvider } from "next-auth/react";

import { auth } from "@/lib/auth";
import { TChildren } from "../../types";

const AuthProvider = async ({ children }: TChildren) => {
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
