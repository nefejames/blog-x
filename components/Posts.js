import { VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";
import data from "data";

export default function Posts() {
  return (
    <VStack spacing={16}>
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </VStack>
  );
}
