import {
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";
import { CURRENCY } from "@/constants/constants";
import { useCampaignContext, useColorMainText } from "@/hooks";

export const Header = () => {
  const { state } = useCampaignContext();

  const boxShadowStrong = "0px 5px 15px 0px rgba(0, 0, 0, 0.4)";
  const boxShadow = useColorModeValue("sm", boxShadowStrong);

  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const headerBorderColor = useColorModeValue("main", "customWhite");
  const mainColorText = useColorMainText();

  return (
    <Flex
      as="header"
      role="banner"
      borderBottomWidth="1px"
      borderBottomColor={headerBorderColor}
      boxShadow={boxShadow}
      py={2}
    >
      <Flex
        px={{ base: "4", sm: "6" }}
        maxW="container.xl"
        w="full"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex alignItems="center" gap={["2", "4"]}>
          <a
            // href="https://futurumtechnology.pl/index.html"
            // target="_blank"
            // rel="noopener noreferrer"
            // aria-label="Visit Futurum Technology website"
            href="/"
            aria-label="Go to homepage"
          >
            <Image
              src={isLightMode ? "/logo_light.png" : "/logo_dark.png"}
              alt="Futurum Technology Logo"
              height={{ base: "50px", sm: "70px" }}
              objectFit="contain"
            />
          </a>
          <Heading
            px="1"
            as="h2"
            fontSize={{ base: "sm", sm: "xl", md: "2xl" }}
            color={mainColorText}
          >
            Total Budget{" "}
            <Text mr="2" display={{ base: "none", md: "initial" }}>
              of Campaign is
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              color={isLightMode ? "lightMode.orange" : "darkMode.orange"}
            >
              {Number(state.campaignBudget).toFixed(2)} {CURRENCY}
            </Text>
          </Heading>
        </Flex>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};
export default Header;
