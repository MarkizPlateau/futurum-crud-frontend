import CampaignForm from "@/components/CampaignForm/CampaignForm";
import { MIN_BID } from "@/constants/constants";
import { Status } from "@/types/campaign";

export const NewCampaign = () => {
  const defaultValues = {
    name: "",
    keywords: [],
    picture: undefined,
    bid: MIN_BID,
    fund: 0,
    status: Status.ON,
    town: undefined,
    radius: 1,
  };
  return <CampaignForm defaultValues={defaultValues} />;
};
