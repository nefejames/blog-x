import Image from "next/image";
import Link from "next/link";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";

export default function MainCard({ id, title, copy, img, imgAlt, meta }) {
  return (
    <Stack direction={["column", "column", "row"]} spacing={3}>
      <Box position="relative" width={["100%", null, "400px"]} height="300px">
        <Image
          src={img}
          alt={imgAlt}
          objectFit="cover"
          placeholder="blur"
          layout="fill"
        />
      </Box>

      <Box width={[null, "60%"]}>
        <Box>
          <Link href={`/posts/${id}`} passHref>
            <Heading as="a" size="md" fontSize={["2xl", "3xl"]}>
              {title}
            </Heading>
          </Link>
          <Text color="#888">{meta}</Text>
        </Box>

        <Text fontFamily="Open Sans" mt={4} lineHeight="7">
          {copy}
        </Text>
      </Box>
    </Stack>
  );
}
