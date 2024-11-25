export default function AmountInput() {
  return (
    <div className="w-full max-w-sm">
      <label htmlFor="amount" className="block   text-[13px] text-gray-400 ">
        Amount
      </label>
      <div className="relative mt-1  flex rounded-md items-center bg-gray-100 shadow-sm">
        <span className="inline-flex h-[33px] w-[27px] items-center justify-center ml-1 my-1 rounded-md bg-[#D9D9D9] px-3 text-[#856E6E] sm:text-sm">
          €
        </span>
        <input
          type="number"
          id="amount"
          name="amount"
          className="block w-full flex-1 rounded-r-md border-0 bg-gray-100 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0"
        />
      </div>
    </div>
  );
}
