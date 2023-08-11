import { useCities } from "../contexts/CitiesContext";
import { CountryItem, Message, Spinner } from "../components";
import styles from "./CountryList.module.css";

export function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, currCity) => {
    if (!arr.map((el) => el.country).includes(currCity.country)) {
      return [...arr, { country: currCity.country, emoji: currCity.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
