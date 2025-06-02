import type { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "@/components";

export interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box minH="100vh">
      <Header />
      <Container as="main" maxW="container.xl" py={6} px={{ base: 4, sm: 10 }}>
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
