import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  query: string;
};

export const Search = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [option, setOption] = useState("character");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOption(value);
  };

  const onSubmit = async (data: FormValues) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/${option}/?name=${data.query}`
    );
    const results = await response.json();
    console.log(results);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Select an option
          <select className="form-control" onChange={handleSelect}>
            <option value="character">Characters</option>
            <option value="episode">Episodes</option>
            <option value="location">Locations</option>
          </select>
        </label>
        <br />
        <input {...register("query")} placeholder={`Search for ${option}`} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

