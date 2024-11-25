// import React from "react";

// function SearchInput({ setSearchQuery }) {
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       <div className="w-full max-w-sm">
//         <div className="relative mt-1  flex rounded-md items-center bg-gray-100 shadow-sm">
//           <input
//             type="text"
//             id="amount"
//             name="amount"
//             className="block w-full flex-1 rounded-r-md border-0 bg-gray-100 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             placeholder="Search Currency"
//             onChange={handleSearchChange}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default SearchInput;

import React, { useState } from "react";

function SearchableDropdown({ currencyNames }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencyNames);

  // Update filtered currencies when search query changes
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter currencies based on the search query
    const result = currencyNames.filter((currency) =>
      currency.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCurrencies(result);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="relative mt-1  flex rounded-md items-center bg-gray-100 shadow-sm">
        <input
          type="text"
          placeholder="Search for a currency"
          value={searchQuery}
          onChange={handleSearch}
          className="block w-full flex-1 rounded-r-md border-0 bg-gray-100 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <ul className="absolute top-12 w-full mt-1 bg-white border border-gray-300 rounded-md max-h-60 overflow-auto">
          {filteredCurrencies.length > 0 ? (
            filteredCurrencies.map((currency, index) => (
              <li key={index} className="p-2 cursor-pointer hover:bg-gray-100">
                {currency}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500 hidden">No results found</li>
          )
          }
        </ul>
      </div>
    </div>
  );
}

export default SearchableDropdown;
