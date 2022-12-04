import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-28">
      <ReactLoading type="bars" color="#0EA5E9" height={"10%"} width={"10%"} />
    </div>
  );
};

export default Loading;
