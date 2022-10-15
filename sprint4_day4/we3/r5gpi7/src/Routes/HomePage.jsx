import { Box } from "@chakra-ui/react";
import Navbar from "../Components/common/Navbar";
import Jobs from "../Components/Home/Jobs";
import SearchSection from "../Components/Home/SearchSection";

function HomePage() {
  return (
    <Box>
      <Navbar />
      <SearchSection />
      <Jobs />
    </Box>
  );
}

export default HomePage;
