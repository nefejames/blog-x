import Head from "next/head";
import Posts from "@components/Posts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlogX</title>
      </Head>

      <Posts />
    </div>
  );
}
