import { MangaAllPage } from "../Model";

interface Props {
  manga: MangaAllPage;
}

const HomeMangga = ({ manga }: Props) => {
  return (
    <a
      onClick={() => (window.location.href = `manga/detail/${manga.endpoint}`)}
    >
      <div className="ring-1 ring-gray-400 flex flex-col rounded-lg hover:scale-105 duration-500 cursor-pointer">
        <img src={manga.thumb} alt="a" className="rounded-t-md" />
        <div className="py-2 px-2 bg-gray-700 text-white rounded-b-lg">
          <h5 className="text-center">{manga.title.substring(0, 36)}</h5>
          <p className="text-xs  text-center mt-1">"{manga.type}"</p>
        </div>
      </div>
    </a>
  );
};

export default HomeMangga;
