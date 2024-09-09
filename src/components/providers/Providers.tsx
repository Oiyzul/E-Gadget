import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: TChildren) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default Providers;
