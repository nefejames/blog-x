import Image from "next/image";
import Link from "next/link";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";

export default function MainCard({ title, copy, img, imgAlt, meta }) {
  return (
    <Stack direction={["column", "column", "row"]} spacing={3}>
      <Box width="full">
        <Image src={img} alt={imgAlt} objectFit="cover" placeholder="blur" />
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
          {copy}
        </Text>
      </Box>
    </Stack>
  );
}
