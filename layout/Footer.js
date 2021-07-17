import { Center, HStack } from "@chakra-ui/react";
import {
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiInstagram,
  SiWhatsapp,
} from "react-icons/si";
export default function Footer() {
  return (
    <Center>
      <HStack spacing={12}>
        <SiFacebook color="#333" size="1.3em" />
        <SiTwitter color="#333" size="1.3em" />
        <SiLinkedin color="#333" size="1.3em" />
        <SiInstagram color="#333" size="1.3em" />
        <SiWhatsapp color="#333" size="1.3em" />
      </HStack>
    </Center>
  );
}
