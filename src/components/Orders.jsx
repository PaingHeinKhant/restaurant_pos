import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../pages/Table";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineTableBar } from "react-icons/md";
import { GiRoundTable } from "react-icons/gi";

import "./order.css";

const Orders = ({ tableName }) => {
  const selectedMenusOrder = useSelector(
    (state) => state.selectedMenu.selectedMenuList
  );

  // Calculate menu item counts
  const menuCounts = selectedMenusOrder.reduce((acc, curr) => {
    acc[curr.idMeal] = (acc[curr.idMeal] || 0) + 1;
    return acc;
  }, {});

  // Calculate subtotal
  const subtotal = selectedMenusOrder.reduce((total, menuItem) => {
    const count = menuCounts[menuItem.idMeal];
    return total + menuItem.price * count;
  }, 0);

  const handleDelete = (menuId) => {
    console.log("====================================");
    console.log(menuId);
    console.log("====================================");
  };
  const numbers = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
  ];

  return (
    <>
      <div className="wrapper base-bg-one meal-scroll-container_order">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-3 min-vh-100 d-flex flex-column overflow-auto">
              <div className="fixed-elements">
                <h6>Orders #456781</h6>
                <div className="d-flex justify-content-between align-items-center  my-3 ">
                  <h3>{tableName}</h3>
                  {/* <button
                    type="button"
                    class="btn background-btn fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <CiCirclePlus className="fs-4 me-1" />
                    Table
                  </button> */}
                  <button
                    type="button"
                    class="btn background-btn fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <MdOutlineTableBar className="fs-4 me-1" />
                    Move
                  </button>
                  <button className="btn background-btn fw-bold">
                    <GiRoundTable className="fs-4 me-1" />
                    Combine
                  </button>
                </div>
                <div className="row my-2">
                  <div className="col-9 d-flex justify-content-between ">
                    <div className="">Item</div>
                    <div className="me-4">QTY</div>
                  </div>
                  <div className="col-3">
                    <div className="ms-4">Price</div>
                  </div>
                  <hr className="color-orange" />
                </div>
              </div>
              <div className="scrollable-container">
                {/* Render each menu item once with count */}
                {Object.keys(menuCounts).map((menuId) => {
                  const menuItem = selectedMenusOrder.find(
                    (item) => item.idMeal === menuId
                  );
                  const count = menuCounts[menuId];

                  return (
                    <div
                      className="card w-100 order-card mb-2  d-flex align-items-center"
                      key={menuItem.idMeal}
                    >
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <div className="d-flex">
                                <img
                                  src={menuItem.strMealThumb}
                                  className="img-fluid w-25 rounded-start"
                                  alt="Meal Image"
                                />
                                <div className="text-white ms-2">
                                  <span className=" small ">
                                    {menuItem.strMeal
                                      .split(" ")
                                      .slice(0, 4)
                                      .join(" ")}{" "}
                                    {menuItem.strMeal.split(" ").length > 10 &&
                                      "..."}{" "}
                                  </span>

                                  <div className=" small text-white-50 ">
                                    {menuItem.price} MMK
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              {/* Input for quantity */}
                              <input
                                type="text"
                                className="qty form-control text-center"
                                value={count}
                                readOnly
                              />
                            </div>
                          </div>
                          <div class="form-group my-2">
                            {/* Input for order notes */}
                            <input
                              type="text"
                              className="order-note form-control"
                              placeholder="Order Notes..."
                            />
                          </div>
                        </div>

                        <div className="col-3 text-white text-center mt-3">
                          {/* Total price for this menu item */}
                          <div className="mb-1">
                            {menuItem.price * count} MMK
                          </div>
                          <div className="">
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => handleDelete(menuItem.idMeal)}
                            >
                              <MdDelete className="fs-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="fixed-elements-bottom ">
                <div className="row">
                  <hr className="color-orange" />
                  <div className="col-9 d-flex justify-content-between ">
                    <div className="">Discount</div>
                  </div>
                  <div className="col-3">
                    <div className="ms-5">0</div>
                  </div>
                  <div className="row my-2">
                    <div className="col-3 d-flex justify-content-between">
                      <div className="">Sub Total</div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-5 text-end">
                      <div className="ms-5">{subtotal} MMK</div>
                    </div>
                  </div>
                  <button className="btn background-btn fw-bold">Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content base-bg-one">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Table
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                {numbers.map((number, index) => (
                  <div key={index} className="col-2 mb-3 ">
                    <div className="card background-color-orange border-color text-white ">
                      <div className="card-body text-center ">
                        <div className="">{number}</div>
                        <div className="">3 Peoples</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
