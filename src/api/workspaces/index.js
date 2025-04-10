import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      "/workspaces",
      {
        name,
        description,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return response?.data?.data;
  } catch (error) {
    console.error("Error in create workspace request ");
    throw error.response.data;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await axios.get("/workspaces", {
      headers: {
        "x-access-token": token,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.error("Error in create workspace request", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.get(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetch workspace details request ", error);
    throw error.response;
  }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.delete(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("Response in delete workspace  request ", response);
    return response?.data;
  } catch (error) {
    console.error("Error in delete workspace request ", error);
    throw error.response.data;
  }
};

export const updateWorkspaceRequest = async ({ workspaceId, token, name }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}`,
      { name },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in update workspace request ", response);
    return response?.data;
  } catch (error) {
    console.error("Error in update workspace request", error);
    throw error.response.data;
  }
};

export const addChannelToWorkspace = async ({
  workspaceId,
  token,
  channelName,
}) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}/channels`,
      { channelName },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in add channel to workspace request ", response);
    return response?.data;
  } catch (error) {
    console.error("Error in add channel to workspace request", error);
    throw error.response.data;
  }
};

export const resetJoinCodeRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.put(
      `workspaces/${workspaceId}/joinCode/reset`,
      {},
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in Reset Join code request ", response);
    return response?.data?.data;
  } catch (error) {
    console.error("Error in Reset Join code request", error);
    throw error.response.data;
  }
};

export const joinWorkspaceRequest = async ({
  workspaceId,
  joinCode,
  token,
}) => {
  try {
    const response = await axios.put(
      `workspaces/${workspaceId}/join`,
      { joinCode },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in Join workspace request ", response);
    return response?.data?.data;
  } catch (error) {
    console.error("Error in  Join workspace request", error);
    throw error.response.data;
  }
};
