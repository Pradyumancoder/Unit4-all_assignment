import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;
