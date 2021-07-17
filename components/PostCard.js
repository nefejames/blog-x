import Image from "next/image";
import Link from "next/link";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";

export default function MainCard({ title, img, imgAlt, meta }) {
  return (
    <Stack direction={["column", "column", "row"]} spacing={3}>
      <Box width="full">
        <Image src={img} alt={imgAlt} objectFit="contain" placeholder="blur" />
      </Box>
      <Box>
        <Box>
          <Link href="#" passHref>
            <Heading as="a" size="md" fontSize={["2xl", "3xl"]}>
              {title}
            </Heading>
          </Link>
          <Text color="#888">{meta}</Text>
        </Box>

        <Text fontFamily="Open Sans" mt={4}>
          You know what? It is beets. I&apos;ve crashed into a beet truck.
          Forget the fat lady! You&apos;re obsessed with the fat lady! Drive us
          out of here! Hey, take a look at the earthlings. Goodbye! Hey, take a
          look at the earthlings. Goodbye! Hey, take a look at the earthlings.
          Goodbye!
        </Text>
      </Box>
    </Stack>
  );
}
