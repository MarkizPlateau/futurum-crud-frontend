import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import {
  campaignSchema,
  type CampaignFormData,
} from "@/components/CampaignForm/schema";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import {
  CURRENCY,
  KEYWORD_SUGGESTIONS,
  MIN_BID,
  MIN_FUND,
  TOWN_OPTIONS,
} from "@/constants/constants";
import { Status } from "@/types/campaign";
import CampaignCard from "../CampaignCard/CampaignCard";

export const CampaignForm = ({
  defaultValues,
}: {
  defaultValues?: Partial<CampaignFormData>;
}) => {
  const [keywords, setKeywords] = useState<string[]>(
    defaultValues?.keywords || []
  );
  const [keywordInput, setKeywordInput] = useState("");
  const [submittedData, setSubmittedData] = useState<CampaignFormData | null>(
    null
  );
  const [campaignList, setCampaignList] = useState<CampaignFormData[]>([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      name: "",
      keywords: [],
      picture: undefined,
      bid: MIN_BID,
      fund: MIN_FUND,
      status: Status.ON,
      town: undefined,
      radius: 1,
      ...defaultValues,
    },
  });

  const handleSave = (data: CampaignFormData) => {
    const completeData: CampaignFormData = {
      ...data,
      keywords,
      id: defaultValues?.id || uuidv4(),
    };
    setSubmittedData(completeData);
    localStorage.setItem(
      "campaigns",
      JSON.stringify([...campaignList, completeData])
    );
    reset();
    setKeywords([]);
  };

  useEffect(() => {
    setValue("keywords", keywords);
  }, [keywords, setValue]);

  useEffect(() => {
    const stored = localStorage.getItem("campaigns");
    const campaigns = stored ? JSON.parse(stored) : [];
    setCampaignList(campaigns);
  }, [defaultValues, reset]);

  const addKeyword = (kw: string) => {
    kw = kw.trim();
    if (kw && !keywords.includes(kw)) {
      setKeywords([...keywords, kw]);
      setKeywordInput("");
    }
  };

  return (
    <Box maxW="500px" mx="auto" mt={8}>
      <form onSubmit={handleSubmit(handleSave)}>
        <Stack spacing={4}>
          <FormControl isInvalid={!!errors.name} isRequired>
            <FormLabel>Campaign name</FormLabel>
            <Input placeholder="Name" {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired={keywords.length > 0 ? false : true}>
            <FormLabel>Keywords</FormLabel>
            <HStack flexWrap="wrap" mb={2}>
              {keywords.map((kw) => (
                <Tag
                  key={kw}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                  my="1"
                  py="1"
                >
                  <TagLabel>{kw}</TagLabel>
                  <TagCloseButton
                    onClick={() =>
                      setKeywords(keywords.filter((k) => k !== kw))
                    }
                  />
                </Tag>
              ))}
            </HStack>

            <HStack>
              <Input
                placeholder="Add keyword..."
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addKeyword(keywordInput);
                  }
                }}
              />
              <Button
                onClick={() => addKeyword(keywordInput)}
                colorScheme="blue"
                variant="outline"
                px={4}
              >
                +
              </Button>
            </HStack>

            {keywordInput && (
              <Box
                mt={2}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="sm"
                bg="white"
                maxH="150px"
                overflowY="auto"
                zIndex={10}
                position="relative"
              >
                {KEYWORD_SUGGESTIONS.filter(
                  (kw) =>
                    kw.toLowerCase().includes(keywordInput.toLowerCase()) &&
                    !keywords.includes(kw)
                ).map((kw) => (
                  <Box
                    key={kw}
                    px={3}
                    py={1}
                    _dark={{
                      bg: "#374767",
                      color: "customWhite",
                      _hover: { bg: "#3182ce" },
                    }}
                    cursor="pointer"
                    _hover={{ bg: "gray.100" }}
                    aria-label={`Add keyword: ${kw}`}
                    onClick={() => addKeyword(kw)}
                  >
                    {kw}
                  </Box>
                ))}
              </Box>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.picture}>
            <FormLabel>You can add an optional campaign photo</FormLabel>
            <Input
              placeholder="Picture"
              {...register("picture", {
                setValueAs: (value) => (value === "" ? undefined : value),
              })}
            />
            <FormErrorMessage>{errors.picture?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.bid} isRequired>
            <FormLabel>Bid (PLN)</FormLabel>
            <Input
              type="number"
              min={MIN_BID}
              step={0.01}
              {...register("bid", { valueAsNumber: true })}
            />
            <FormErrorMessage>{errors.bid?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.fund} isRequired>
            <FormLabel>Campaign budget (`${CURRENCY}`)</FormLabel>
            <Input
              type="number"
              min={MIN_FUND}
              step={0.01}
              {...register("fund", { valueAsNumber: true })}
            />
            <FormErrorMessage>{errors.fund?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.status} isRequired>
            <FormLabel>Status</FormLabel>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <Switch
                  isChecked={field.value === "on"}
                  onChange={(e) =>
                    field.onChange(e.target.checked ? "on" : "off")
                  }
                />
              )}
            />
            <FormErrorMessage>{errors.status?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.town}>
            <FormLabel>Miasto</FormLabel>
            <Select
              placeholder="Select a city"
              {...register("town", {
                setValueAs: (value) => (value === "" ? undefined : value),
              })}
            >
              {TOWN_OPTIONS.map((town) => (
                <option key={town} value={town}>
                  {town}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.town?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.radius} isRequired>
            <FormLabel>Promień (km)</FormLabel>
            <Input
              type="number"
              min={1}
              step={1}
              {...register("radius", { valueAsNumber: true })}
            />
            <FormErrorMessage>{errors.radius?.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
            Save the campaign
          </Button>
        </Stack>
      </form>
      {submittedData && (
        <>
          <Alert
            borderRadius="base"
            colorScheme="green"
            mt="3"
            status="success"
            aria-live="polite"
          >
            <AlertIcon />
            <Box>
              <AlertTitle mr="2">
                {"Congratulations, you have successfully added a campaign."}
              </AlertTitle>
            </Box>
          </Alert>
          <CampaignCard campaign={submittedData} my="2" />
        </>
      )}
    </Box>
  );
};

export default CampaignForm;
