import style from "./home.module.css";
import { Search } from "../components/search/Search.tsx";

export const Home = () => {
  return (
    <>
      <div className={style.jumbotron}>
        <h1 className="display-4">Rick & Morty </h1>
        <p className="lead">by Agus Baez</p>
        <hr className="my-4" />
        <Search />
      </div>
    </>
  );
};

