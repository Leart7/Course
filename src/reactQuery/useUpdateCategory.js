import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory as updateCategoryApi } from "../services/apiCategories";

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateCategory } = useMutation({
    mutationFn: (updateCategoryObj) =>
      updateCategoryApi(
        updateCategoryObj.id,
        updateCategoryObj.updateCategoryObj,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { isLoading, updateCategory };
}
