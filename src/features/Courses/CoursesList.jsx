import { useSelector } from "react-redux";
import CourseOverview from "../../ui/CourseOverview";

function CoursesList({ courses, from }) {
  const { filterOpen } = useSelector((store) => store.filterOpen);

  return (
    <div
      className={`${filterOpen ? "my-10" : "-mt-32"} mx-auto  flex flex-col justify-center gap-y-6 px-3 pb-10 md:w-[90%] md:flex-row md:flex-wrap md:items-center md:gap-x-4`}
    >
      {courses?.courses?.map((course) => (
        <CourseOverview key={course.id} course={course} from={from} />
      ))}
    </div>
  );
}

export default CoursesList;
