import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormData } from "../Model";

const Search = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    if (data) {
      console.log(data.search);
      navigate((window.location.href = `/${data.search}`));
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        {...register("search")}
        type="text"
        placeholder="Search Manga..."
        className="ring-1 ring-gray-400 py-1 px-3 rounded-lg shadow-lg"
      />
    </form>
  );
};

export default Search;
