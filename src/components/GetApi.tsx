import axios from "axios";
import { useQuery } from "react-query";

export const GetApiHome = (endpoint: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["home"],
    queryFn: () =>
      axios
        .get(endpoint)
        .then((res) => res.data.manga_list)
        .catch((err) => console.log(err)),
  });

  return { data, isLoading, refetch };
};

export const getApiDetail = (endpoint: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["detail"],
    queryFn: () =>
      axios
        .get(endpoint)
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  return { data, isLoading };
};

export const getApiSearch = (endpoint: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () =>
      axios
        .get(endpoint)
        .then((res) => res.data.manga_list)
        .catch((err) => console.log(err)),
  });

  return { data, isLoading };
};

export const getApiRecommended = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["recommended"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/api/recommended")
        .then((res) => res.data.manga_list)
        .catch((err) => console.log(err)),
  });

  return { data, isLoading };
};
