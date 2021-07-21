import { Center, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Center
      fontFamily="Montserrat"
      fontSize={["xl", "2xl", "3xl"]}
      my={[8, 16]}
    >
      <Link href="/" passHref>
        <Heading as="a">BlogX</Heading>
      </Link>
    </Center>
  );
}
