import { VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";
import data from "data";

const posts = data();
export default function Posts() {
  return (
    <VStack spacing={16}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </VStack>
  );
}
