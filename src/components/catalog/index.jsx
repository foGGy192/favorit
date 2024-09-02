import React, { useState } from "react";
import styles from "./catalog.module.css";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className={styles.catalogSection}>
      <div className={`globalWrapper ${styles.catalogWrapper}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>КАТАЛОГ</h2>
          <p className={styles.text}>
            Расскажем о деталях и гарантийных случаях, когда потребуется наше
            вмешательство
          </p>
        </div>
        <div className={styles.catalog}>
          <div className={styles.cards}>
            <div
              className={`${styles.card} ${
                hoveredCard && hoveredCard !== "генераторы" ? styles.dimmed : ""
              }`}
              onMouseEnter={() => handleMouseEnter("генераторы")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.content}>
                <div className={styles.cardTextBlock}>
                  <h2 className={styles.cardTitle}>ГЕНЕРАТОРЫ</h2>
                  <p className={styles.cardText}>
                    Особый ассортимент выбора техники под ваши задачи
                  </p>
                  <Link to="/catalog/генераторы">
                    <button className={styles.cardButton}>
                      В ассортимент →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`${styles.card} ${
                hoveredCard && hoveredCard !== "компрессоры"
                  ? styles.dimmed
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter("компрессоры")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.content}>
                <div className={styles.cardTextBlock}>
                  <h2 className={styles.cardTitle}>КОМПРЕССОРЫ</h2>
                  <p className={styles.cardText}>
                    Особый ассортимент выбора техники под ваши задачи
                  </p>
                  <Link to="/catalog/компрессоры">
                    <button className={styles.cardButton}>
                      В ассортимент →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};