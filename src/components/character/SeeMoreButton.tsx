import { useState } from "react";
import { CharacterGrid } from "./CharacterGrid";
import styles from "./CharacterSlider.module.css"; // Usa los mismos estilos

export const SeeMoreButton = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles["see-more-container"]}>
      <button
        onClick={() => setShowMore(!showMore)}
        className="btn btn-primary"
      >
        {showMore ? "Show Less" : "See More"}
      </button>
      {showMore && <CharacterGrid />}
    </div>
  );
};

