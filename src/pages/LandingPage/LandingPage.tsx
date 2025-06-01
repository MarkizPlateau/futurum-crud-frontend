import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { CampaignFormData } from "@/components/CampaignForm/schema";
import CampaignCard from "@/components/CampaignCard/CampaignCard";
import { useColorMainText } from "@/hooks";

export const LandingPage = () => {
  const [campaignList, setCampaignList] = useState<CampaignFormData[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem("campaigns");
    const campaigns = stored ? JSON.parse(stored) : [];
    setCampaignList(campaigns);
  }, []);
  const mainText = useColorMainText();
  return (
    <Box>
      <Flex direction="column">
        <Button
          as="a"
          href="/new"
          colorScheme="orange"
          size={{ base: "sm", md: "md" }}
          ml="auto"
        >
          Create New
        </Button>
        <Heading
          as="h1"
          size={{ base: "lg", lg: "xl" }}
          mb="4"
          ml={{ base: "2", md: "4" }}
          color={mainText}
        >
          Your Campaigns :
        </Heading>
      </Flex>

      {campaignList.length > 0 ? (
        <Box
          mt={8}
          borderWidth="1px"
          borderRadius="md"
          px={{ base: 4, md: 20 }}
          pt="10"
        >
          {campaignList.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              mb={4}
              maxWidth="600px"
            />
          ))}
        </Box>
      ) : (
        <Text ml={{ base: "2", md: "4" }} pt="6">
          Currently you don't have any active Campaigns
        </Text>
      )}
    </Box>
  );
};

export default LandingPage;
