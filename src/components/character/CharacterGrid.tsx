import style from "./character.module.css";
import { Result } from "../../utils/types";
import { useCharacters } from "../../hooks/useCharacters";
import Card from "react-bootstrap/Card";

export const CharacterGrid = () => {
  const { data, error, isError, isLoading, fetchNextPage, hasNextPage } =
    useCharacters();

  return isLoading ? (
    <p className={style.loading}>Loading...</p>
  ) : isError ? (
    <p className={style.error}>
      Error loading data: {error?.message || "Oops.. Something went wrong"}
    </p>
  ) : !data?.pages.length ? (
    <p className={style.noCharacters}>No characters found</p>
  ) : (
    <>
      <h1 className={style.title}>All Characters</h1>
      <div className={style.cardContainer}>
        {data?.pages.map((page) =>
          page.results.map((character: Result) => (
            <Card className={style.card} key={character.id}>
              <Card.Img
                variant="top"
                src={character.image}
                className={style.cardImg}
              />
              <Card.Body className={style.cardBody}>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  {character.species} - {character.origin.name}
                </Card.Text>
                <button className={style.favoriteButton}>❤️</button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className={style.loadMoreButton}
        >
          Load More
        </button>
      )}
    </>
  );
};

