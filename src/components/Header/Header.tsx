import { Flex, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";

export const Header = () => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const headerBorderColor = useColorModeValue("main", "whiteAlpha.900");
  return (
    <Flex
      as="header"
      borderBottomWidth="1px"
      borderBottomColor={headerBorderColor}
      boxShadow="sm"
      py={2}
    >
      <Flex
        px={6}
        maxW="container.xl"
        w="full"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <a
          href="https://futurumtechnology.pl/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={isLightMode ? "/logo_light.png" : "/logo_dark.png"}
            alt="Futurum Technology Logo"
            height="70px"
            objectFit="contain"
          />
        </a>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};
export default Header;
