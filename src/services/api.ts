import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://your-backend-url.com/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendFrameForDetection = async (frame: Blob) => {
  try {
    const response = await apiClient.post("/detect", frame, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending frame: ", error);
    throw error;
  }
};
