import { FiSearch } from "react-icons/fi";

const Search = ({ term, setTerm, submitHandler }) => {
  return (
    <div className="lg:w-2/4 w-3/4 flex flex-col items-start justify-center">
      <span className="text-sm ml-2 text-gray-400 my-6">Search For City</span>
      <form
        onSubmit={submitHandler}
        className="flex items-center w-full bg-gray-900 rounded-full"
      >
        <input
          className="w-full rounded-full px-5 py-4 text-sm outline-none bg-gray-900"
          type="text"
          placeholder="Enter Your City Name"
          autoComplete="false"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        <button type="submit">
          <FiSearch
            className="mx-5 mb-1 cursor-pointer outline-none bg-none border-none"
            fontSize={20}
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
