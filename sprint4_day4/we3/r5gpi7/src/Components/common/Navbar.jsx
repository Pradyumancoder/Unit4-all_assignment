import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import BrandIcon from "./icons/4DIcon";

function Navbar() {
  return (
    <Box>
      <Flex gap="1rem" p="1rem" borderBottom="1px" borderColor="gray.200">
        <BrandIcon />
        <Spacer />
        <Button size="md" variant="ghost">
          Sign In
        </Button>
        <Button size="md" variant="outline">
          Sign Up
        </Button>
        <Button size="md" variant="solid">
          Post a Job 🚀
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
