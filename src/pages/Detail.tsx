import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiDetail } from "../components/GetApi";
import { detail } from "../Model";

interface Detail {
  data: detail;
  isLoading: boolean;
}

// interface Genre {
//   genre: string;
//   genre_name
// }

const Detail = () => {
  const { key } = useParams<{ key?: string }>();

  const { data, isLoading }: Detail = getApiDetail(
    `http://localhost:3000/api/manga/detail/${key}`
  );

  console.log(data);

  return (
    <>
      {isLoading ? (
        <p className="px-5 py-10">Loading...</p>
      ) : (
        <div className="flex px-5 py-5">
          <div className="gap-5 border border-gray-300 rounded-lg  w-96">
            <img
              src={data?.thumb}
              alt="/"
              width={280}
              className="rounded-lg mx-auto mt-2"
            />
            <div className="py-3 px-3">
              <h1 className="border-b border-gray-300 text-lg font-semibold pb-2">
                Information
              </h1>
              <div className="mt-3 flex flex-col gap-3 w-full text-sm">
                <h5>
                  Type : <span className="font-mono">{data?.type}</span>
                </h5>
                <h5>
                  Author : <span className="font-mono">{data?.author}</span>
                </h5>
                <h5>
                  Status : <span className="font-mono">{data?.status}</span>
                </h5>
                <div className="">
                  Genre :
                  <div className="font-mono flex flex-wrap py-2 gap-2">
                    {data?.genre_list.map((genre: any, key) => (
                      <p key={key}>{genre.genre_name} ,</p>
                    ))}
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
              <p className="py-2">{data?.synopsis}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
