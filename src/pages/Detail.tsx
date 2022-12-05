import { useState } from "react";
import { useParams } from "react-router-dom";
import { getApiDetail } from "../components/GetApi";
import Loading from "../components/Loading";
import { detail } from "../Model";

interface Detail {
  data: detail;
  isLoading: boolean;
  genre_name?: string;
}

const Detail = () => {
  const { key } = useParams<{ key?: string }>();

  const { data, isLoading }: Detail = getApiDetail(
    `http://localhost:3000/api/manga/detail/${key}`
  );

  const [nextRead, setNextRead] = useState<boolean>(false);

  const handleNextRead = () => {
    setNextRead(!nextRead);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex px-14 py-10 mt-[5rem]">
          <div className="gap-5 border border-gray-300 rounded-lg  w-96">
            <img
              src={data?.thumb}
              alt="/"
              width={280}
              className="rounded-3xl mx-auto mt-2 px-2"
            />
            <div className="py-3 px-3">
              <h1 className="border-b border-gray-300 text-lg font-semibold pb-2">
                Information
              </h1>
              <div className="mt-3 flex flex-col gap-3 w-full text-sm font-bold">
                <h5>
                  Type :
                  <span className="ml-2 font-mono font-normal">
                    {data?.type}
                  </span>
                </h5>

                <h5>
                  Status :
                  <span className="ml-2 font-mono font-normal">
                    {data?.status}
                  </span>
                </h5>
                <h5>
                  Author :
                  <span className="ml-2 font-mono font-normal">
                    {data?.author}
                  </span>
                </h5>
                <div className="">
                  Genre :
                  <div className="font-mono flex flex-wrap py-2 gap-1">
                    {data &&
                      Object.values(data?.genre_list).map(
                        (detail: detail, key: number) => (
                          <p className="font-normal" key={key}>
                            {detail?.genre_name} ,
                          </p>
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 p-2 w-full">
            <h1 className="text-3xl font-semibold">{data?.title}</h1>

            <div className="py-5">
              <h5 className="font-medium border-b border-gray-300 pb-2">
                Synopis :
              </h5>
              <p className="py-2">
                {nextRead ? data?.synopsis : data?.synopsis.substring(0, 300)}
                {!nextRead && (
                  <span
                    className="underline text-blue-700 cursor-pointer ml-1"
                    onClick={handleNextRead}
                  >
                    ...lanjutkan membaca
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
