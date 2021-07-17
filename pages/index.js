import Head from "next/head";
import { Text } from "@chakra-ui/react";
import Posts from "@components/Posts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Chakra UI Template</title>
      </Head>

      <Posts />
    </div>
  );
}
