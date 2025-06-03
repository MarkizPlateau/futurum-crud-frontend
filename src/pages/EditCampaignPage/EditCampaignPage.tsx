import { NavigationButton } from "@/components";
import CampaignForm from "@/components/CampaignForm/CampaignForm";
import { ROUTES } from "@/constants/routes";
import { useCampaignContext, useColorMainText } from "@/hooks";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditCampaignPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state } = useCampaignContext();
  const campaign = state.campaigns.find((c) => c.id === id);

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  useEffect(() => {
    if (state.campaigns.length > 0 && !campaign && !isInitialRender) {
      navigate(ROUTES.LANDING);
    }
  }, [campaign, state.campaigns, navigate, isInitialRender]);

  const mainColorText = useColorMainText();

  if (!campaign) {
    return (
      <Flex w="full">
        <Spinner
          size="xl"
          color="orange"
          mx="auto"
          aria-label="Loading campaign data"
        />
      </Flex>
    );
  }
  return (
    <>
      <NavigationButton
        href="/"
        mb={{ base: 4, md: 2 }}
        colorScheme="orange"
        variant="outline"
        size={{ base: "sm", md: "md" }}
        aria-label="Back to Campaigns"
      >
        Back to Campaigns
      </NavigationButton>
      <Heading
        as="h1"
        size="lg"
        mb={4}
        color={mainColorText}
        mx="auto"
        textAlign="center"
        aria-live="polite"
      >
        Edit Campaign with ID: {id}
      </Heading>
      <CampaignForm initialValues={campaign} />
    </>
  );
};
