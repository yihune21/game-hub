import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="80px"></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
