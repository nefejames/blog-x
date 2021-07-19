import { Box } from "@chakra-ui/layout";

export default function Layout({ children }) {
  return (
    <Box maxW="1000px" w="full" mx="auto" px={4} mt={[2, 4, 6]} mb={[2, 4, 12]}>
      {children}
    </Box>
  );
}
