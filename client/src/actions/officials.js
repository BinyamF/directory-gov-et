import * as api from "../api";

export const getOfficials = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOfficials();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
