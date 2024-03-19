import { Link } from "react-router-dom";
import { useCategories } from "../../reactQuery/useCategories";

function CategoriesDropdown({ setShowCategoriesDropdown }) {
  const { categories } = useCategories();

  return (
    <div className="absolute left-0 top-full flex w-72 flex-col rounded-lg border bg-white px-5 py-7 shadow-md hover:cursor-default ">
      {categories?.map((category) => (
        <Link
          onClick={() => setShowCategoriesDropdown(false)}
          to={`/courses/?category=${category.id}`}
          key={category.id}
          className="rounded-md py-3 ps-5 text-start font-medium text-stone-500 hover:bg-stone-50 hover:text-blue-600"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default CategoriesDropdown;
