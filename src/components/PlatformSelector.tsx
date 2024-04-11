import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../services/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        platforms
      </MenuButton>
      {data.map((platform) => (
        <MenuList key={platform.id}> {platform.name}</MenuList>
      ))}
    </Menu>
  );
};

export default PlatformSelector;
