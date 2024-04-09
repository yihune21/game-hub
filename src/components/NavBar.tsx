import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" borderRadius="80px"></Image>
        <Text fontSize="2xl">My App</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
