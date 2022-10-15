import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import EarthIcon from "../common/icons/EarthIcon";

function JobCard({
  companyName,
  companyIcon,
  jobTitle,
  salaryLower,
  salaryUpper,
  remote = false,
  hot = false,
  pinned = false,
  bookmark = false,
  isFullTime = false
}) {
  return (
    <Box
      borderRadius="1rem"
      borderWidth="2px"
      borderColor="purple.300"
      p="1rem"
      boxShadow="lg"
      _hover={{
        cursor: "pointer"
      }}
    >
      <Flex gap="1rem">
        <Box flexShrink="1">
          {/* Image */}
          <Image w="2rem" src={companyIcon} />
        </Box>
        <VStack spacing="0.25rem" alignItems="left" flexGrow="1">
          <Box>
            <Text fontSize="sm">{companyName}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="600">
              {jobTitle}
            </Text>
          </Box>
          <Box>
            <Text fontSize="sm">
              ${salaryLower}k - ${salaryUpper}k
            </Text>
          </Box>
        </VStack>
        <VStack>
          <HStack>
            {hot && (
              <Box>
                <EarthIcon />
              </Box>
            )}
            {remote && (
              <Box>
                <EarthIcon />
              </Box>
            )}
            <Box>
              <EarthIcon />
            </Box>
            <Box>
              <EarthIcon />
            </Box>
          </HStack>
          <Spacer />
          <Box alignSelf="end">
            <Text textAlign="right" fontSize="sm">
              Full-Time
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default JobCard;
