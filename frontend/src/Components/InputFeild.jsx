export default function InputFeild() {
    return (
      <div>
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
          Base Currency 
        </label>
        <div className="relative mt-2 rounded-md shadow-sm flex">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block max-w-[435px] h-[48px] rounded-sm border-0 py-1.5 pl-7 pr-2 bg-[#F2F2F2] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          />
          <div>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-sm border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  