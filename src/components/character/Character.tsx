import style from "./character.module.css";
import { Result } from "../../utils/types";
import { useCharacters } from "../../hooks/useCharacters";
import Card from "react-bootstrap/Card";

export const Character = () => {
  const { data, error, isError, isLoading, fetchNextPage, hasNextPage } =
    useCharacters();

  return isLoading ? (
    <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading...</p>
  ) : isError ? (
    <p>Error loading data: {error?.message || "Oops.. Something went wrong"}</p>
  ) : !data?.pages.length ? (
    <p>No characters found</p>
  ) : (
    <>
      <h1>All Characters</h1>
      <div className={style.card}>
        {data?.pages.map((page) =>
          page.results.map((character: Result) => (
            <Card
              style={{
                width: "18rem",
                padding: "1.5rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2rem",
                margin: "1rem",
                cursor: "pointer",
              }}
              key={character.id}
            >
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  {character.species} - {character.origin.name}
                </Card.Text>
                <button> ❤️ </button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          style={{ margin: "2rem auto", display: "block" }}
        >
          Load More
        </button>
      )}
    </>
  );
};

