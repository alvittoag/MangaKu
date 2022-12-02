import { home } from "../Model";

interface Props {
  home: home;
}

const HomeMangga = ({ home }: Props) => {
  return (
    <div className="ring-1 ring-gray-400 flex flex-col rounded-lg">
      <img src={home.thumb} alt="a" className="rounded-t-md" />
      <div className="py-2 px-2 bg-gray-700 text-white rounded-b-lg">
        <h5 className="text-center">{home.title.substring(0, 36)}</h5>
        <p className="text-xs  text-center mt-1">"{home.type}"</p>
      </div>
    </div>
  );
};

export default HomeMangga;
