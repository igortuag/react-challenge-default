export const API_URL = "https://restcountries.com/v3.1";

export function COUNTRIES_GET() {
  return {
    url: `${API_URL}/all`,
    options: {
      method: "GET",
    },
  };
}

export function COUNTRY_GET(name) {
  return {
    url: `${API_URL}/name/${name}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
