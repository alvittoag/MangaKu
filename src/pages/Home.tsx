import { GetApiHome } from "../components/GetApi";
import HomeMangga from "../components/HomeMangga";
import Search from "../components/Search";
import { home } from "../Model";

interface Home {
  data: home;
  isLoading: boolean;
}

const Home = () => {
  const { data, isLoading }: Home = GetApiHome();

  return (
    <div className="px-5 py-8">
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl underline underline-offset-8">
            Popular Mangga
          </h1>

          <Search />
        </div>
        {isLoading && <h1>Loading...</h1>}
        <div className="py-10 grid grid-cols-4 gap-10 items-start">
          {data &&
            Object.values(data)?.map((home: home) => (
              <HomeMangga home={home} key={home.endpoint} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
