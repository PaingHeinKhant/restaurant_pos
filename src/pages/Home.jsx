import React from "react";
import "./Home.css";
import Orders from "../components/Orders";
import MealCategory from "../components/MealCategory";
import Meals from "../components/Meals";

const Home = () => {
  return (
    <>
      <div className="container-fluid text-white ">
        <div className="row">
          <div className="col-8 mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <h5 className="fw-bold">Paing Hein Khant</h5>
                <span>Tuesday,2 Feb 2023</span>
              </div>
              <input
                className="form-control search-bar-width"
                type="search"
                placeholder="Search For Food, Coffee and etc.."
                aria-label="Search"
              />
            </div>
            <div className="meal-scroll-container">
              <MealCategory />
              <Meals />
            </div>
          </div>
          <div className="col-4 px-0 min-vh-100">
            <Orders />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
