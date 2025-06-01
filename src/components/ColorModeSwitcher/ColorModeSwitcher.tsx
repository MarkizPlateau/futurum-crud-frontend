import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightMode = colorMode === "light";
  return (
    <IconButton
      aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
      {...(!lightMode && { border: "3px solid white", borderRadius: "md" })}
      icon={lightMode ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      colorScheme="orange"
    />
  );
};

export default ColorModeSwitcher;
