import Dropdown from "./Components/Dropdown/Dropdown";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countriesOnlyArray, setCountriesOnlyArray] = useState([]); //array of country names
  const [entireJson, setEntireJson] = useState([]);
  //called on app mounting!
  useEffect(() => {
    console.log("useEffect called only once");
    const addCountiresToArray = async () => {
      let data = await fetch("https://restcountries.com/v3.1/all");
      let json = await data.json();

      const countyNames = json.map((item) => item.name.common);
      setCountriesOnlyArray(countyNames);
      setEntireJson(json);
    };

    addCountiresToArray();
  }, []);

  return (
    <div className="App">
      <Dropdown
        countriesOnlyArray={countriesOnlyArray}
        entireJson={entireJson}
      />
    </div>
  );
}

export default App;
