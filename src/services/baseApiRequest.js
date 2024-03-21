import axios from "axios";

const baseUrl = "https://localhost:7255/api";

export async function axiosRequest(
  method,
  url,
  data = null,
  params = null,
  customErrorMessages = {},
) {
  try {
    const response = await axios({
      method,
      url: `${baseUrl}/${url}`,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const customMessage =
        customErrorMessages && customErrorMessages[statusCode];

      if (customMessage) {
        throw new Error(customMessage);
      }
    }

    throw new Error(error.message);
  }
}
