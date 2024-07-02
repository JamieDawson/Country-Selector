import { useState } from "react";

const SearchForm = ({
  displayedCountryData,
  setDisplayedCountryData,
  entireJson,
  countriesOnlyArray,
}) => {
  const [inputValue, setInputValue] = useState("");

  const checkCountryInForm = (event) => {
    event.preventDefault();
    //console.log(inputValue.toLowerCase());
    const index = countriesOnlyArray.indexOf(inputValue.toLowerCase().trim());
    console.log(index);

    const selectedCountry = entireJson[index];
    console.log(selectedCountry);
    const nativeName = Object.values(selectedCountry.name.nativeName)[0].common;
    const currencyName = Object.values(selectedCountry.currencies)[0].name;
    const languageName = Object.values(selectedCountry.languages)[0];

    let borderCountries;
    if (selectedCountry.borders) {
      borderCountries = Object.values(selectedCountry.borders);
    } else {
      borderCountries = ["No countries boarder this country"];
    }

    setDisplayedCountryData({
      name: entireJson[index].name.common,
      flag_picture: entireJson[index].flags.png,
      population: entireJson[index].population,
      region: entireJson[index].region,
      capital: entireJson[index].capital[0],
      native_name: nativeName,
      currency_name: currencyName,
      language_name: languageName,
      border_names: borderCountries,
    });
  };

  return (
    <form onSubmit={checkCountryInForm}>
      <input
        placeholder="country name"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Submit country</button>
    </form>
  );
};

export default SearchForm;

/*
entireJson
displayedCountryData, setDisplayedCountryData

*/
