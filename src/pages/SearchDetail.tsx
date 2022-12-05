import { useParams } from "react-router-dom";
import { getApiSearch } from "../components/GetApi";
import Loading from "../components/Loading";
import SearchManga from "../components/SearchManga";
import { MangaAllPage } from "../Model";

const SearchDetail = () => {
  const { key } = useParams();

  interface Search {
    data: MangaAllPage;
    isLoading: boolean;
  }

  const { data, isLoading }: Search = getApiSearch(
    `http://localhost:3000/api/search/${key}`
  );
  console.log(data);
  return (
    <div className="px-14 py-10 mt-[5rem]">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-xl underline underline-offset-8">
            Your search results
          </h1>

          <div className="py-10 mt-8 grid grid-cols-4 gap-10 items-start">
            {data &&
              Object.values(data)?.map((manga: MangaAllPage) => (
                <SearchManga manga={manga} key={manga.endpoint} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDetail;
