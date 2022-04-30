import React from "react";

import styles from "./CountryCard.module.css";

function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        <img
          src={country.flags.png}
          alt={`Flag of the country ${country.name.common}`}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{country.name.common}</p>
        <p className={styles.attribute}>
          <span>Native Name:</span> {country.name.common}
        </p>
        <p className={styles.attribute}>
          <span>Population:</span> {country.population}
        </p>
        <p className={styles.attribute}>
          <span>Region:</span> {country.region}
        </p>
        <p className={styles.attribute}>
          <span>Sub Region:</span> {country.subregion}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
