import { GetApiHome } from "../components/GetApi";
import HomeMangga from "../components/HomeMangga";
import Loading from "../components/Loading";
import Search from "../components/Search";
import { MangaAllPage } from "../Model";

interface Home {
  data: MangaAllPage;
  isLoading: boolean;
}

const Home = () => {
  const { data, isLoading }: Home = GetApiHome();

  return (
    <div className="px-5 py-8">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Home;
