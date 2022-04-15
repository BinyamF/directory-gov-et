import * as api from "../api";

export const getOrganizations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrganizations();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrganization = (organization) => async (dispatch) => {
  try {
    const {data} = await api.createOrganization(organization);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
