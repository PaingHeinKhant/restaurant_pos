import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./meals.css";
import { menu } from "../store/actions/menu";

const Meals = () => {
  const selectedMenus = useSelector((state) => state.menu.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menu("Beef"));
  }, [dispatch]);

  return (
    <div className="meals-container ">
      <div className="d-flex flex-wrap justify-content-around">
        {selectedMenus &&
          selectedMenus.map((selectedMenu) => (
            <div
              className="card mb-3 m-2 card-image rounded-3 text-center"
              key={selectedMenu.idMeal}
            >
              <img
                className="card-img-top"
                src={selectedMenu.strMealThumb}
                alt={`Image of ${selectedMenu.strMeal}`}
              />
              <p className="card-title my-3 small">{selectedMenu.strMeal}</p>
              <p className="small">${selectedMenu.price} MMK</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Meals;
