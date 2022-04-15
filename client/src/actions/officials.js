import * as api from "../api";

export const getOfficials = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOfficials();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOfficials = (officials) => async (dispatch) => {
  try {
    const {data} = await api.createOfficials(officials);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
