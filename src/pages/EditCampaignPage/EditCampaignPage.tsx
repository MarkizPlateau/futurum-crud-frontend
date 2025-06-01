import CampaignForm from "@/components/CampaignForm/CampaignForm";
import { MIN_BID } from "@/constants/constants";
import { useColorMainText } from "@/hooks";
import { Status } from "@/types/campaign";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const EditCampaignPage = () => {
  const { id } = useParams<{ id: string }>();
  const mainColorText = useColorMainText();
  const defaultValues = {
    id: id,
    name: "",
    keywords: [],
    picture: undefined,
    bid: MIN_BID,
    fund: 0,
    status: Status.ON,
    town: undefined,
    radius: 1,
  };
  return (
    <>
      <Heading
        as="h1"
        size="lg"
        mb={4}
        color={mainColorText}
        mx="auto"
        textAlign="center"
      >
        Edit Campaign with ID: {id}
      </Heading>
      <CampaignForm defaultValues={defaultValues} />
    </>
  );
};
