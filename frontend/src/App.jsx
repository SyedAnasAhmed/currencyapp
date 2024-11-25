import { useEffect, useState } from "react";
import "./App.css";
import AmountInput from "./Components/AmountInput";
import Button from "./Components/Button";
import Dropdown from "./Components/Dropdown";
import SearchableDropdown from "./Components/SearchInput";
import axios from "axios";

function App() {
  const [currencynames, setCurrencyNames] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/currencies")
      .then((response) => {
        console.log("Currency Data:", response.data.data);
        var currencydata = response.data.data;
        console.log(currencynames);
        setCurrencyNames(Object.keys(currencydata));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const filteredCurrencies = currencynames.filter((currency) =>
  //   currency.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <Dropdown currencyNames={currencynames} />
      </div>

      <div className="flex items-center justify-center mt-5">
        <AmountInput />
      </div>

      <div className="mt-5 flex justify-end mr-5">
        <Button />
      </div>

      <div className="flex items-center justify-center mt-5">
        <SearchableDropdown currencyNames={currencynames} />
      </div>
    </>
  );
}

export default App;
