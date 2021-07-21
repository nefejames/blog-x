import Head from "next/head";
import Image from "next/image";

import {
  Box,
  Heading,
  Text,
  Image as ChakraImage,
  VStack,
} from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <Box as="main">
      <Head>
        <title>Post - {post.id}</title>
      </Head>
      <Box textAlign="center">
        <Heading mb={2}>{post.title}</Heading>
        <Text color="blackAlpha.600">{post.meta}</Text>
      </Box>
      <Box bg="red" position="relative" height="300px" my={[4, 8]}>
        <Image
          src={post.img}
          alt={post.imgAlt}
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Box>
        <Text lineHeight="7" fontFamily="Open Sans">
          {post.copy}
        </Text>
      </Box>
    </Box>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  const post = data.filter((i) => i.id == params.id);

  return {
    props: {
      post: post[0],
    },
  };
};
