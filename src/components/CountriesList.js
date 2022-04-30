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
  const [search, setSearch] = React.useState("");

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
      <div>
        <label className={styles.search}>
          <input
            placeholder="SEARCH BY COUNTRY NAME"
            type="text"
            value={search}
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />
        </label>
        <ul className={styles.list}>
          {data.map((country) => {
            const regexToSearch = new RegExp(search, "gi");

            if (!search || country.name.common.match(regexToSearch)) {
              return (
                <li key={country.name.common}>
                  <Link to={`/country/${country.name.common}`}>
                    <CountryCard country={country} />
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    );

  return null;
}

export default CountriesList;
