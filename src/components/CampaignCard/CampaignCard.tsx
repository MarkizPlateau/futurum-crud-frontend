import {
  Box,
  Heading,
  Text,
  Image,
  Tag,
  TagLabel,
  Wrap,
  Stack,
  type BoxProps,
  useColorModeValue,
  VStack,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import { textOrange } from "@/styles/styles.ts";
import { Campaign, Status } from "@/types/campaign";
import { CampaignCardStatus } from "../CampaignCardStatus/CampaignCardStatus";
import { LuCirclePlus } from "react-icons/lu";
import { useCampaignContext } from "@/hooks";

interface CampaignCardProps extends BoxProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, ...props }) => {
  const { dispatch } = useCampaignContext();

  const handleDeleteCampaign = (id: string) => {
    dispatch({ type: "REMOVE_CAMPAIGN", payload: id });
  };
  const isActive = campaign.status === Status.ON;
  const cardBackgroundColor = useColorModeValue("customWhite", "#252d3e");
  const keywordsTextColor = useColorModeValue("main", "customWhite");
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="sm"
      p={4}
      w="full"
      bg={cardBackgroundColor}
      {...props}
    >
      <Stack spacing={2}>
        <Flex justifyContent="space-between">
          <Heading size="md" as="h3">
            Campaign name:{" "}
            <Text as="span" ml="2" {...textOrange}>
              {campaign.name}
            </Text>
          </Heading>
          <Button
            as="a"
            href={`${campaign.id}/campaign`}
            colorScheme="orange"
            alignItems="center"
            gap="2"
          >
            Edit
            <Icon as={LuCirclePlus} boxSize={5} mt="1" />
          </Button>
        </Flex>

        {campaign.picture && (
          <Image
            src={campaign.picture}
            alt={campaign.name}
            maxH="200px"
            objectFit="cover"
            borderRadius="md"
          />
        )}

        <Box>
          <Text fontWeight="bold" color={keywordsTextColor} mb="2">
            Keywords:
          </Text>
          <Wrap>
            {campaign.keywords.map((kw) => (
              <Tag
                key={kw}
                colorScheme="blue"
                borderRadius="full"
                border="1px"
                borderColor="pink"
              >
                <TagLabel>{kw}</TagLabel>
              </Tag>
            ))}
          </Wrap>
        </Box>

        <Flex justifyContent="space-between">
          <VStack className="campaign-card-details" alignItems="flex-start">
            <Text>
              <strong>Bid:</strong> {campaign.bid} PLN
            </Text>
            <Text>
              <strong>Fund:</strong> {campaign.fund} PLN
            </Text>
            <Text>
              <strong>Status:</strong> {campaign.status}
            </Text>
            <Text>
              <strong>Town:</strong> {campaign?.town ?? "Not specified"}
            </Text>
            <Text>
              <strong>Radius:</strong> {campaign.radius} km
            </Text>
          </VStack>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 4 }}
            alignSelf="flex-end"
            alignItems="flex-end"
          >
            <CampaignCardStatus isActive={isActive} />
            <Button
              colorScheme="red"
              size="sm"
              maxWidth="min-content"
              onClick={() => {
                handleDeleteCampaign(campaign.id);
              }}
            >
              Delete
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CampaignCard;
