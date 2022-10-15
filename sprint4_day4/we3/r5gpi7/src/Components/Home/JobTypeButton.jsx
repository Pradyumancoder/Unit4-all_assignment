import { Button } from "@chakra-ui/react";

function JobTypeButton({ text, icon }) {
  return (
    <Button
      variant="outline"
      width="100%"
      px="2rem"
      borderColor="purple.900"
      borderWidth="2px"
      color="gray.200"
      bg="purple.500"
      leftIcon={icon}
    >
      {text}
    </Button>
  );
}

export default JobTypeButton;
