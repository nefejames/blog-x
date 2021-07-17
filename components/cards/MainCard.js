import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";

import team1 from "@public/images/team1.jpg";
export default function MainCard({ title, img, imgAlt, meta }) {
  return (
    <Box p={16}>
      <Image src={team1} alt="" width={250} height={150} />
      <Box>
        <Box>
          <Heading as="h2" size="md" mb={-10}>
            Heading
          </Heading>
          <Text color="#888">Meta</Text>
        </Box>

        <Text>
          You know what? It is beets. I've crashed into a beet truck. Forget the
          fat lady! You're obsessed with the fat lady! Drive us out of here!
          Hey, take a look at the earthlings. Goodbye! Hey, take a look at the
          earthlings. Goodbye! Hey, take a look at the earthlings. Goodbye!
        </Text>
      </Box>
    </Box>
  );
}
