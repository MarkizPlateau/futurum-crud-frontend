import { useColorModeValue } from "@chakra-ui/react";

export const useColorMainText = (): "main" | "customWhite" => {
  const text = useColorModeValue("main", "customWhite");
  return text;
};
export default useColorMainText;
