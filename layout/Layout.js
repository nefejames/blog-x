import { Box } from "@chakra-ui/layout";

export default function Layout({ children }) {
  return (
    <Box maxW="1100px" w="full" mx="auto" px={2}>
      {children}
    </Box>
  );
}
