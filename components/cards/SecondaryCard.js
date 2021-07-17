import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";

import one from "@public/images/one.png";
export default function SecondaryCard({ title, img, imgAlt, meta }) {
  return (
    <Box p={16}>
      <Image src={one} alt="" width={250} height={150} />

      <Heading as="h4" fontWeight="normal" size="md" mb={-10}>
        Heading
      </Heading>
    </Box>
  );
}
