// import React, { useState } from "react";

// function SearchableDropdown({ currencyNames }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredCurrencies, setFilteredCurrencies] = useState(currencyNames);

//   const handleSearch = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     console.log(searchQuery);

//     const result = currencyNames.filter((currency) =>
//       currency.toLowerCase().includes(query.toLowerCase())
//     );

//     setFilteredCurrencies(result);
//   };

//   const handleSelection = (currency) => {
//     setSearchQuery(currency); // Update the input field with the selected currency
//     setFilteredCurrencies([]); // Clear the suggestions list
//   };

//   return (
//     <div className="w-full max-w-sm">
//       <div className="relative mt-1  flex rounded-md items-center bg-gray-100 shadow-sm">
//         <input
//           type="text"
//           placeholder="Search for a currency"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="block w-full flex-1 rounded-r-md border-0 bg-gray-100 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//         />
//         <ul className="absolute top-12 w-full mt-1 bg-white border border-gray-300 rounded-md max-h-60 overflow-auto">
//           {filteredCurrencies.length > 0 ? (
//             filteredCurrencies.map((currency, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleSelection(currency)}
//                 className="p-2 cursor-pointer hover:bg-gray-100"
//               >
//                 {currency}
//               </li>
//             ))
//           ) : (
//             <li className="p-2 text-gray-500 hidden">No results found</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SearchableDropdown;

// SearchableDropdown.js


import React, { useState } from "react";

function SearchableDropdown({ currencyNames, targetCurrency, onCurrencyChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencyNames);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const result = currencyNames.filter((currency) =>
      currency.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCurrencies(result);
  };

  const handleSelection = (currency) => {
    setSearchQuery(currency); // Update the input field with the selected currency
    setFilteredCurrencies([]); // Clear the suggestions list
    onCurrencyChange(currency); // Update the parent state with selected currency
  };

  return (
    <div className="w-full max-w-sm">
      <div className="relative mt-1 flex rounded-md items-center bg-gray-100 shadow-sm">
        <input
          type="text"
          placeholder="Search for a currency"
          value={searchQuery}
          onChange={handleSearch}
          className="block w-full flex-1 rounded-r-md border-0 bg-gray-100 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
         {filteredCurrencies.length > 0 ? (
            filteredCurrencies.map((currency, index) => (
        <ul className="absolute top-12 w-full mt-1 bg-white border border-gray rounded-md max-h-60 overflow-auto">
              <li
                key={index}
                onClick={() => handleSelection(currency)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {currency}
              </li>
        </ul>
            ))
          ) : (
            <li className="p-2 text-gray-500 hidden">No results found</li>
          )}
      </div>
    </div>
  );
}

export default SearchableDropdown;
