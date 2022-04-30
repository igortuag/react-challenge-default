import React from "react";
import { COUNTRIES_GET } from "../api";
import Error from "./helper/Error";
import Loading from "./helper/Loading";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import styles from "./CountriesList.module.css";

function CountriesList() {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchCountries() {
      const { url, options } = COUNTRIES_GET();

      await request(url, options);
    }
    fetchCountries();
  }, [request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={styles.list}>
        {data.map((country) => (
          <li>
            <Link to={`/country/${country.name.common}`}>
              <CountryCard country={country} />
            </Link>
          </li>
        ))}
      </ul>
    );

  return null;
}

export default CountriesList;
