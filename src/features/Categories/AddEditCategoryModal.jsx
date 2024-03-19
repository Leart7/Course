import ModalXCloser from "../../ui/ModalXCloser";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CategoryModelFooter from "../../ui/CategoryModelFooter";
import FormImage from "../../ui/FormImage";
import { useCategorySubmition } from "../../hooks/useCategorySubmition";
import CategoryNameInput from "../../ui/CategoryNameInput";

function AddCategoryModal({
  setClickedModal,
  method,
  submitFunction,
  category,
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      name: category?.name,
      image: category?.icon,
    },
  });

  const image = watch("icon") || category?.icon;

  const { onSubmit } = useCategorySubmition({
    selectedFile,
    setError,
    clearErrors,
    submitFunction,
    setClickedModal,
    image,
    categoryId: category?.id,
  });

  return (
    <div className="fixed inset-0 z-[500000] h-full w-full bg-white shadow-2xl lg:left-1/2 lg:top-1/2 lg:h-fit lg:w-[38rem] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:overflow-y-auto lg:rounded-lg">
      <ModalXCloser setClickedModal={setClickedModal} />
      <h2 className="p-5 text-2xl font-medium">{method} Category</h2>
      <hr></hr>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mt-3 flex flex-col gap-y-4 px-5">
          <FormImage
            image={image}
            setValue={setValue}
            error={errors.image?.message}
            setSelectedFile={setSelectedFile}
          />

          <CategoryNameInput error={errors.name?.message} register={register} />
        </div>

        <CategoryModelFooter
          setClickedModal={setClickedModal}
          btnText={method}
        />
      </form>
    </div>
  );
}

export default AddCategoryModal;
