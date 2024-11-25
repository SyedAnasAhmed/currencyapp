import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Components/Dropdown";
import AmountInput from "./Components/AmountInput";
import SearchableDropdown from "./Components/SearchInput";
import Button from "./Components/Button";

function App() {
  const [currencynames, setCurrencyNames] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [currencyData, setCurrencyData] = useState({});
  const [amount, setAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  // const [finalamount, setFinalamount] = useState(0);
  const [conversionResult, setConversionResult] = useState(null);
  const [conversionsHistory, setConversionsHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching currency data
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/currencies?base_currency=${baseCurrency}`)
      .then((response) => {
        const data = response.data.data;
        setCurrencyNames(Object.keys(data)); // Set currency names for dropdown
        setCurrencyData(data); // Store currency rates
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [baseCurrency]);

  const handleBaseCurrencyChange = (selectedCurrency) => {
    setBaseCurrency(selectedCurrency);
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const handleTargetCurrencyChange = (selectedCurrency) => {
    setTargetCurrency(selectedCurrency);
  };

  useEffect(() => {
    const savedConversions =
      JSON.parse(localStorage.getItem("conversionsHistory")) || [];
    setConversionsHistory(savedConversions);
  }, []);

  const handleConversion = () => {
    setTimeout(() => {
      const rate = currencyData[targetCurrency]; // Assuming this is the correct rate
      const result = (amount * rate).toFixed(2);
      setConversionResult(result);

      // Save conversion to localStorage
      const newConversion = {
        baseCurrency,
        targetCurrency,
        amount,
        result,
        timestamp: new Date(),
      };
      const updatedHistory = [...conversionsHistory, newConversion];
      setConversionsHistory(updatedHistory);
      localStorage.setItem(
        "conversionsHistory",
        JSON.stringify(updatedHistory)
      );
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="lg:absolute right-10 lg:w-[450px] lg:h-auto flex items-center bg-white ">
        <div className="max-w-[420px] h-auto m-auto flex flex-col">
          <div className="flex items-center justify-center mt-5">
            <Dropdown
              currencyNames={currencynames}
              baseCurrency={baseCurrency}
              onCurrencyChange={handleBaseCurrencyChange}
            />
          </div>

          <div className="flex items-center justify-center mt-5">
            <AmountInput amount={amount} onAmountChange={handleAmountChange} />
          </div>

          <div className="mt-5 flex justify-end mr-5">
            <Button onClick={handleConversion} />
          </div>

          <div className="flex items-center justify-center mt-5">
            <SearchableDropdown
              currencyNames={currencynames}
              targetCurrency={targetCurrency}
              onCurrencyChange={handleTargetCurrencyChange}
            />
          </div>

          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="mt-10 ml-5">
              <h3>Conversion Amount: {conversionResult}</h3>
            </div>
          )}

          <div className="mt-5 max-h-60 overflow-y-scroll w-[95%] m-auto bg-gray-200 rounded-md ">
            <h2 className="px-2 py-2">Conversion History:</h2>
            <ul>
              {conversionsHistory.map((conversion, index) => (
                <li key={index} className="px-2 py-2 text-sm border-b-2">
                  {conversion.amount} {conversion.baseCurrency} ={" "}
                  {conversion.result} {conversion.targetCurrency} -{" "}
                  {new Date(conversion.timestamp).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
