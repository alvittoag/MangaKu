import { GetApiHome } from "../components/GetApi";
import HomeMangga from "../components/HomeMangga";
import { home } from "../Model";

const Home = () => {
  const { data, isLoading } = GetApiHome();

  return (
    <div className="px-5 py-8">
      <div>
        <h1 className="text-xl underline underline-offset-8">Popular Mangga</h1>
        {isLoading && <h1>Loading...</h1>}
        <div className="py-10 grid grid-cols-4 gap-10 items-start">
          {data?.map((home: home) => (
            <HomeMangga home={home} key={home.endpoint} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
