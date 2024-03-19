import { axiosRequest } from "./baseApiRequest";

export async function getCategories() {
  try {
    const response = await axiosRequest("get", "Category");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteCategory(categoryId) {
  try {
    const response = await axiosRequest("delete", `Category/${categoryId}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createCategory(createCategoryObj) {
  const formData = new FormData();

  Object.keys(createCategoryObj).forEach((key) => {
    formData.append(key, createCategoryObj[key]);
  });

  try {
    const response = await axiosRequest("post", "Category", formData);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateCategory(categoryId, updateCategoryObj) {
  const formData = new FormData();

  Object.keys(updateCategoryObj).forEach((key) => {
    formData.append(key, updateCategoryObj[key]);
  });

  try {
    const response = await axiosRequest(
      "put",
      `Category/${categoryId}`,
      formData,
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
