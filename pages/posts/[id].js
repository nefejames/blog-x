import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Image as ChakraImage,
  VStack,
} from "@chakra-ui/react";
import one from "@public/images/one.png";
export default function Post({ title, meta, copy, imgAlt, img }) {
  return (
    <Box as="main">
      <Head>
        <title>Post -</title>
      </Head>
      <Box textAlign="center">
        <Heading mb={2}>How to be more produtive</Heading>
        <Text color="blackAlpha.600">19 May, 2021</Text>
      </Box>
      <Box bg="red" position="relative" height="300px" my={[4, 8]}>
        <Image src={one} alt="" layout="fill" objectFit="contain" />
      </Box>

      <Box>
        <VStack spacing={6}>
          <Text lineHeight="7">
            God help us, we&apos;re in the hands of engineers. Jaguar shark! So
            tell me - does it really exist? Yeah, but your scientists were so
            preoccupied with whether or not they could, they didn&apos;t stop to
            think if they should. My dad once told me, laugh and the world
            laughs with you, Cry, and I&apos;ll give you something to cry about
            you little bastard!
          </Text>
          <Text lineHeight="7" fontFamily="Open Sans">
            Hey, take a look at the earthlings. Goodbye! Eventually, you do plan
            to have dinosaurs on your dinosaur tour, right? What do they got in
            there? King Kong? Jaguar shark! So tell me - does it really exist?
            Must go faster... go, go, go, go, go! Eventually, you do plan to
            have dinosaurs on your dinosaur tour, right?
          </Text>
          <Text lineHeight="7" fontFamily="Open Sans">
            Must go faster. I was part of something special. Forget the fat
            lady! You&apos;re obsessed with the fat lady! Drive us out of here!
            Yes, Yes, without the oops! You&apos;re a very talented young man,
            with your own clever thoughts and ideas. Do you need a manager?
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
