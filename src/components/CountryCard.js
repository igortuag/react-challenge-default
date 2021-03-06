import React from "react";

import styles from "./CountryCard.module.css";
import Image from "./helper/Image";

function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        <Image
          src={country.flags.png}
          alt={`Flag of the country ${country.name.common}`}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{country.name.common}</p>
        <p className={styles.attribute}>
          <span>Capital:</span> {country.capital}
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
