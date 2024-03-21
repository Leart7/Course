import { useSearchParams } from "react-router-dom";
import CoursesHeader from "../features/Courses/CoursesHeader";
import CoursesList from "../features/Courses/CoursesList";
import { useCourses } from "../reactQuery/useCourses";
import Pagination from "../ui/Pagination";

function CoursesPage() {
  const [searchParams] = useSearchParams();

  const { courses } = useCourses({
    name: searchParams?.get("name"),
    category: searchParams?.get("category"),
    status: searchParams?.getAll("status").join("&"),
    pageNumber: searchParams?.get("pageNumber") || 1,
  });

  return (
    <>
      <CoursesHeader totalCourses={courses?.totalCourses} />
      <CoursesList courses={courses} />
      <Pagination totalPages={courses?.totalPages} />
    </>
  );
}

export default CoursesPage;
