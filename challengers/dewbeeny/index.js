import useQuery from "./UseQuery.js";

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// API 호출 예제
const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

const Post = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData(apiURL),
  });
};
