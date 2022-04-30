import React from "react";
import { COUNTRY_GET } from "../api";
import Error from "./helper/Error";
import Loading from "./helper/Loading";
import useFetch from "../hooks/useFetch";
import { useMemo } from "react";
import styles from "./Country.module.css";

function Country({ match }) {
  const { data, loading, error, request } = useFetch();
  const country = useMemo(() => {
    if (data?.length) {
      return data[0];
    }
    return null;
  }, [data]);

  React.useEffect(() => {
    async function fetchCountries() {
      const { url, options } = COUNTRY_GET(match.params.name);

      await request(url, options);
    }
    fetchCountries();
  }, [request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (country)
    return (
      <div className="container animeLeft">
        <h1 className={styles.title}>{country.name.common}</h1>
        <div className={styles.flag}>
          <p className={styles.attribute}>
            <span>Flag:</span>
          </p>
          <img
            src={country.flags.png}
            alt={`Flag of the country ${country.name.common}`}
          />
        </div>
        <section className={styles.info}>
          <p className={styles.attribute}>
            <span>Common Name:</span> {country.name.common}
          </p>
          <p className={styles.attribute}>
            <span>Official Name:</span> {country.name.official}
          </p>
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
        </section>
      </div>
    );

  return null;
}

export default Country;
