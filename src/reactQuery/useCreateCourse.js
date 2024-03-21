import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse as createCourseApi } from "../services/apiCourses";
import toast from "react-hot-toast";

export function useCreateCourse() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: createCourse } = useMutation({
    mutationFn: createCourseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      toast.success("Course created successfully.");
    },
  });

  return { isLoading, createCourse };
}
