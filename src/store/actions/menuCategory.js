import React from "react";
import * as type from "../types";
// import apiConfig from "../../services/apiConfig";
import axios from "axios";

export const menuCategory = () => async (dispatch) => {
  dispatch({
    type: type.CATEGORY_DATA,
  });
  const apiEndpoint = "https://www.themealdb.com/api/json/v1/1/categories.php";
  try {
    const response = await axios.get(apiEndpoint);

    dispatch({
      type: type.CATEGORY_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: type.CATEGORY_DATA_FAIL,
    });
  }
};
