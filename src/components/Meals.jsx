import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./meals.css";
import { menu } from "../store/actions/menu";
import { selectedMenuAdd } from "../store/actions/selectedMenu";
import { CiCirclePlus } from "react-icons/ci";
import { GiHotMeal } from "react-icons/gi";

const Meals = () => {
  const selectedMenus = useSelector((state) => state.menu.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menu("Beef"));
  }, [dispatch]);

  const handleAddMenuClick = (selectedMenu) => {
    dispatch(selectedMenuAdd(selectedMenu));
  };

  return (
    <div className="meals-container mb-5 ">
      <div className="d-flex flex-wrap justify-content-start">
        {selectedMenus &&
          selectedMenus.map((selectedMenu) => (
            <div
              className="card-container col-12 col-sm-6 col-md-4 col-lg-3"
              onClick={() => handleAddMenuClick(selectedMenu)}
              key={selectedMenu.idMeal}
            >
              <div className="card card-image text-center">
                <img
                  className="card-img-top"
                  src={selectedMenu.strMealThumb}
                  alt={`Image of ${selectedMenu.strMeal}`}
                />
                <div className="card-body base-bg-one">
                  <div className="card-title small">
                    <h6> {selectedMenu.strMeal}</h6>
                    <h3 className="small">{selectedMenu.price} MMK</h3>
                    <span className="small text-white-50 ">
                      {selectedMenu.available} stock available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Meals;
