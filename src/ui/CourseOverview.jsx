import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CourseOverview({ course }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative mx-auto h-[33rem]  w-full max-w-md overflow-hidden rounded-lg bg-white shadow-sm hover:cursor-pointer md:mx-0 md:w-[48%] lg:w-[31%]"
    >
      <div className="absolute left-6 top-6 z-10 h-11 w-11 rounded-full bg-orange-500 text-xl text-white hover:cursor-pointer hover:bg-blue-600">
        <FontAwesomeIcon icon={faHeart} className="ms-3 mt-3" />
      </div>
      <div
        className={`${isHovered ? "bg-blue-600" : "bg-orange-500"} courseImage relative pb-2`}
      >
        <img src="./studentsRectangle.jpg" className="courseImage w-full " />
      </div>
      <div className="flex flex-col gap-y-4 p-5">
        <p className="w-fit rounded-lg bg-blue-900 px-4 py-1 text-sm font-semibold text-white">
          4 hours
        </p>
        <h2
          className={`${isHovered && "underline underline-offset-8"} hover: text-2xl font-bold capitalize hover:cursor-pointer hover:text-blue-600`}
        >
          {course.name}
        </h2>
      </div>
    </div>
  );
}

export default CourseOverview;
