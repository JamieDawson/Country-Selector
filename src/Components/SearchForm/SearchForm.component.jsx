import { useState } from "react";

const SearchForm = ({
  displayedCountryData,
  setDisplayedCountryData,
  entireJson,
  countriesOnlyArray,
}) => {
  const [inputValue, setInputValue] = useState("");

  const checkCountryInForm = (e) => {
    e.preventDefault();
    console.log(inputValue);
    const index = countriesOnlyArray.indexOf(inputValue);
    console.log(index);
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
