import React, { useState, useEffect } from "react";
import axios from "axios";

const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY;
const Country = ({ country }) => {
  const [showDetailStatus, setShowDetailStatus] = useState(false);
  const handleShowCountryDetails = () => {
    setShowDetailStatus(!showDetailStatus);
  };
  const showDetails = () => {
    if (showDetailStatus) {
      return <CountryDetails key={country.alpha3Code} country={country} />;
    }
  };
  return (
    <div>
      <span>
        {country.name}{" "}
        <button onClick={handleShowCountryDetails}>
          {showDetailStatus ? "Hide" : "Show"}
        </button>
      </span>

      {showDetails()}
    </div>
  );
};

const Language = ({ language }) => {
  return <li>{language.name}</li>;
};

const WeatherDetails = ({ country, weatherInformation }) => {
  return (
    <div>
      <p>
        <strong>temparture: </strong>
        {`${weatherInformation.current.temperature} Celsius`}
      </p>
      <img
        src={weatherInformation.current.weather_icons[0]}
        alt={`${country.name}-weather-icon`}
        height="100"
        width="100"
      />
      <p>
        <strong>wind: </strong> {weatherInformation.current.wind_speed * 0.62}{" "}
        mph direction {weatherInformation.current.wind_dir}
      </p>
    </div>
  );
};

const CountryDetails = ({ country }) => {
  const [weatherInformation, setWeatherInformation] = useState({
    current: {
      temperature: "",
      weather_icons: [""],
      wind_speed: "",
      wind_dir: "",
    },
  });
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${country.name}&units=m`
      )
      .then((response) => {
        const weather = response.data;
        console.log(response.data);
        setWeatherInformation(weather);
      });
  }, [country.name]);
  return (
    <div>
      <h1>{country.name}</h1>
      <p>{`capital ${country.capital}`}</p>
      <p>{`population ${country.population}`}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language) => {
          return <Language key={language.iso639_1} language={language} />;
        })}
      </ul>
      <img
        src={country.flag}
        alt={`${country.name}-flag`}
        height="100"
        width="100"
      />
      <h2>Weather in {country.name}</h2>
      {weatherInformation ? (
        <WeatherDetails
          country={country}
          weatherInformation={weatherInformation}
        />
      ) : (
        <p>No weather Information</p>
      )}
    </div>
  );
};

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredInput, setFilteredInput] = useState("");

  const handleFilteredInput = (event) => {
    setFilteredInput(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const countries = response.data;
      setCountries(countries);
    });
  }, []);

  const filteredCountries = filteredInput
    ? countries.filter((country) => {
        return country.name.toLowerCase().includes(filteredInput.toLowerCase());
      })
    : "";

  const showCountries = () => {
    if (filteredCountries === "") {
      return <p>Please key in the countries you want to search</p>;
    }

    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length > 1) {
      return filteredCountries.map((country) => {
        return <Country key={country.alpha3Code} country={country} />;
      });
    } else if (filteredCountries.length === 1) {
      return <CountryDetails country={filteredCountries[0]} />;
    } else {
      return <p>No matches found. Please try another search input</p>;
    }
  };
  return (
    <div className="App">
      <label htmlFor="findCountries">find countries </label>
      <input type="text" onChange={handleFilteredInput} />
      {showCountries()}
    </div>
  );
}

export default App;
