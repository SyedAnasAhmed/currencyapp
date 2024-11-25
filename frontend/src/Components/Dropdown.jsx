export default function Dropdown({ currencyNames, baseCurrency, onCurrencyChange }) {
  const handleSelect = (event) => {
    onCurrencyChange(event.target.value);  // Update parent state
  };

  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="base-currency"
        className="block text-[13px] text-gray-400"
      >
        Base currency
      </label>
      <select
        id="base-currency"
        name="base-currency"
        value={baseCurrency}
        onChange={handleSelect}
        className="block w-full appearance-none rounded-md bg-gray-100 px-4 py-2 text-gray-900 shadow-sm"
      >
        {currencyNames.map((currency, key) => (
          <option value={currency} key={key}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
  