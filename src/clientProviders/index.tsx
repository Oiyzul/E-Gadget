import { TChildren } from "../../types";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";

const ClientProviders = ({ children }: TChildren) => {
  return (
    <ThemeProvider>
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  );
};

export default ClientProviders;
