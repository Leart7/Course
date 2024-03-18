import { axiosRequest } from "./baseApiRequest";

export async function getCourses() {
  try {
    const response = await axiosRequest("get", "Course");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
