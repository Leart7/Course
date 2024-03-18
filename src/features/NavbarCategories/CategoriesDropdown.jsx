import { useCategories } from "../../reactQuery/useCategories";

function CategoriesDropdown() {
  const { categories } = useCategories();

  return (
    <div className="absolute left-0 top-full flex w-72 flex-col rounded-lg bg-white px-5 py-7 shadow-sm ">
      {categories?.map((category) => (
        <div
          key={category.id}
          className="rounded-md py-3 ps-5 text-start font-medium text-stone-500 hover:bg-stone-50 hover:text-blue-600"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoriesDropdown;
