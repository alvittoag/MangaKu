import { getApiRecommended } from "../components/GetApi";
import Loading from "../components/Loading";
import RecommendedManga from "../components/RecommendedManga";
import { MangaAllPage } from "../Model";

interface Recommned {
  data: MangaAllPage;
  isLoading: boolean;
}

const Recommended = () => {
  const { data, isLoading }: Recommned = getApiRecommended();

  return (
    <div className="px-5 py-8">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex justify-between">
            <h1 className="text-xl underline underline-offset-8">
              Recomended Mangga
            </h1>
          </div>

          <div className="py-10 grid grid-cols-4 gap-10 items-start">
            {data &&
              Object.values(data)?.map((manga: MangaAllPage) => (
                <RecommendedManga manga={manga} key={manga.endpoint} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Recommended;
