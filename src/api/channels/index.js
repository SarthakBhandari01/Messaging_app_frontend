import axios from "@/config/axiosConfig";

export const getChannelById = async ({ channelId, token }) => {
  try {
    const response = await axios.get(`/channels/${channelId}`, {
      headers: {
        "x-access-token": token,
      },
    });

    return response?.data?.data;
  } catch (error) {
    console.error("Error in get channel by id request ");
    throw error;
  }
};

export const getPaginatedMessages = async ({ channelId, token, page, limit }) => {
  try {
    const response = await axios.get(`/messages/${channelId}`, {
      params: { limit: limit || 20, page: page || 0 },
      headers: {
        "x-access-token": token,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.log("Error in get channel messages ", error);
    throw error;
  }
};
