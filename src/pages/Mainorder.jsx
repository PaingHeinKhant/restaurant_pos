import React from "react";
import "./Mainorder.css";
import Orders from "../components/Orders";
import MealCategory from "../components/MealCategory";
import Meals from "../components/Meals";
import Table from "./Table";
import { useParams, useNavigate } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";

const Home = () => {
  let { tableName } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid text-white ">
        <div className="row">
          <div className="col-8 mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div
                className="pe-auto cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <IoCaretBackSharp className="fs-2" />
                <span className="ms-2 pe-auto">Back</span>
              </div>

              <input
                className="form-control search-bar-width"
                type="search"
                placeholder="Search For Food, Coffee and etc.."
                aria-label="Search"
              />
            </div>
            <div className="meal-scroll-container">
              <div className="meal-category-container sticky">
                <MealCategory />
              </div>
              <Meals />
              <Table />
            </div>
          </div>
          <div className="col-4 px-0 min-vh-100">
            <Orders tableName={tableName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
