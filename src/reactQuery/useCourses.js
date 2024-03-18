import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/apiCourses";

export function useCourses() {
  const { isLoading, data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return { isLoading, courses };
}
