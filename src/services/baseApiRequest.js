import axios from "axios";

const baseUrl = "https://localhost:7255/api";

export async function axiosRequest(method, url, data = null, params = null) {
  try {
    const response = await axios({
      method,
      url: `${baseUrl}/${url}`,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
