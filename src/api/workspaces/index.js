import axios from "axios";

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
    return response;
  } catch (error) {
    console.error("Error in create workspace request", error);
  }
};