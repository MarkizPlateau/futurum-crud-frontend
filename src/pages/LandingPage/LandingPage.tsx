import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import CampaignCard from "@/components/CampaignCard/CampaignCard";
import { useCampaignContext, useColorMainText } from "@/hooks";
import { MIN_FUND } from "@/constants/constants";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const { state } = useCampaignContext();
  const navigate = useNavigate();
  const mainText = useColorMainText();
  return (
    <Box>
      <Flex direction="column">
        <Button
          colorScheme="orange"
          size={{ base: "sm", md: "md" }}
          ml="auto"
          onClick={() => navigate("/new")}
          aria-label="Create a new campaign"
          isDisabled={state.campaignBudget < MIN_FUND}
        >
          Create New
        </Button>
        <Heading
          as="h1"
          size={{ base: "lg", lg: "xl" }}
          mb="4"
          ml={{ base: "2", md: "4" }}
          color={mainText}
          aria-live="polite"
        >
          Your Campaigns :
        </Heading>
      </Flex>

      {state.campaigns.length > 0 ? (
        <Box
          mt={2}
          as="section"
          borderWidth="1px"
          borderRadius="md"
          px={{ base: 4, md: 10 }}
          pt={{ base: 4, md: 10 }}
          role="region"
          aria-label="List of campaigns"
        >
          {state.campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              mb="6"
              maxWidth="600px"
            />
          ))}
        </Box>
      ) : (
        <Text ml={{ base: "2", md: "4" }} pt="6" aria-live="polite">
          Currently you don't have any active Campaigns
        </Text>
      )}
    </Box>
  );
};

export default LandingPage;
