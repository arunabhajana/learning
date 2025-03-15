import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const createPost = async (newPost) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
  return response.data;
};

const MutatePost = () => {
  const queryClient = useQueryClient(); // Access cached queries
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // Refresh posts list
    },
  });

  const handleAddPost = () => {
    mutation.mutate({ title: "New Post", body: "This is a new post" });
  };

  return (
    <div>
      <button onClick={handleAddPost}>Add Post</button>
      {mutation.isLoading && <p>Adding post...</p>}
      {mutation.error && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default MutatePost;
