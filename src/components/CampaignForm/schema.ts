import { MIN_BID, MIN_FUND } from "@/constants/constants";
import { Status, Town } from "@/types/campaign";
import { z } from "zod";

export const campaignSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Campaign name is required"),
  picture: z
    .string()
    .regex(
      /^(https?:\/\/)([^\s]+)\.(jpg|jpeg|png|gif)$/i,
      "Please enter a valid URL (np. https://example.com/picture.jpg) that ends with .jpg, .jpeg, .png, or .gif"
    )
    .optional(),
  keywords: z.array(z.string()).min(1, "Please enter at least one keyword"),
  bid: z.number().min(MIN_BID, `The minimum stake is ${MIN_BID} PLN`),
  fund: z
    .number()
    .min(MIN_FUND, `The minimum Fun is ${MIN_BID} ten times the min bid`),
  status: z.nativeEnum(Status, { required_error: "Status is required" }),
  town: z
    .string()
    .refine((val) => val === "" || Object.values(Town).includes(val as Town), {
      message: "Invalid city",
    })
    .optional(),
  radius: z.number().min(1, "Radius must be greater than 0 km"),
});

export type CampaignFormData = z.infer<typeof campaignSchema>;
