import axios from "axios";
import { useQuery } from "react-query";

export const GetApiHome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/api/manga/popular/1")
        .then((res) => res.data.manga_list)
        .catch((err) => console.log(err)),
  });

  return { data, isLoading };
};

const getApiDetail = () => {
  const {} = useQuery({
    queryKey: ["detail"],
  });
};
