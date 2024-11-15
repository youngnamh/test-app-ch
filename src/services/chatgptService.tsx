import axios from "axios";

// Define the base URL for your Django API endpoint
const API_URL = "http://trainer.youngnamhlady.com/api/chatgpt/";

// Function to send a request with a string input to the endpoint
export const sendChatRequest = async (input: string): Promise<string> => {
  try {
    const response = await axios.get(API_URL, {
      params: { input },
    });
    console.log("Response from chatgpt:", response.data.response);
    return response.data.response; // Assuming your API response has a structure like { response: "chatgpt response" }
  } catch (error) {
    console.error("Error sending chat request:", error);
    throw new Error("Failed to fetch chat response");
  }
};
