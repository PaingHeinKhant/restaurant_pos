import React from "react";
import { IoMdRestaurant } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { RiDashboard2Line } from "react-icons/ri";
import { GiHotMeal } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 base-bg-one min-vh-100"
      style={{ width: "4.5rem" }}
    >
      <a
        href="/"
        className="d-block p-3 link-dark text-decoration-none"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        {/* <svg className="bi" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg> */}
        <IoMdRestaurant className="color-orange fs-1 " />
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item my-2 active-side-bar">
          <a
            href="#"
            className="nav-link py-3"
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <GoHome className="color-orange fs-4 text-white active-sidebar-text" />
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="nav-link py-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <RiDashboard2Line className="color-orange fs-4" />
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="nav-link py-3 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Orders"
          >
            <GiHotMeal className="color-orange fs-4" />
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="nav-link py-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
          >
            <MdNotificationsActive className="color-orange fs-4" />
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="nav-link py-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <IoMdSettings className="color-orange fs-4" />
          </a>
        </li>
      </ul>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width={24}
            height={24}
            className="rounded-circle"
          />
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
