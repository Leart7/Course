import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse as deleteCourseApi } from "../services/apiCourses";

export function useDeleteCourse() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteCourse } = useMutation({
    mutationFn: deleteCourseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });

  return { isLoading, deleteCourse };
}
