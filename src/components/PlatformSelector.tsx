import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../services/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatfrom: (platform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onSelectPlatfrom, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || "Platforms"}
      </MenuButton>
      {data.map((platform) => (
        <MenuList onClick={() => onSelectPlatfrom(platform)} key={platform.id}>
          {platform.name}
        </MenuList>
      ))}
    </Menu>
  );
};

export default PlatformSelector;
