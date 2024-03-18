import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoryCard({ category }) {
  return (
    <div className="flex transform flex-col items-center gap-y-3 rounded-lg bg-white py-5 shadow-sm hover:-translate-y-2 hover:cursor-pointer md:w-[48%] lg:w-[23%]">
      <img src={category.icon} className="h-20 w-20" />
      <p className="text-lg font-bold text-black">{category.name}</p>
      <p className="font-medium hover:cursor-pointer hover:text-blue-600">
        25 Courses <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
      </p>
    </div>
  );
}

export default CategoryCard;
