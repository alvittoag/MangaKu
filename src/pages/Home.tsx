import { useState } from "react";
import { useIsFetching } from "react-query";
import { GetApiHome } from "../components/GetApi";
import HomeMangga from "../components/HomeMangga";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { MangaAllPage } from "../Model";

interface Home {
  data: MangaAllPage;
  isLoading: boolean;
  refetch: () => void;
}

interface Pagination {
  selected: number;
}

const Home = () => {
  const [popularcount, setPopularcount] = useState<number>(0);

  const { data, isLoading, refetch }: Home = GetApiHome(
    `http://localhost:3000/api/manga/popular/${popularcount}`
  );
  const isFetching = useIsFetching();
  const isFetchingPagination = useIsFetching(["home"]);
  console.log(isFetching);
  const handlePagination = (data: Pagination) => {
    setPopularcount(data.selected);
    refetch();
    isFetching;
    isFetchingPagination;
  };

  return (
    <div className="px-5 py-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between">
            <h1 className="text-xl underline underline-offset-8">
              Popular Mangga
            </h1>

            <Search />
          </div>

          <div className="py-10 grid grid-cols-4 gap-10 items-start">
            {data &&
              Object.values(data)?.map((manga: MangaAllPage) => (
                <HomeMangga manga={manga} key={manga.endpoint} />
              ))}
          </div>

          <Pagination handlePagination={handlePagination} />
        </>
      )}
    </div>
  );
};

export default Home;
