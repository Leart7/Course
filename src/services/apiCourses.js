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

export async function deleteCourse(courseId) {
  try {
    const response = await axiosRequest("delete", `Course/${courseId}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
