import { axiosRequest } from "./baseApiRequest";

export async function getCourses(params) {
  try {
    const response = await axiosRequest("get", "Course", null, params);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getPopularCourses() {
  try {
    const response = await axiosRequest("get", "Course/popular");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createCourse(createCourseObj) {
  const formData = new FormData();

  Object.keys(createCourseObj).forEach((key) => {
    formData.append(key, createCourseObj[key]);
  });

  try {
    const response = await axiosRequest("post", "Course", formData);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateCourse(courseId, updateCourseObj) {
  const formData = new FormData();

  Object.keys(updateCourseObj).forEach((key) => {
    formData.append(key, updateCourseObj[key]);
  });

  try {
    const response = await axiosRequest("put", `Course/${courseId}`, formData);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteCourse(courseId) {
  try {
    const response = await axiosRequest("delete", `Course/${courseId}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
