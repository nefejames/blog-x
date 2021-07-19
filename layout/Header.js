import { Center, Heading } from "@chakra-ui/react";
export default function Header() {
  return (
    <Center
      fontFamily="Montserrat"
      fontSize={["xl", "2xl", "3xl"]}
      my={[8, 16]}
    >
      <Heading as="h1">BlogX</Heading>
    </Center>
  );
}
