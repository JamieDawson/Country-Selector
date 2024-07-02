import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm.component";

const Dropdown = ({ countriesOnlyArray, entireJson }) => {
  const [showMoreBoolean, setShowMoreBoolean] = useState(false);
  const [displayedCountryData, setDisplayedCountryData] = useState({
    name: "",
    flag_picture: "",
    population: "",
    region: "",
    capital: "",
    native_name: "",
    currency_name: "",
    language_name: "",
    border_names: [],
  });

  const MakeItem = (x, index) => {
    return (
      <option key={index} value={index}>
        {x}
      </option>
    );
  };

  const handleCountryChange = (event) => {
    const selectedIndex = event.target.value;
    const selectedCountry = entireJson[selectedIndex];
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
      name: entireJson[selectedIndex].name.common,
      flag_picture: entireJson[selectedIndex].flags.png,
      population: entireJson[selectedIndex].population,
      region: entireJson[selectedIndex].region,
      capital: entireJson[selectedIndex].capital[0],
      native_name: nativeName,
      currency_name: currencyName,
      language_name: languageName,
      border_names: borderCountries,
    });
  };

  useEffect(() => {
    //Loads the first country in the array and grabs all the values from it
    if (entireJson.length > 0) {
      const selectedCountry = entireJson[0];
      const nativeName = Object.values(selectedCountry.name.nativeName)[0]
        .common;
      const currencyName = Object.values(selectedCountry.currencies)[0].name;
      const languageName = Object.values(selectedCountry.languages)[0];
      let borderCountries;
      if (selectedCountry.borders) {
        borderCountries = Object.values(selectedCountry.borders);
      } else {
        borderCountries = ["No countries boarder this country"];
      }

      setDisplayedCountryData({
        name: entireJson[0].name.common,
        flag_picture: entireJson[0].flags.png,
        population: entireJson[0].population,
        region: entireJson[0].region,
        capital: entireJson[0].capital[0],
        native_name: nativeName,
        currency_name: currencyName,
        language_name: languageName,
        border_names: borderCountries,
      });
    }
  }, [entireJson]);

  const showMore = () => {
    if (showMoreBoolean === true) {
      setShowMoreBoolean(false);
    } else {
      setShowMoreBoolean(true);
    }
  };

  return (
    <div>
      <select onChange={handleCountryChange}>
        {countriesOnlyArray.map(MakeItem)}
      </select>
      <h4>name: {displayedCountryData.name}</h4>
      <img
        alt="the current country flag"
        src={displayedCountryData.flag_picture}
      />
      <h4>population: {displayedCountryData.population}</h4>
      <h4>region: {displayedCountryData.region}</h4>
      <h4>capital: {displayedCountryData.capital}</h4>
      <button onClick={showMore}>show more</button>
      {showMoreBoolean === true ? (
        <div>
          <h4>Native Name: {displayedCountryData.native_name} </h4>
          <h4>Currencies used: {displayedCountryData.currency_name}</h4>
          <h4>Languages: {displayedCountryData.language_name} </h4>
          <h4>
            Border countries:
            {displayedCountryData.border_names.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </h4>
        </div>
      ) : (
        <div></div>
      )}
      <SearchForm
        entireJson={entireJson}
        displayedCountryData={displayedCountryData}
        setDisplayedCountryData={setDisplayedCountryData}
        countriesOnlyArray={countriesOnlyArray}
      />
    </div>
  );
};

export default Dropdown;

/*
displayedCountryData, setDisplayedCountryData
entireJson
Go to email to find other steps
*/
