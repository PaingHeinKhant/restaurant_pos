import React, { useEffect, useState } from "react";
import "../components/MealCatagory.css";
import { menuCategory } from "../store/actions/menuCategory";
import { useSelector, useDispatch } from "react-redux";
import { menu } from "../store/actions/menu";

const MealCategory = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(menuCategory());
  }, [dispatch]);

  const menuCategories = useSelector(
    (state) => state.menuCategory.data && state.menuCategory.data.categories
  );

  const handleItemClick = (strCategory) => {
    setSelectedCategory(strCategory);
    dispatch(menu(strCategory));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div
              className="mt-3 d-flex color-orange fw-bold"
              style={{
                overflowX: "auto",
              }}
            >
              {menuCategories &&
                menuCategories.map((menuCategory) => (
                  <div
                    className={`me-4 menu-item fw-bolder ${
                      selectedCategory === menuCategory.strCategory
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleItemClick(menuCategory.strCategory)}
                  >
                    {menuCategory.strCategory}
                  </div>
                ))}
            </div>
          </div>
          <div className="col-6 p-0"></div>
        </div>
      </div>
      <hr className="color-orange" />
    </>
  );
};

export default MealCategory;
