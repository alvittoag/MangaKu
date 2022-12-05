import ReactPaginate from "react-paginate";

interface Data {
  selected: number;
}

interface Props {
  handlePagination: (data: Data) => void;
}

const Pagination = ({ handlePagination }: Props) => {
  return (
    <div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={29}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        onPageChange={handlePagination}
        containerClassName={"flex list-style-none justify-center py-8 gap-1"}
        pageClassName={"page-item active"}
        pageLinkClassName={
          "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-white hover:bg-[#0EA5E9] focus:shadow-none"
        }
        previousClassName={"page-item py-1 px-2"}
        previousLinkClassName={
          "bg-[#374151] py-2 text-white px-2 rounded-lg hover:bg-[#0EA5E9]"
        }
        nextClassName={"page-item py-1 px-2"}
        nextLinkClassName={
          "bg-[#374151] py-2  text-white px-2 rounded-lg hover:bg-[#0EA5E9]"
        }
        breakClassName={
          "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
        }
        activeClassName={"bg-[#0EA5E9] rounded-lg text-gray-500"}
      />
    </div>
  );
};

export default Pagination;
