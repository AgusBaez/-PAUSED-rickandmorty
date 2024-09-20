import { useCharacters } from "../../hooks/useCharacters";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Result } from "../../utils/types";
import { SeeMoreButton } from "./SeeMoreButton";
import styles from "./CharacterSlider.module.css";

export const CharacterSlider = () => {
  const { data, error, isError, isLoading } = useCharacters();

  const groupCharacters = (characters: Result[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < characters.length; i += groupSize) {
      groups.push(characters.slice(i, i + groupSize));
    }
    return groups;
  };

  return isLoading ? (
    <p className={styles.loading}>Loading...</p>
  ) : isError ? (
    <p className={styles.error}>
      Error loading data: {error?.message || "Oops.. Something went wrong"}
    </p>
  ) : !data?.pages.length ? (
    <p className={styles.noCharacters}>No characters found</p>
  ) : (
    <div className={styles.carouselContainer}>
      <Carousel interval={null} className={styles.carousel}>
        {data?.pages.map((page, pageIndex) => {
          const characterGroups = groupCharacters(page.results, 5);
          return characterGroups.map((group, groupIndex) => (
            <Carousel.Item key={`page-${pageIndex}-group-${groupIndex}`}>
              <div className={styles.carouselItem}>
                {group.map((character: Result) => (
                  <Card key={character.id} className={styles.card}>
                    <Card.Img
                      variant="top"
                      src={character.image}
                      alt={character.name}
                    />
                    <Card.Body>
                      <Card.Title>{character.name}</Card.Title>
                      <Card.Text>
                        {character.species} - {character.origin.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ));
        })}
      </Carousel>
      <SeeMoreButton />
    </div>
  );
};

