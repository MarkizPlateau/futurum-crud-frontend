import { MIN_BID, MIN_FUND } from "@/constants/constants";
import { Campaign, Status, Town } from "@/types/campaign";
import { z } from "zod";

export type schemaType = {
  availableBudget: number;
  defaultValues: Partial<Campaign>;
};

export const campaignSchema = ({
  availableBudget,
  defaultValues,
}: schemaType) =>
  z
    .object({
      name: z
        .string()
        .min(3, "Campaign name must be at least 3 characters")
        .regex(
          /^[\p{L}\d\s-]{3,}$/u,
          "Campaign name must contain only letters, numbers, spaces or dashes"
        ),
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
        .min(MIN_FUND, `The minimum fund must be at least ${MIN_FUND} PLN`),
      status: z.nativeEnum(Status, { required_error: "Status is required" }),
      town: z
        .string()
        .refine(
          (val) => val === "" || Object.values(Town).includes(val as Town),
          {
            message: "Invalid city",
          }
        )
        .optional(),
      radius: z.number().min(1, "Radius must be greater than 0 km"),
    })
    .superRefine((data, ctx) => {
      if (
        data.fund >
        (availableBudget > MIN_FUND
          ? availableBudget + (defaultValues.fund || 0)
          : availableBudget)
      ) {
        ctx.addIssue({
          path: ["fund"],
          code: z.ZodIssueCode.custom,
          message: `Fund cannot exceed available budget (${
            availableBudget > MIN_FUND
              ? availableBudget + (defaultValues.fund || 0)
              : availableBudget
          })`,
        });
      }

      if (data.fund < data.bid * 10) {
        ctx.addIssue({
          path: ["fund"],
          code: z.ZodIssueCode.custom,
          message: `Fund must be at least 10 times the bid, min fund(${
            data.bid * 10
          })`,
        });
        ctx.addIssue({
          path: ["bid"],
          code: z.ZodIssueCode.custom,
          message: `Bid cannot be more than fund divided by 10, max bid: (${Math.floor(
            data.fund / 10
          )})`,
        });
      }
    });
