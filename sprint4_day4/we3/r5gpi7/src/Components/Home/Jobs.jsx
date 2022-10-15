import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import JobCard from "./JobCard";

function Jobs() {
  return (
    <Container pt="5rem" pb="1rem">
      <Box>
        <Heading>
          <Text color="purple.500" as="span">
            Recent
          </Text>{" "}
          Jobs
        </Heading>
      </Box>
      <VStack mt="1rem" alignItems="left" gap="1rem">
        <JobCard
          companyName={"Talewind"}
          companyIcon="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
          jobTitle="Lead Producer"
          salaryLower="50"
          salaryUpper="65"
          remote={true}
          hot={true}
          pinned={true}
          bookmark={false}
        />
        <JobCard
          companyName={"Talewind"}
          companyIcon="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
          jobTitle="Lead Game Developer"
          salaryLower="40"
          salaryUpper="50"
          remote={true}
          hot={true}
          pinned={true}
          bookmark={false}
        />
        <JobCard
          companyName={"Talewind"}
          companyIcon="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
          jobTitle="Lead Producer"
          salaryLower="50"
          salaryUpper="65"
          remote={true}
          hot={true}
          pinned={true}
          bookmark={false}
        />
        <JobCard
          companyName={"Talewind"}
          companyIcon="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
          jobTitle="Lead Producer"
          salaryLower="50"
          salaryUpper="65"
          remote={true}
          hot={true}
          pinned={true}
          bookmark={false}
        />
        <JobCard
          companyName={"Talewind"}
          companyIcon="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75"
          jobTitle="Lead Producer"
          salaryLower="50"
          salaryUpper="65"
          remote={true}
          hot={true}
          pinned={true}
          bookmark={false}
        />
      </VStack>
    </Container>
  );
}

export default Jobs;
