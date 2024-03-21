import { axiosRequest } from "./baseApiRequest";

export async function getStatuses() {
  try {
    const response = await axiosRequest("get", "Constants/statuses");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSkillLevels() {
  try {
    const response = await axiosRequest("get", "Constants/skillLevels");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
