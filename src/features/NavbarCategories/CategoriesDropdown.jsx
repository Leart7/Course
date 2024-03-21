import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCategories } from "../../reactQuery/useCategories";

function CategoriesDropdown({ setShowCategoriesDropdown, from }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useCategories();

  return (
    <div className="unselectable absolute left-0 top-full z-20 flex w-72 flex-col rounded-lg border bg-white px-5 py-7 shadow-md hover:cursor-default ">
      {categories?.map((category) => (
        <React.Fragment key={category.id}>
          {from === "/" ? (
            <Link
              onClick={() => setShowCategoriesDropdown(false)}
              to={`/courses/?category=${encodeURIComponent(category.name)}`}
              className="rounded-md py-3 ps-5 text-start font-medium text-stone-500 hover:bg-stone-50 hover:text-blue-600"
            >
              {category.name}
            </Link>
          ) : (
            <button
              onClick={() => {
                searchParams.set("category", category.name);
                setSearchParams(searchParams);
              }}
              className="rounded-md py-3 ps-5 text-start font-medium text-stone-500 hover:bg-stone-50 hover:text-blue-600"
            >
              {category.name}
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CategoriesDropdown;
