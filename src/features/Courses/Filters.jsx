import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CategoriesDropdown from "../NavbarCategories/CategoriesDropdown";

function Filters() {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  return (
    <div className="mt-7 flex flex-col">
      <hr className="py-3"></hr>
      <p className="mb-2 text-sm font-semibold uppercase ">Category</p>
      <div
        role="button"
        onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
        className="unselectable relative flex w-fit items-center justify-between gap-x-20 rounded-md bg-white px-5 py-3 text-stone-500 hover:cursor-pointer"
      >
        <p>Select Category</p>
        <FontAwesomeIcon icon={faChevronDown} />
        {showCategoryDropdown && <CategoriesDropdown />}
      </div>
    </div>
  );
}

export default Filters;
