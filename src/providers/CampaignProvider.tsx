import React, {
  createContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import { CAMPAIGN_BUDGET } from "@/constants/constants";
import type { Campaign } from "@/types/campaign";

export type CampaignAction =
  | { type: "SET_CAMPAIGNS"; payload: Campaign[] }
  | { type: "ADD_CAMPAIGN"; payload: Campaign }
  | { type: "EDIT_CAMPAIGN"; payload: Campaign }
  | { type: "REMOVE_CAMPAIGN"; payload: string }
  | { type: "SET_BUDGET"; payload: number };

export interface CampaignState {
  campaigns: Campaign[];
  campaignBudget: number;
}

const initialState: CampaignState = {
  campaigns: [],
  campaignBudget: CAMPAIGN_BUDGET,
};

const campaignReducer = (
  state: CampaignState,
  action: CampaignAction
): CampaignState => {
  switch (action.type) {
    case "SET_CAMPAIGNS": {
      localStorage.setItem("campaigns", JSON.stringify(action.payload));
      return {
        ...state,
        campaigns: action.payload,
      };
    }

    case "ADD_CAMPAIGN": {
      const updatedCampaigns =
        state.campaigns.length > 0
          ? [...state.campaigns, action.payload]
          : [action.payload];
      localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
      const fundSum = updatedCampaigns.reduce(
        (acc, campaign) => acc + campaign.fund,
        0
      );

      const newBudget = state.campaignBudget - fundSum;
      localStorage.setItem("campaignBudget", JSON.stringify(newBudget));
      return {
        ...state,
        campaigns: updatedCampaigns,
        campaignBudget: newBudget,
      };
    }

    case "EDIT_CAMPAIGN": {
      const updatedCampaigns = state.campaigns.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
      localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
      const fundSum = updatedCampaigns.reduce(
        (acc, campaign) => acc + campaign.fund,
        0
      );
      const newBudget = CAMPAIGN_BUDGET - fundSum;
      localStorage.setItem("campaignBudget", JSON.stringify(newBudget));
      return {
        ...state,
        campaigns: updatedCampaigns,
        campaignBudget: newBudget,
      };
    }

    case "REMOVE_CAMPAIGN": {
      const updatedCampaigns = state.campaigns.filter(
        (c) => c.id !== action.payload
      );
      localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
      const fundSum = updatedCampaigns.reduce(
        (acc, campaign) => acc + campaign.fund,
        0
      );
      const newBudget = CAMPAIGN_BUDGET - fundSum;
      localStorage.setItem("campaignBudget", JSON.stringify(newBudget));
      return {
        ...state,
        campaigns: updatedCampaigns,
        campaignBudget: newBudget,
      };
    }

    case "SET_BUDGET":
      localStorage.setItem("campaignBudget", JSON.stringify(action.payload));
      return { ...state, campaignBudget: action.payload };
    default:
      return state;
  }
};

export const CampaignContext = createContext<{
  state: CampaignState;
  dispatch: React.Dispatch<CampaignAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CampaignProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(campaignReducer, initialState);

  useEffect(() => {
    const storedCampaigns = localStorage.getItem("campaigns");
    const storedBudget = localStorage.getItem("campaignBudget");
    console.log("Initializing CampaignProvider", storedCampaigns, storedBudget);
    if (storedCampaigns) {
      dispatch({ type: "SET_CAMPAIGNS", payload: JSON.parse(storedCampaigns) });
    } else {
      dispatch({ type: "SET_CAMPAIGNS", payload: [] });
    }
    if (storedBudget) {
      dispatch({ type: "SET_BUDGET", payload: JSON.parse(storedBudget) });
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: CAMPAIGN_BUDGET,
      });
    }
  }, []);
  return (
    <CampaignContext.Provider value={{ state, dispatch }}>
      {children}
    </CampaignContext.Provider>
  );
};
