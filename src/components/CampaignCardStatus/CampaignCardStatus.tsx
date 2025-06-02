import type { JSX } from "react";
import { Flex, Icon, Text, type TextProps } from "@chakra-ui/react";
import { MdCheckCircle, MdCancel } from "react-icons/md";

export type CampaignCardStatusType = {
  isActive: boolean;
} & TextProps;

export const CampaignCardStatus = ({
  isActive,
  ...props
}: CampaignCardStatusType): JSX.Element => {
  return (
    <Flex alignItems="center" justifyContent="space-between" {...props} gap="1">
      <Text textAlign="end">
        Campaign status:{" "}
        <Text as="span" color={isActive ? "green.400" : "red.500"}>
          {isActive ? "Active" : "Inactive"}
        </Text>
      </Text>
      {isActive ? (
        <Icon as={MdCheckCircle} color="green.400" aria-label="Active status" />
      ) : (
        <Icon as={MdCancel} color="red.500" aria-label="Inactive status" />
      )}
    </Flex>
  );
};
