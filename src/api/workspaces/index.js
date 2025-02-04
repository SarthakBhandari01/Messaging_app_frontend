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
    console.log("Response in create workspace request", response);
    return response?.data;
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

    console.log("Response in fetch workspace request", response);
    return response?.data?.data;
  } catch (error) {
    console.error("Error in create workspace request", error);
    return error.response.data;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.get(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("Response in fetch workspace details request ", response);
    return response?.data?.data;
  } catch (error) {
    console.error("Error in fetch workspace details request ", error);
    return error.response.data;
  }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    console.log(workspaceId);
    const response = await axios.delete(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("Response in delete workspace  request ", response);
    return response?.data;
  } catch (error) {
    console.error("Error in delete workspace request ", error);
    return error.response.data;
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
