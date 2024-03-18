import { axiosRequest } from "./baseApiRequest";

export async function getStatuses() {
  try {
    const response = await axiosRequest("get", "Status");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
