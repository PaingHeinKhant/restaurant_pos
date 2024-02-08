import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Mainorder from "./pages/Mainorder";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Tables from "./pages/Tables";

const App = () => {
  return (
    <>
      <div className="container-fluid base-bg-two">
        <div className="row">
          <div className="col-1 p-0">
            <Sidebar />
          </div>
          <div className="col-11 p-0">
            <Router>
              <Routes>
                <Route path="/tables" element={<Tables />} />
                <Route path="/table/:tableName" element={<Mainorder />} />{" "}
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
