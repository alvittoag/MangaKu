import { useParams } from "react-router-dom";
import { getApiSearch } from "../components/GetApi";
import SearchManga from "../components/SearchManga";
import { home } from "../Model";

const SearchDetail = () => {
  const { key } = useParams();

  interface Search {
    data: home;
    isLoading: boolean;
  }

  const { data, isLoading }: Search = getApiSearch(
    `http://localhost:3000/api/search/${key}`
  );
  console.log(data);
  return (
    <div className="px-5 py-8">
      <div>
        <h1 className="text-xl underline underline-offset-8">Search</h1>

        {isLoading && <h1>Loading...</h1>}
        <div className="py-10 grid grid-cols-4 gap-10 items-start">
          {data &&
            Object.values(data)?.map((home: home) => (
              <SearchManga home={home} key={home.endpoint} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;