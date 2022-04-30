import React from "react";
import { COUNTRIES_GET } from "../api";
import Error from "./helper/Error";
import Loading from "./helper/Loading";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

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
      <ul>
        {data.map((country) => (
          <li>
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    );

  return null;
}

export default CountriesList;
