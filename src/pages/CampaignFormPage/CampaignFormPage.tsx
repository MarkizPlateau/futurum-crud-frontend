import { Heading } from "@chakra-ui/react";

interface CampaignFormPageProps {
  mode: "create" | "edit";
}

const CampaignFormPage: React.FC<CampaignFormPageProps> = ({ mode }) => {
  return (
    <Heading mb={4}>
      {mode === "create" ? "Create Campaign" : "Edit Campaign"}
    </Heading>
  );
};

export default CampaignFormPage;
