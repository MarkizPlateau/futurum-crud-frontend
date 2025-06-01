import theme from "@/styles/theme";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

export const ChakraUIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
};

export default ChakraUIProvider;
