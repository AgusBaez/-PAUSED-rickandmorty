import { useForm } from "react-hook-form";
import { useCharacters } from "../../hooks/useCharacters";

type FormValues = {
  query: string;
  option: "character" | "episode" | "location";
};

export const Search = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (formValue: FormValues) => {
    const { data } = useCharacters(formValue.option, formValue.query);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Select an option
          <select {...register("option")} className="form-control">
            <option value="character">Characters</option>
            <option value="episode">Episodes</option>
            <option value="location">Locations</option>
          </select>
        </label>
        <br />
        <input {...register("query")} placeholder={`Search for `} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

