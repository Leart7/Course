import { useEffect } from "react";

export function useCategorySubmition({
  selectedFile,
  setError,
  clearErrors,
  submitFunction,
  setClickedModal,
  image,
  categoryId,
}) {
  function onSubmit(data) {
    if (!image) {
      setError("image", {
        type: "manual",
        message: "Please insert a descriptive icon",
      });
      return;
    }

    const categoryData = {
      image: selectedFile || image,
      name: data.name,
    };

    if (categoryId) {
      submitFunction(
        {
          id: categoryId,
          updateCategoryObj: categoryData,
        },
        {
          onSuccess: () => {
            setClickedModal(false);
          },
        },
      );
    } else {
      submitFunction(categoryData, {
        onSuccess: () => {
          setClickedModal(false);
        },
      });
    }
  }

  useEffect(
    function () {
      if (image !== null) {
        clearErrors("image");
      }
    },
    [image, clearErrors],
  );

  return { onSubmit };
}
