export default function Dropdown({ currencyNames }) {
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="base-currency"
        className="block text-[13px] text-gray-400"
      >
        Base currency
      </label>
      <div className="relative mt-1">
        <select
          id="base-currency"
          name="base-currency"
          className="block w-full appearance-none rounded-md bg-gray-100 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {currencyNames.map((currency ,key) => (
            <option value={key}>{currency}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
