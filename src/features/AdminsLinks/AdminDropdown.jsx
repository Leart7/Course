import { Link } from "react-router-dom";

function AdminDropdown() {
  return (
    <div className="absolute right-0 top-full flex w-72 flex-col rounded-lg border bg-white px-5 py-7 shadow-md hover:cursor-default ">
      <Link
        to="/categories"
        className="rounded-md py-3 ps-5 text-start font-medium text-stone-500 hover:bg-stone-50 hover:text-blue-600"
      >
        Categories
      </Link>
      <Link
        to="/courses"
        className="rounded-md py-3 ps-5 text-start font-medium text-stone-500 hover:bg-stone-50 hover:text-blue-600"
      >
        Courses
      </Link>
    </div>
  );
}

export default AdminDropdown;
