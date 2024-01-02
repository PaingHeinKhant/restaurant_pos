import React from "react";
import * as type from "../types";
import axios from "axios";

export const menu = (strCategory) => async (dispatch) => {
  dispatch({
    type: type.MENU_DATA,
  });

  const apiEndpoint =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory;
  try {
    const response = await axios.get(apiEndpoint);

    let responseArr = response.data.meals;

    const mealsWithPrices = responseArr.map((meal) => ({
      ...meal,
      price: getRandomPrice(),
    }));
    dispatch({
      type: type.MENU_DATA_SUCCESS,
      payload: mealsWithPrices,
    });
  } catch (error) {
    dispatch({
      type: type.MENU_DATA_FAIL,
    });
  }
};

const getRandomPrice = () => {
  return Math.floor(Math.random() * 20000 + 5);
};
