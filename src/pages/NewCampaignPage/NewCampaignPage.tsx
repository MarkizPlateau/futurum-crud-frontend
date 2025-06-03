import { NavigationButton } from "@/components";
import CampaignForm from "@/components/CampaignForm/CampaignForm";
import { useColorMainText } from "@/hooks";
import { Heading } from "@chakra-ui/react";

export const NewCampaign = () => {
  const mainColorText = useColorMainText();
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
        Add New Campaign
      </Heading>
      <CampaignForm />
    </>
  );
};
