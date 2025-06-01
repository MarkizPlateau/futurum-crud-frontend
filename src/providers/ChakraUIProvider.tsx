import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export const ChakraUIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider>{children}</ThemeProvider>
    </ChakraProvider>
  );
};

export default ChakraUIProvider;
