import { TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Button
} from "@chakra-ui/react";
import CodeIcon from "../common/icons/CodeIcon";
import EarthIcon from "../common/icons/EarthIcon";

import FilterIcon from "../common/icons/FilterIcon";
import JobTypeButton from "./JobTypeButton";

function SearchSection() {
  return (
    <Container pt="5rem" pb="1rem">
      <Flex direction="column" gap="1.5rem" alignItems="center">
        <Heading as="h1" size="4xl" justifySelf="center">
          Find The Right
        </Heading>
        <Flex gap="1rem">
          <Heading
            bgGradient="linear(to-r, purple.500, blue.500)"
            as="h1"
            size="4xl"
            bgClip="text"
            justifySelf="center"
          >
            Four-Day
          </Heading>
          <Heading as="h1" size="4xl" justifySelf="center">
            Week
          </Heading>
        </Flex>
        <Heading as="h1" size="4xl" justifySelf="center">
          Job
        </Heading>
      </Flex>
      <Box pt="2rem">
        <Flex gap="1rem">
          <Input
            borderRadius="0.75rem"
            boxShadow="2xl"
            placeholder="Type job title or keyword"
          />
          <Button
            py="1rem"
            borderRadius="0.75rem"
            color="gray.700"
            variant="ghost"
            background="gray.200"
          >
            <FilterIcon />
          </Button>
        </Flex>
        <Flex mt="1rem" gap="1rem" justifyContent="space-between">
          <JobTypeButton icon={<EarthIcon />} text="Remote" />
          <JobTypeButton icon={<CodeIcon />} text="Tech" />
          <JobTypeButton
            icon={<TriangleUpIcon color="orange.400" />}
            text="Marketing"
          />
        </Flex>
      </Box>
    </Container>
  );
}

export default SearchSection;
