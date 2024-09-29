import { Toaster } from "@/components/ui/toaster";
import { TChildren } from "../../types";
import AuthProvider from "./auth-provider";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: TChildren) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <StoreProvider>
          {children}
          <Toaster />
        </StoreProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
