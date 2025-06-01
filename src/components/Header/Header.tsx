import {
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";
import { useEffect, useState } from "react";
import { CAMPAIGN_BUDGET, CURRENCY } from "@/constants/constants";
import { useColorMainText } from "@/hooks";

export const Header = () => {
  const [campaignBudget, setCampaignBudget] = useState<number>(5000);

  const boxShadowStrong = "0px 5px 15px 0px rgba(0, 0, 0, 0.4)";
  const boxShadow = useColorModeValue("sm", boxShadowStrong);

  // useEffect(() => {
  //   if (localStorage.getItem("campaigns")) {
  //     const campaignsList = localStorage.getItem("campaigns");
  //     if (campaignsList) {
  //       const parsedCampaignList = JSON.parse(campaignsList);
  //       const totalBudget = parsedCampaignList.reduce(
  //         (acc: number, campaign: { fund: number }) =>
  //           acc + Number(campaign.fund),
  //         0
  //       );

  //       setCampaignBudget(campaignBudget - totalBudget);
  //       localStorage.setItem("campaignsBudget", JSON.stringify(totalBudget));
  //     }
  //   } else {
  //     const campaignBudget = localStorage.getItem("campaignsBudget");
  //     if (campaignBudget) {
  //       setCampaignBudget(JSON.parse(campaignBudget));
  //     }
  //   }
  // }, [campaignBudget]);

  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const headerBorderColor = useColorModeValue("main", "customWhite");
  const mainColorText = useColorMainText();

  return (
    <Flex
      as="header"
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
            href="https://futurumtechnology.pl/index.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Futurum Technology website"
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
              {campaignBudget ? campaignBudget.toFixed(2) : CAMPAIGN_BUDGET}{" "}
              {CURRENCY}
            </Text>
          </Heading>
        </Flex>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};
export default Header;
