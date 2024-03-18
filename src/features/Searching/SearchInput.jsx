import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchInput() {
  return (
    <div className="relative mx-12 hidden flex-1 lg:block">
      <input
        className="w-full rounded-full border-2 px-12 py-2 text-stone-600 outline-blue-600 "
        placeholder="Search for anything"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute inset-0 left-5 top-4 text-stone-600"
      />
    </div>
  );
}

export default SearchInput;
