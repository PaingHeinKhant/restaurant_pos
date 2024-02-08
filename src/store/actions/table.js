import React from "react";
import * as type from "../types";
// import apiConfig from "../../services/apiConfig";
import axios from "axios";

export const table = () => async (dispatch) => {
  dispatch({
    type: type.TABLE_DATA,
  });
  const apiEndpoint = "http://localhost:3001/table";
  try {
    const response = await axios.get(apiEndpoint);
    dispatch({
      type: type.TABLE_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: type.TABLE_DATA_FAIL,
    });
  }
};
